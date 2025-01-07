import { FaceLandmarkerResult } from '@mediapipe/tasks-vision'
import { JSXElement } from 'solid-js'
import { Object3D, Scene } from 'three'
import { GLTF } from 'three-stdlib'

export interface Extension {
  name: string
  setup?(state: MeowState): Promise<void>
  tick?(state: MeowState): void
  /** jsx added to editor pane */
  widget?(state: MeowState): JSXElement
  /** jsx overlaid over canvas, visible in editor mode */
  overlay?(state: MeowState): JSXElement
}

export interface MeowState {
  prediction: FaceLandmarkerResult | undefined
  gltf: GLTF | undefined
  scene: Scene
  stream: MediaStream | undefined
  selectedNode: Object3D
}
