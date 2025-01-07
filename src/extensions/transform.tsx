import { Labelled, List, Vector3Input } from 'src/components'
import { Extension } from 'src/types'

export default (): Extension => {
  return {
    name: 'Transform',
    widget(object) {
      return (
        <List>
          <Labelled label="position">
            <Vector3Input
              value={object.position}
              onX={x => (object.position.x = x)}
              onY={y => (object.position.y = y)}
              onZ={z => (object.position.z = z)}
            />
          </Labelled>
          <Labelled label="rotation">
            <Vector3Input
              value={object.rotation}
              onX={x => (object.rotation.x = x)}
              onY={y => (object.rotation.y = y)}
              onZ={z => (object.rotation.z = z)}
            />
          </Labelled>
          <Labelled label="scale">
            <Vector3Input
              value={object.scale}
              onX={x => (object.scale.x = x)}
              onY={y => (object.scale.y = y)}
              onZ={z => (object.scale.z = z)}
            />
          </Labelled>
        </List>
      )
    },
  }
}
