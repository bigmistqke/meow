import { Accessor, createMemo, onCleanup } from 'solid-js'
import { createObjectWithGetters } from './create-object-with-getters'
import { createPulse, Pulse } from './create-trigger'

interface TrackNode extends Pulse {
  value: any
  referenceCount: number
  equals?: (value: any) => boolean
}

const tracking = new Map<object, Map<string | number | symbol, TrackNode>>()

export function trackTracked() {
  tracking.entries().forEach(([object, map]) =>
    map.entries().forEach(([property, node]) => {
      const shouldEmit = !node.equals ? object[property] !== node.value : !node.equals(node.value)
      node.value = object[property]
      if (shouldEmit) {
        node.emit()
      }
    }),
  )
}

function createTrackNode(initial: unknown, equals?: (value: any) => boolean) {
  return { ...createPulse(), value: initial, referenceCount: 0, equals }
}

export function track<T extends object, U extends keyof T>(
  target: T | Accessor<T>,
  property: U,
  equals?: (value: T[U]) => boolean,
): Accessor<T[U]>
export function track<T extends object, U extends Array<keyof T>>(
  target: T | Accessor<T>,
  properties: U,
  equals?: (value: T[U[number]]) => boolean,
): { [K in U[number]]: T[K] }
export function track(
  target: object | Accessor<object>,
  property: string | Array<string>,
  equals?: (value: any) => boolean,
): Accessor<any> | Record<string, any> {
  if (Array.isArray(property)) {
    return createObjectWithGetters(
      property.map(property => {
        return [property, track(target, property, equals)] as const
      }),
    )
  }

  if (typeof target === 'function') {
    const memo = createMemo(() => track(target(), property, equals))
    return () => memo()()
  }

  let map = tracking.get(target)
  if (!map) {
    map = new Map()
    tracking.set(target, map)
  }
  let node = map.get(property)
  if (node) {
    node.referenceCount++
  } else {
    node = createTrackNode(target[property], equals)
    map.set(property, node)
  }

  function cleanup() {
    node!.referenceCount--
    if (node!.referenceCount === 0) {
      map!.delete(property)
    }
  }
  onCleanup(cleanup)

  return () => {
    node.listen()
    return node.value
  }
}
