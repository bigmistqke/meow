import { FaceLandmarker, FaceLandmarkerResult, FilesetResolver } from '@mediapipe/tasks-vision'
import {
  createEffect,
  createResource,
  createSignal,
  For,
  mapArray,
  onMount,
  Setter,
  Show,
  type Component,
} from 'solid-js'
import { createStore, produce, SetStoreFunction } from 'solid-js/store'
import * as THREE from 'three'
import { GLTF, GLTFLoader, OrbitControls } from 'three-stdlib'
import avatar from './assets/avatar.glb?url'
import material from './extensions/material'
import webcam from './extensions/webcam'
import styles from './meow.module.css'
import type { Extension, MeowState } from './types'
import { traverse } from './utils/traverse'

const BUILTINS = { webcam, material }

function createThreeManager() {
  const [gltf, setGltf] = createSignal<GLTF>()
  const canvas = (
    <canvas
      style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
    />
  ) as HTMLCanvasElement

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const scene = new THREE.Scene()
  const loader = new GLTFLoader()
  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.position.z = 1

  const ambient = new THREE.AmbientLight()
  ambient.color = new THREE.Color('white')
  ambient.intensity = 1
  scene.add(ambient)

  const spot = new THREE.SpotLight()
  spot.color = new THREE.Color('white')
  spot.position.set(3, 3, 3)
  spot.decay = 0.5
  spot.intensity = 1
  spot.lookAt(new THREE.Vector3())
  scene.add(spot)

  createEffect(() => {
    const _gltf = gltf()

    // NOTE: this hardcoded stuff should be removed and replaced by an extension
    if (_gltf) {
      scene.add(_gltf.scene)
      scene.rotateY(Math.PI)
      scene.scale.x = 3
      scene.scale.y = 3
      scene.scale.z = 3
      const hair = _gltf.scene.children[0] as THREE.Mesh

      hair.material = new THREE.MeshPhongMaterial()
      const faceParts = _gltf.scene.children[1]?.children as Array<THREE.Mesh>

      faceParts.forEach(face => {
        if (face.name !== 'Facebaked_custom003_5') {
          face.material.depthWrite = true
          face.material.transparent = false
        }
        face.material.side = THREE.FrontSide
      })
    }
  })

  return {
    gltf,
    canvas,
    scene,
    loadFromUrl(url: string) {
      loader.load(url, setGltf)
    },
    loadFromBinary(arrayBuffer: ArrayBuffer) {
      loader.parse(arrayBuffer, '', setGltf)
    },
    render: () => {
      renderer.render(scene, camera)
      controls.update()
    },
    renderer,
    resize(domRect: DOMRect) {
      camera.aspect = domRect.width / domRect.height
      camera.updateProjectionMatrix()
      renderer.setSize(domRect.width, domRect.height)
      renderer.render(scene, camera)
    },
    updatePrediction({ facialTransformationMatrixes, faceBlendshapes }: FaceLandmarkerResult) {
      const _gltf = gltf()
      if (!_gltf) return

      const matrix = facialTransformationMatrixes[0]?.data as THREE.Matrix4Tuple
      if (matrix) {
        _gltf.scene.setRotationFromMatrix(new THREE.Matrix4(...matrix))
      }
      faceBlendshapes[0]?.categories.forEach(category => {
        const name = category.displayName || category.categoryName
        traverse(_gltf.scene, face => {
          if (
            face instanceof THREE.Mesh &&
            face.morphTargetDictionary &&
            face.morphTargetInfluences
          ) {
            const index = face.morphTargetDictionary[name] as number
            face.morphTargetInfluences[index] = category.score
          }
        })
      })
    },
  }
}

