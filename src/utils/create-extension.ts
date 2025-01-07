import { Extension } from 'src/types'
import { Object3D } from 'three'

export function createExtension<T extends Object3D>(
  cb: (object: T) => Extension,
): (object: T) => Extension {
  return cb
}
