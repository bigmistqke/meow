import { createEffect, createMemo, createSignal, For, mapArray } from 'solid-js'
import * as THREE from 'three'
import { Mesh } from 'three'
import { ColorInput, H3, Labelled, List, Select, TextureInput } from '../components'
import { Extension } from '../types'
import { traverse } from '../utils/traverse'

export default (): Extension => {
  const [meshes, setMeshes] = createSignal<Array<Mesh>>([])

  const materials = createMemo(
    mapArray(meshes, mesh => {
      const [type, setType] = createSignal<
        'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
      >(mesh.material.type)

      createEffect(() => {
        if (type() !== mesh.material.type) {
          const color = mesh.material.color
          const map = mesh.material.map
          mesh.material = new THREE[type()]()
          mesh.material.color = color
          mesh.material.map = map
        }
      })

      return {
        name: mesh.name,
        get material() {
          return mesh.material
        },
        type,
        setType,
      }
    }),
  )

  return {
    name: 'Material',
    async setup(state) {
      createEffect(() => {
        if (state.gltf) {
          setMeshes(() => {
            const meshes = new Array<Mesh>()
            traverse(state.gltf!.scene, object => {
              if (object instanceof Mesh) {
                meshes.push(object)
              }
            })
            return meshes
          })
        }
      })
    },
    widget() {
      return (
        <For each={materials()}>
          {({ name, material, type, setType }) => (
            <>
              <H3>{name}</H3>
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
                    value={material.color}
                    onR={r => (material.color.r = r)}
                    onG={g => (material.color.g = g)}
                    onB={b => (material.color.b = b)}
                  />
                </Labelled>
                <Labelled label="map">
                  <TextureInput
                    texture={material.map}
                    onInput={texture => (material.map = texture)}
                  />
                </Labelled>
              </List>
            </>
          )}
        </For>
      )
    },
  }
}