function EditorPane(props: {
  enabled: boolean
  setEnabled: Setter<boolean>
  extensions: Array<Extension>
  setExtensions: SetStoreFunction<Array<Extension>>
  state: MeowState
  threeManager: ReturnType<typeof createThreeManager>
}) {
  const [addOpened, setAddOpened] = createSignal()
  let fileInput: HTMLInputElement

  function handleLoadLocalModel(event: InputEvent & { currentTarget: HTMLInputElement }) {
    const file = event.currentTarget.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function (event) {
        const arrayBuffer = event.target!.result as ArrayBuffer
        props.threeManager.loadFromBinary(arrayBuffer)
      }
      reader.readAsArrayBuffer(file)
    }
  }

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          'border-left': '1px solid black',
          display: 'grid',
          'grid-template-rows': 'auto 1fr',
          'align-items': 'start',
        }}
      >
        <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr' }}>
          <button onClick={() => props.setEnabled(enabled => !enabled)}>
            {props.enabled ? 'disable' : 'enable'} cam
          </button>
          <button
            onClick={() => {
              fileInput!.click()
            }}
          >
            upload model
          </button>
          <input hidden type="file" ref={fileInput!} onInput={handleLoadLocalModel} />
        </div>
        <div style={{ display: 'grid', height: '100%', overflow: 'auto', 'align-items': 'start' }}>
          <For each={props.extensions}>
            {(extension, index) => (
              <section class={styles.section}>
                <header class={styles.sectionHeader}>
                  <h2>{extension.name}</h2>
                  <button
                    onClick={() =>
                      props.setExtensions(produce(extensions => extensions.splice(index(), 1)))
                    }
                  >
                    x
                  </button>
                </header>
                <div>{extension.widget?.(props.state)}</div>
              </section>
            )}
          </For>
          <button onClick={() => setAddOpened(bool => !bool)}>
            {!addOpened() ? 'add' : 'close'}
          </button>
          <div style={{ padding: '5px', display: 'grid', gap: '5px' }}>
            <Show when={addOpened()}>
              <For each={Object.entries(BUILTINS)}>
                {([name, extension]) => (
                  <button
                    onClick={() => {
                      props.setExtensions(
                        produce(extensions =>
                          extensions.push(
                            typeof extension === 'function' ? extension() : extension,
                          ),
                        ),
                      )
                      setAddOpened(false)
                    }}
                  >
                    {name}
                  </button>
                )}
              </For>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}

const App: Component = () => {
  const threeManager = createThreeManager()
  const video = (<video hidden />) as HTMLVideoElement

  const [state, setState] = createStore<MeowState>({
    get gltf() {
      return threeManager.gltf()
    },
    prediction: undefined,
    scene: threeManager.scene,
    stream: undefined,
  })

  const [enabled, setEnabled] = createSignal(true)
  const [videoLoaded, setVideoLoaded] = createSignal(false)
  const [extensions, setExtensions] = createStore<Array<Extension>>([material(), webcam()])

  const [faceLandmarker] = createResource(async function createFaceLandmarker() {
    const filesetResolver = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm',
    )
    return FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
        delegate: 'GPU',
      },
      outputFaceBlendshapes: true,
      outputFacialTransformationMatrixes: true,
      runningMode: 'VIDEO',
      numFaces: 1,
    })
  })

  /* Predict */
  let lastVideoTime = -1
  let prediction: undefined | FaceLandmarkerResult = undefined
  function predict(timestamp: number) {
    const landmarker = faceLandmarker()
    if (!landmarker || !enabled()) return
    if (lastVideoTime !== video.currentTime || !prediction) {
      prediction = landmarker.detectForVideo(video, timestamp)
      lastVideoTime = video.currentTime
    }
    setState({ prediction })
    threeManager.updatePrediction(prediction)
  }

  /* Animation loop */
  function animate(timestamp: number) {
    threeManager.render()
    if (videoLoaded()) {
      predict(timestamp)
    }
    // Update all extensions
    extensions.forEach(extension => extension.tick?.(state))
  }
  threeManager.renderer.setAnimationLoop(animate)

  /* Enable the live webcam view and start detection. */
  async function enableCam(faceLandmarker: FaceLandmarker) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    })
    video.srcObject = stream
    setState({ stream })
    video.addEventListener('loadeddata', () => {
      video.play()
      setVideoLoaded(true)
    })
  }

  createEffect(() => {
    const landmarker = faceLandmarker()
    if (!landmarker) return

    createEffect(() => {
      if (enabled()) {
        enableCam(landmarker)
      } else {
        video.pause()
        setState({ stream: undefined })
      }
    })
  })

  createEffect(
    mapArray(
      () => extensions,
      extension => extension.setup?.(state),
    ),
  )

  onMount(() => threeManager.loadFromUrl(avatar))

  return (
    <div
      style={{
        display: 'grid',
        'grid-template-columns': '1fr 300px',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{ position: 'relative', overflow: 'hidden' }}
        ref={element => {
          onMount(() => {
            const observer = new ResizeObserver(() => {
              threeManager.resize(element.getBoundingClientRect())
            })
            observer.observe(element)
          })
        }}
      >
        <div style={{ position: 'absolute', 'pointer-events': 'none' }}>
          <For each={extensions}>{extension => extension.overlay?.(state)}</For>
        </div>
        {video}
        {threeManager.canvas}
      </div>
      <EditorPane
        enabled={enabled()}
        extensions={extensions}
        setEnabled={setEnabled}
        setExtensions={setExtensions}
        state={state}
        threeManager={threeManager}
      />
    </div>
  )
}

export default App
