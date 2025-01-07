import { createEffect } from 'solid-js'
import {
  ColorInput,
  H3,
  Labelled,
  List,
  Select,
  TextureInput,
  Vector3Input,
  Widget,
} from 'src/components'
import { createWritable } from 'src/utils/create-writable'
import * as THREE from 'three'

export function MaterialWidget(props: { node: THREE.Mesh }) {
  const [type, setType] = createWritable<
    'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
  >(() => props.node.material.type)

  createEffect(() => {
    if (type() !== props.node.material.type) {
      const color = props.node.material.color
      const map = props.node.material.map
      props.node.material = new THREE[type()]()
      props.node.material.color = color
      props.node.material.map = map
    }
  })

  createEffect(() => console.log('props.node.material', props.node.material.map))

  return (
    <Widget name="Material">
      <H3>{props.node.name}</H3>
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
            value={props.node.material.color}
            onR={r => (props.node.material.color.r = r)}
            onG={g => (props.node.material.color.g = g)}
            onB={b => (props.node.material.color.b = b)}
          />
        </Labelled>
        <Labelled label="map">
          <TextureInput
            texture={props.node.material.map}
            onInput={texture => (props.node.material.map = texture)}
          />
        </Labelled>
      </List>
    </Widget>
  )
}

export function TransformWidget(props: { node: THREE.Object3D }) {
  return (
    <Widget name="Transform">
      <List>
        <Labelled label="position">
          <Vector3Input
            value={props.node.position}
            onX={x => (props.node.position.x = x)}
            onY={y => (props.node.position.y = y)}
            onZ={z => (props.node.position.z = z)}
          />
        </Labelled>
        <Labelled label="rotation">
          <Vector3Input
            value={props.node.rotation}
            onX={x => (props.node.rotation.x = x)}
            onY={y => (props.node.rotation.y = y)}
            onZ={z => (props.node.rotation.z = z)}
          />
        </Labelled>
        <Labelled label="scale">
          <Vector3Input
            value={props.node.scale}
            onX={x => (props.node.scale.x = x)}
            onY={y => (props.node.scale.y = y)}
            onZ={z => (props.node.scale.z = z)}
          />
        </Labelled>
      </List>
    </Widget>
  )
}
