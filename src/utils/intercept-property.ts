import { batch, getListener } from 'solid-js'
import { createPulse, Pulse } from './create-trigger'

export const $VALUE = Symbol()
const $LENGTH = Symbol()
const PROXY_MAP = new WeakMap()
const PROPERTY_MAP = new WeakMap<any, Set<string | symbol | number>>()
let SHOULD_INTERCEPT = true

export function bypass<T>(cb: () => T): T {
  let before = SHOULD_INTERCEPT
  SHOULD_INTERCEPT = false
  const result = cb()
  SHOULD_INTERCEPT = before
  return result
}
export function intercept<T>(cb: () => T): T {
  let before = SHOULD_INTERCEPT
  SHOULD_INTERCEPT = true
  const result = cb()
  SHOULD_INTERCEPT = before
  return result
}

export function raw<T>(value: T): T {
  return typeof value === 'object' && value !== null ? value[$VALUE] ?? value : value
}

const hasSolidified = (ThreeClass: any, propName: number | string | symbol) => {
  if (PROPERTY_MAP.get(ThreeClass)?.has(propName)) {
    return true
  }
  if (!PROPERTY_MAP.has(ThreeClass)) {
    PROPERTY_MAP.set(ThreeClass, new Set())
  }
  PROPERTY_MAP.get(ThreeClass)!.add(propName)
  return false
}

type ExcludeNonFunctionProperties<T> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends Function ? never : K
  }[keyof T]
>

// Generic function to make properties of Three.js classes reactive
export function interceptProperty<
  T extends new (...args: any[]) => any,
  U extends keyof ExcludeNonFunctionProperties<InstanceType<T>>,
>(ThreeClass: T, propName: U, proxy = false) {
  if (hasSolidified(ThreeClass, propName)) return

  const map = new WeakMap<object, { pulses: Map<U, Pulse>; values: Map<U, any> }>()

  const setter = Object.getOwnPropertyDescriptor(ThreeClass.prototype, propName)?.set

  const getNode = (self: object) => {
    let node = map.get(self)
    if (!node) {
      node = {
        pulses: new Map(),
        values: new Map(),
      }
      map.set(self, node)
    }
    return node
  }

  Object.defineProperty(ThreeClass.prototype, propName, {
    get() {
      let node = map.get(this)
      const temp = node?.values.get(propName)
      if (!SHOULD_INTERCEPT) {
        return temp
      }
      if (!getListener()) {
        return proxy ? createProxy(temp) : temp
      }
      node = getNode(this)
      let pulse = node.pulses.get(propName)
      if (!pulse) {
        pulse = createPulse()
        node.pulses.set(propName, pulse)
      }
      pulse.listen()
      return proxy ? createProxy(temp) : temp
    },
    set(value) {
      const node = getNode(this)
      node.values.set(propName, raw(value))
      if (SHOULD_INTERCEPT) {
        node.pulses.get(propName)?.emit(value)
      }
      setter?.call(this, value)
    },
    configurable: true,
    enumerable: false,
  })
}

export function createProxy<T extends object>(node: T): T {
  if (PROXY_MAP.has(node)) return PROXY_MAP.get(node)

  const properties = new Map<string | symbol | object, Pulse>()

  const proxy = new Proxy(node, {
    get(target, property) {
      if (property === $VALUE) {
        return node
      }

      const value = target[property]

      if (!SHOULD_INTERCEPT) {
        return value
      }

      if (!properties.has(property)) {
        properties.set(property, createPulse())
      }

      if (!properties.has($LENGTH)) {
        properties.set($LENGTH, createPulse())
      }

      properties.get(property)!.listen()
      properties.get($LENGTH)!.listen()

      return value
    },
    set(target, property, value) {
      if (target[property] === value) {
        return true
      }

      if (!SHOULD_INTERCEPT) {
        target[property] = value
        return true
      }

      const shouldUpdate = !(property in target)
      target[property] = value

      batch(() => {
        properties.get(property)?.emit()
        if (shouldUpdate) {
          properties.get($LENGTH)?.emit()
        }
      })

      return true
    },
  })

  PROXY_MAP.set(node, proxy)

  return proxy
}
