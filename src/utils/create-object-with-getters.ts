import { Accessor } from 'solid-js'

export function createObjectWithGetters<K extends PropertyKey, V>(
  arr: Array<[key: K, accessor: Accessor<V>]>,
): { [P in K]: V } {
  const obj: any = {}

  arr.forEach(([key, accessor]) => {
    Object.defineProperty(obj, key, {
      get: accessor,
      enumerable: true,
      configurable: true,
    })
  })

  return obj
}
