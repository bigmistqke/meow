import { createEffect, createMemo, createSignal, For, mapArray } from 'solid-js'
import * as THREE from 'three'
import { Mesh } from 'three'
import { ColorInput, H3, Labelled, List, SelectInput, TextureInput } from '../components'
import { Extension } from '../types'
import { traverse } from '../utils/traverse'

export default (): Extension => {
  const [meshes, setMeshes] = createSignal<Array<Mesh>>([])

  const materials = createMemo(
    mapArray(meshes, mesh => {
      const [type, setType] = createSignal<
        'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
      >(mesh.material.type)
      const [color, setColor] = createSignal<THREE.Color>(mesh.material.color)
      const [map, setMap] = createSignal<THREE.Texture>(mesh.material.map)

      function update(type: string, value: any) {
        mesh.material[type] = value
        mesh.material.needsUpdate = true
      }

      createEffect(() => update('color', color()))
      createEffect(() => update('map', map()))
      createEffect(() => {
        if (type() !== mesh.material.type) {
          mesh.material = new THREE[type()]()
          update('color', color())
          update('map', map())
        }
      })

      return {
        mesh,
        map,
        color,
        setColor,
        setMap,
        type,
        setType,
      }
    }),
  )

  createEffect(() => {
    meshes()?.forEach(mesh => console.log(mesh.material))
  })

  return {
    name: 'materials',
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
          {({ mesh, setMap, map, setColor, color, type, setType }) => (
            <>
              <H3>{mesh.name}</H3>
              <List>
                <Labelled label="type">
                  <SelectInput
                    value={type()}
                    options={['MeshPhongMaterial', 'MeshStandardMaterial', 'MeshBasicMaterial']}
                    onInput={setType}
                  />
                </Labelled>
                <Labelled label="color">
                  <ColorInput color={color()} onInput={setColor} />
                </Labelled>
                <Labelled label="map">
                  <TextureInput texture={map()} onInput={setMap} />
                </Labelled>
              </List>
            </>
          )}
        </For>
      )
    },
  }
}
