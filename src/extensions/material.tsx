import { createEffect, Show } from 'solid-js'
import { ColorInput, H3, Labelled, List, Select, TextureInput } from 'src/components'
import { Extension } from 'src/types'
import { createWritable } from 'src/utils/create-writable'
import * as THREE from 'three'
import { Mesh } from 'three'

export default (): Extension => {
  return {
    name: 'Material',
    widget(object) {
      return (
        <Show when={object instanceof Mesh && object}>
          {mesh => {
            const [type, setType] = createWritable<
              'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
            >(() => mesh().material.type)

            createEffect(() => {
              if (type() !== mesh().material.type) {
                const color = mesh().material.color
                const map = mesh().material.map
                mesh().material = new THREE[type()]()
                mesh().material.color = color
                mesh().material.map = map
              }
            })

            return (
              <>
                <H3>{mesh().name}</H3>
                <List>
                  <Labelled label="type">
                    <Select
                      value={type()}
                      options={['MeshPhongMaterial', 'MeshStandardMaterial', 'MeshBasicMaterial']}
                      onInput={setType}
                    />
                  </Labelled>
                  <Labelled label="color">
                    <ColorInput
                      value={color}
                      onR={r => (mesh().material.color.r = r)}
                      onG={g => (mesh().material.color.g = g)}
                      onB={b => (mesh().material.color.b = b)}
                    />
                  </Labelled>
                  <Labelled label="map">
                    <TextureInput
                      texture={mesh().material.map}
                      onInput={texture => (mesh().material.map = texture)}
                    />
                  </Labelled>
                </List>
              </>
            )
          }}
        </Show>
      )
    },
  }
}
