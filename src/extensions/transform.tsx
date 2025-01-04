import { createEffect, createSignal } from 'solid-js'
import { Vector3 } from 'three'
import { Labelled, List, Vector3Input } from '../components'
import { Extension } from '../types'

export default (): Extension => {
  return {
    name: 'Transform',
    widget(state) {
      const [position, setPosition] = createSignal(new Vector3(), { equals: false })
      const [rotation, setRotation] = createSignal(new Vector3(0, Math.PI, 0), { equals: false })
      const [scale, setScale] = createSignal(new Vector3(3, 3, 3), { equals: false })
      createEffect(() => {
        state.scene.scale.set(scale().x, scale().y, scale().z)
      })
      createEffect(() => {
        state.scene.rotation.set(rotation().x, rotation().y, rotation().z)
      })
      createEffect(() => {
        state.scene.position.set(position().x, position().y, position().z)
      })
      return (
        <List>
          <Labelled label="position">
            <Vector3Input value={position()} onInput={setPosition} />
          </Labelled>
          <Labelled label="rotation">
            <Vector3Input value={rotation()} onInput={setRotation} />
          </Labelled>
          <Labelled label="scale">
            <Vector3Input value={scale()} onInput={setScale} />
          </Labelled>
        </List>
      )
    },
  }
}
