import { type Accessor, batch, createSignal, getListener, type Setter } from 'solid-js'

type MeowSignal<T> = { listen: Accessor<T>; trigger: Setter<T> }
function trigger<T>(initialValue: T | void) {
  const [listen, trigger] = createSignal(initialValue, { equals: false })
  return { listen, trigger }
}

const $LENGTH = Symbol()
const $RAW = Symbol()
const PROXIES = new WeakMap()

let UNPROXY = false
export function bypass<T>(cb: () => T): T {
  let before = UNPROXY
  UNPROXY = true
  const result = cb()
  UNPROXY = before
  return result
}
export function intercept<T>(cb: () => T): T {
  let before = UNPROXY
  UNPROXY = false
  const result = cb()
  UNPROXY = before
  return result
}

export function raw<T>(value: T): T {
  return typeof value === 'object' && value !== null ? value[$RAW] ?? value : value
}

export function createProxy<T extends object>(node: T): T {
  if (PROXIES.has(node)) return PROXIES.get(node)

  const properties = new Map<string | symbol | object, MeowSignal<void>>()

  const proxy = new Proxy(node, {
    get(target, property) {
      if (property === $RAW) {
        return node
      }

      const value = target[property]

      /* if (UNPROXY) {
        return value
      } */

      if (!properties.has(property)) {
        properties.set(property, trigger())
      }

      if (!properties.has($LENGTH)) {
        properties.set($LENGTH, trigger())
      }

      properties.get(property)!.listen()
      properties.get($LENGTH)!.listen()

      return value
    },
    set(target, property, value) {
      if (target[property] === value) {
        return true
      }

      if (UNPROXY) {
        target[property] = value
        return true
      }

      const shouldUpdate = !(property in target)
      target[property] = value

      batch(() => {
        properties.get(property)?.trigger()
        if (shouldUpdate) {
          properties.get($LENGTH)?.trigger()
        }
      })

      return true
    },
  })

  PROXIES.set(node, proxy)

  return proxy
}

const map = new WeakMap<any, Set<string>>()

const hasSolidified = (ThreeClass: any, propName: string) => {
  if (map.get(ThreeClass)?.has(propName)) {
    return true
  }
  if (!map.has(ThreeClass)) {
    map.set(ThreeClass, new Set())
  }
  map.get(ThreeClass)!.add(propName)
  return false
}

// Generic function to make properties of Three.js classes reactive
export function interceptProperty(ThreeClass: any, propName: string, proxy = false) {
  if (hasSolidified(ThreeClass, propName)) return

  const symbol = Symbol(`${propName}-solid`)
  const tempSymbol = Symbol(`${propName}-temp`)
  const setter = Object.getOwnPropertyDescriptor(ThreeClass.prototype, propName)?.set

  Object.defineProperty(ThreeClass.prototype, propName, {
    get() {
      const tempValue = this[tempSymbol]
      if (UNPROXY) {
        return this[tempSymbol]
      }
      if (!getListener()) {
        return proxy ? createProxy(tempValue) : tempValue
      }
      if (!this[symbol]) {
        this[symbol] = trigger()
      }
      this[symbol].listen()
      return proxy ? createProxy(tempValue) : tempValue
    },
    set(value) {
      this[tempSymbol] = raw(value)
      if (!UNPROXY && this[symbol]) {
        this[symbol].trigger(value)
      }
      setter?.(value)
    },
    configurable: true,
    enumerable: false,
  })
}
