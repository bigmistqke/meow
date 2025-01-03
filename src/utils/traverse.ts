import { Object3D } from 'three'

export function traverse(root: Object3D, callback: (object: Object3D) => void) {
  function walk(root: Object3D) {
    callback(root)
    root.children.forEach(walk)
  }
  walk(root)
}
