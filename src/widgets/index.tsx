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
import { track } from 'src/utils/track'
import * as THREE from 'three'

export function MaterialWidget(props: { node: THREE.Mesh }) {
  // Updates whenever props.node.material is set
  const material = track(() => props.node, 'material')
  // Updates whenever props.node.material.color is set
  const color = track(material, 'color')
  // Updates whenever the r,g,b-value of props.node.material.color is set
  const rgb = track(color, ['r', 'g', 'b'])

  const [type, setType] = createWritable<
    'MeshBasicMaterial' | 'MeshPhongMaterial' | 'MeshStandardMaterial'
  >(() => material().type)

  createEffect(() => {
    if (type() !== props.node.material.type) {
      const color = props.node.material.color
      const map = props.node.material.map
      props.node.material = new THREE[type()]()
      props.node.material.color = color
      props.node.material.map = map
    }
  })

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
            value={rgb}
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
  const position = track(() => props.node.position, ['x', 'y', 'z'])
  const rotation = track(() => props.node.rotation, ['x', 'y', 'z'])
  const scale = track(() => props.node.scale, ['x', 'y', 'z'])
  return (
    <Widget name="Transform">
      <List>
        <Labelled label="position">
          <Vector3Input
            value={position}
            onX={x => (props.node.position.x = x)}
            onY={y => (props.node.position.y = y)}
            onZ={z => (props.node.position.z = z)}
          />
        </Labelled>
        <Labelled label="rotation">
          <Vector3Input
            value={rotation}
            onX={x => (props.node.rotation.x = x)}
            onY={y => (props.node.rotation.y = y)}
            onZ={z => (props.node.rotation.z = z)}
          />
        </Labelled>
        <Labelled label="scale">
          <Vector3Input
            value={scale}
            onX={x => (props.node.scale.x = x)}
            onY={y => (props.node.scale.y = y)}
            onZ={z => (props.node.scale.z = z)}
          />
        </Labelled>
      </List>
    </Widget>
  )
}
