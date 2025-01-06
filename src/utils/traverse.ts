import { Object3D } from 'three'

export function traverse(root: Object3D, callback: (object: Object3D) => void) {
  function walk(root: Object3D) {
    callback(root)
    root.children.forEach(walk)
  }
  walk(root)
}

traverse.map = <T>(root: Object3D, callback: (object: Object3D) => T): Array<T> => {
  const array = new Array<T>()
  traverse(root, node => array.push(callback(node)))
  return array
}

traverse.filter = (root: Object3D, callback: (object: Object3D) => boolean): Array<Object3D> => {
  const array = new Array<Object3D>()
  traverse(root, node => {
    if (callback(node)) array.push(node)
  })
  return array
}
