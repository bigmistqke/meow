import { type Accessor, batch, createSignal, getListener, type Setter } from 'solid-js'

type Trigger<T> = { listen: Accessor<T>; trigger: Setter<T> }
function trigger<T>(initialValue: T | void) {
  const [listen, trigger] = createSignal(initialValue, { equals: false })
  return { listen, trigger }
}

const $LENGTH = Symbol()
const $RAW = Symbol()
const PROXIES = new WeakMap()
const INTERCEPT_MAP = new WeakMap<any, Set<string>>()
let INTERCEPT = true

export function bypass<T>(cb: () => T): T {
  let before = INTERCEPT
  INTERCEPT = false
  const result = cb()
  INTERCEPT = before
  return result
}
export function intercept<T>(cb: () => T): T {
  let before = INTERCEPT
  INTERCEPT = true
  const result = cb()
  INTERCEPT = before
  return result
}

export function unwrap<T>(value: T): T {
  return typeof value === 'object' && value !== null ? value[$RAW] ?? value : value
}

export function createProxy<T extends object>(node: T): T {
  if (PROXIES.has(node)) return PROXIES.get(node)

  const properties = new Map<string | symbol | object, Trigger<void>>()

  const proxy = new Proxy(node, {
    get(target, property) {
      if (property === $RAW) {
        return node
      }

      const value = target[property]

      if (INTERCEPT) {
        return value
      }

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

      if (INTERCEPT) {
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

const hasIntercepted = (ThreeClass: any, propName: string) => {
  if (INTERCEPT_MAP.get(ThreeClass)?.has(propName)) {
    return true
  }
  if (!INTERCEPT_MAP.has(ThreeClass)) {
    INTERCEPT_MAP.set(ThreeClass, new Set())
  }
  INTERCEPT_MAP.get(ThreeClass)!.add(propName)
  return false
}

// Generic function to make properties of Three.js classes reactive
export function interceptProperty(
  Class: new (...args: any) => any,
  propName: string,
  proxy = false,
) {
  if (hasIntercepted(Class, propName)) return

  const symbol = Symbol(`${propName}-solid`)
  const tempSymbol = Symbol(`${propName}-temp`)
  const setter = Object.getOwnPropertyDescriptor(Class.prototype, propName)?.set

  Object.defineProperty(Class.prototype, propName, {
    get() {
      const tempValue = this[tempSymbol]
      if (!INTERCEPT) {
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
      this[tempSymbol] = unwrap(value)
      if (!INTERCEPT) {
        setter?.(value)
        return
      }
      if (this[symbol]) {
        this[symbol].trigger(value)
      }
      setter?.(value)
    },
    configurable: true,
    enumerable: false,
  })
}
