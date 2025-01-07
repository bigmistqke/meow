import { JSXElement } from 'solid-js'
import { Object3D, Scene } from 'three'

export interface Extension {
  name: string
  // setup?(object: Object3D): Promise<void>
  tick?(object: Object3D): void
  /** jsx added to editor pane */
  widget?(object: Object3D): JSXElement
  /** jsx overlaid over canvas, visible in editor mode */
  overlay?(object: Object3D): JSXElement
}

export interface MeowState {
  scene: Scene
  selectedNode: Object3D
}
