import { Labelled, List, Vector3Input } from '../components'
import { Extension } from '../types'

export default (): Extension => {
  return {
    name: 'Transform',
    widget(state) {
      return (
        <List>
          <Labelled label="position">
            <Vector3Input
              value={state.scene.position}
              onX={x => (state.scene.position.x = x)}
              onY={y => (state.scene.position.y = y)}
              onZ={z => (state.scene.position.z = z)}
            />
          </Labelled>
          <Labelled label="rotation">
            <Vector3Input
              value={state.scene.rotation}
              onX={x => (state.scene.rotation.x = x)}
              onY={y => (state.scene.rotation.y = y)}
              onZ={z => (state.scene.rotation.z = z)}
            />
          </Labelled>
          <Labelled label="scale">
            <Vector3Input
              value={state.scene.scale}
              onX={x => (state.scene.scale.x = x)}
              onY={y => (state.scene.scale.y = y)}
              onZ={z => (state.scene.scale.z = z)}
            />
          </Labelled>
        </List>
      )
    },
  }
}
