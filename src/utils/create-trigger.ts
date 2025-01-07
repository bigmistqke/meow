import { Accessor, Setter, createSignal } from 'solid-js'

export type Pulse = { listen: Accessor<void>; emit: Setter<void> }
export function createPulse(): Pulse {
  const [listen, emit] = createSignal<void>(undefined, { equals: false })
  return { listen, emit }
}
