import { FaceLandmarkerResult } from '@mediapipe/tasks-vision'
import { JSXElement } from 'solid-js'
import { Object3D, Scene } from 'three'
import { GLTF } from 'three-stdlib'

export interface Extension {
  name: string
  setup?(object: Object3D): Promise<void>
  tick?(object: Object3D): void
  /** jsx added to editor pane */
  widget?(object: Object3D): JSXElement
  /** jsx overlaid over canvas, visible in editor mode */
  overlay?(object: Object3D): JSXElement
}

export interface MeowState {
  prediction: FaceLandmarkerResult | undefined
  gltf: GLTF | undefined
  scene: Scene
  stream: MediaStream | undefined
  selectedNode: Object3D
}
