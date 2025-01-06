import { createEffect, createSignal, For } from 'solid-js'
import * as THREE from 'three'
import { Mesh } from 'three'
import { ColorInput, H3, Labelled, List, Select, TextureInput } from '../components'
import { Extension } from '../types'
import { createWritable } from '../utils/create-writable'
import { traverse } from '../utils/traverse'

export default (): Extension => {
  const [meshes, setMeshes] = createSignal<Array<THREE.Object3D>>()

  return {
    name: 'Material',
    async setup(state) {
      createEffect(() =>
        setMeshes(() =>
          state.gltf ? traverse.filter(state.gltf!.scene, object => object instanceof Mesh) : [],
        ),
      )
    },
    widget() {
      return (
        <For each={meshes()}>
          {mesh => {
            const [type, setType] = createWritable<
              'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
            >(() => mesh.material.type)

            createEffect(() => {
              if (type() !== mesh.material.type) {
                const color = mesh.material.color
                const map = mesh.material.map
                mesh.material = new THREE[type()]()
                mesh.material.color = color
                mesh.material.map = map
              }
            })

            return (
              <>
                <H3>{mesh.name}</H3>
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
                      value={mesh.material.color}
                      onR={r => (mesh.material.color.r = r)}
                      onG={g => (mesh.material.color.g = g)}
                      onB={b => (mesh.material.color.b = b)}
                    />
                  </Labelled>
                  <Labelled label="map">
                    <TextureInput
                      texture={mesh.material.map}
                      onInput={texture => (mesh.material.map = texture)}
                    />
                  </Labelled>
                </List>
              </>
            )
          }}
        </For>
      )
    },
  }
}
