import { Accessor, createMemo, createSignal, Setter, SignalOptions } from 'solid-js'

export function createWritable<T>(value: (previous?: T) => T, options?: SignalOptions<T>) {
  const memo = createMemo(() => createSignal<T>(value(), options))
  const accessor: Accessor<T> = () => memo()[0]()
  const setter: Setter<T> = value => memo()[1](value)
  return [accessor, setter] as const
}
