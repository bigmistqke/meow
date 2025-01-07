import { Labelled, List, Vector3Input } from 'src/components'
import { Extension } from 'src/types'

export default (): Extension => {
  return {
    name: 'Transform',
    widget(state) {
      return (
        <List>
          <Labelled label="position">
            <Vector3Input
              value={state.selectedNode.position}
              onX={x => (state.selectedNode.position.x = x)}
              onY={y => (state.selectedNode.position.y = y)}
              onZ={z => (state.selectedNode.position.z = z)}
            />
          </Labelled>
          <Labelled label="rotation">
            <Vector3Input
              value={state.selectedNode.rotation}
              onX={x => (state.selectedNode.rotation.x = x)}
              onY={y => (state.selectedNode.rotation.y = y)}
              onZ={z => (state.selectedNode.rotation.z = z)}
            />
          </Labelled>
          <Labelled label="scale">
            <Vector3Input
              value={state.selectedNode.scale}
              onX={x => (state.selectedNode.scale.x = x)}
              onY={y => (state.selectedNode.scale.y = y)}
              onZ={z => (state.selectedNode.scale.z = z)}
            />
          </Labelled>
        </List>
      )
    },
  }
}
