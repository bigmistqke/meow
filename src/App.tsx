import { Split } from '@bigmistqke/solid-grid-split'
import { FaceLandmarker, FaceLandmarkerResult, FilesetResolver } from '@mediapipe/tasks-vision'
import clsx from 'clsx'
import {
  createEffect,
  createResource,
  createSelector,
  createSignal,
  For,
  mapArray,
  on,
  onMount,
  Setter,
  Show,
  type Component,
} from 'solid-js'
import { createStore, produce, SetStoreFunction } from 'solid-js/store'
import Stats from 'stats.js'
import * as THREE from 'three'
import { GLTF, GLTFLoader, OrbitControls } from 'three-stdlib'
import avatar from './assets/avatar.glb?url'
import { Button, HoverButton } from './components'
import material from './extensions/material'
import transform from './extensions/transform'
import webcam from './extensions/webcam'
import styles from './meow.module.css'
import type { Extension, MeowState } from './types'
import { bypass, interceptProperty } from './utils/intercept-property'
import { traverse } from './utils/traverse'

const BUILTINS = { webcam, material }

interceptProperty(THREE.Object3D, 'children', true)
// Material needs to be a proxy because material can be `Material | Material[]`
interceptProperty(THREE.Object3D, 'material' /* , true */)
interceptProperty(THREE.Object3D, 'geometry')
interceptProperty(THREE.Color, 'r')
interceptProperty(THREE.Color, 'g')
interceptProperty(THREE.Color, 'b')
interceptProperty(THREE.Material, 'color')
interceptProperty(THREE.Material, 'map')
interceptProperty(THREE.Vector3, 'x')
interceptProperty(THREE.Vector3, 'y')
interceptProperty(THREE.Vector3, 'z')

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
  const stats = new Stats()

  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.position.z = -1
  camera.lookAt(new THREE.Vector3())

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

  createEffect(
    on(gltf, gltf => {
      if (!gltf) return
      gltf.scene.name = 'Avatar'
      scene.add(gltf.scene)
      traverse(gltf.scene, object => {
        if (object instanceof THREE.Mesh) {
          object.material.depthWrite = true
        }
      })
    }),
  )

  return {
    gltf,
    canvas,
    scene,
    stats: stats.dom,
    loadFromUrl(url: string) {
      loader.load(url, setGltf)
    },
    loadFromBinary(arrayBuffer: ArrayBuffer) {
      loader.parse(arrayBuffer, '', setGltf)
    },
    render: () => {
      bypass(() => {
        stats.begin()
        renderer.render(scene, camera)
        controls.update()
        stats.end()
      })
    },
    renderer,
    resize(domRect: DOMRect) {
      camera.aspect = domRect.width / domRect.height
      camera.updateProjectionMatrix()
      renderer.setSize(domRect.width, domRect.height)
      renderer.render(scene, camera)
    },
    updatePrediction({ facialTransformationMatrixes, faceBlendshapes }: FaceLandmarkerResult) {
      bypass(() => {
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
      })
    },
  }
}

function ExtensionComponent(props: { extension: Extension; delete: () => void; state: MeowState }) {
  const [visible, setVisible] = createSignal(true)
  return (
    <>
      <section class={styles.section}>
        <header class={styles.sectionHeader}>
          <h2>{props.extension.name}</h2>
          <Button onClick={() => setVisible(visible => !visible)}>
            {visible() ? 'min' : 'max'}
          </Button>
          <Button
            style={{
              'aspect-ratio': 1,
            }}
            onClick={props.delete}
          >
            x
          </Button>
        </header>
        <Show when={visible()}>
          <div>{props.extension.widget?.(props.state)}</div>
        </Show>
      </section>
    </>
  )
}

function SceneGraph(props: {
  state: MeowState
  onSelect(node: THREE.Object3D): void
  isNodeSelected: (node: THREE.Object3D) => boolean
}) {
  function Node(nodeProps: { node: THREE.Object3D; layer: number }) {
    const [visible, setVisible] = createSignal(true)
    const button = (
      <button
        class={clsx(styles.node, props.isNodeSelected(nodeProps.node) && styles.selected)}
        style={{ 'padding-left': `${nodeProps.layer * 10}px` }}
        onClick={() => props.onSelect(nodeProps.node)}
      >
        {nodeProps.node.name || nodeProps.node.type}
      </button>
    )
    return (
      <>
        <Show when={nodeProps.node.children.length > 0} fallback={button}>
          <div class={clsx(styles.row, props.isNodeSelected(nodeProps.node) && styles.selected)}>
            {button}
            <HoverButton
              hoverElement={visible() ? '+' : '-'}
              class={styles.collapse}
              onClick={() => setVisible(visible => !visible)}
            >
              {visible() ? '-' : '+'}
            </HoverButton>
          </div>
        </Show>
        <Show when={visible()}>
          <For each={'children' in nodeProps.node && nodeProps.node.children}>
            {node => <Node node={node} layer={nodeProps.layer + 1} />}
          </For>
        </Show>
      </>
    )
  }
  return (
    <Split.Pane size="250px" min="450px" max="50px" class={styles.sceneGraph}>
      <Node node={props.state.scene} layer={1} />
    </Split.Pane>
  )
}

function EditorPane(props: {
  enabled: boolean
  setEnabled: Setter<boolean>
  extensions: Array<Extension>
  setExtensions: SetStoreFunction<Array<Extension>>
  state: MeowState
  threeManager: ReturnType<typeof createThreeManager>
  onCloseMenu: () => void
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
    <Split.Pane size="350px" min="750px" class={styles.editorPane}>
      <div
        style={{
          display: 'grid',
          'grid-template-columns': 'repeat(2, 1fr) auto',
          gap: 'var(--gap)',
          padding: 'var(--gap)',
        }}
      >
        <Button onClick={() => props.setEnabled(enabled => !enabled)}>
          {props.enabled ? 'disable' : 'enable'} cam
        </Button>
        <Button
          onClick={() => {
            fileInput!.click()
          }}
        >
          upload model
        </Button>
        <input hidden type="file" ref={fileInput!} onInput={handleLoadLocalModel} />
        <Button onClick={props.onCloseMenu}>cinema</Button>
      </div>
      <div class={styles.extensions}>
        <For each={props.extensions}>
          {(extension, index) => (
            <ExtensionComponent
              extension={extension}
              state={props.state}
              delete={() =>
                props.setExtensions(produce(extensions => extensions.splice(index(), 1)))
              }
            />
          )}
        </For>
        <Button onClick={() => setAddOpened(bool => !bool)}>
          {!addOpened() ? 'add' : 'close'}
        </Button>
        <div style={{ padding: 'var(--gap)', display: 'grid', gap: 'var(--gap)' }}>
          <Show when={addOpened()}>
            <For each={Object.entries(BUILTINS)}>
              {([name, extension]) => (
                <Button
                  onClick={() => {
                    props.setExtensions(
                      produce(extensions =>
                        extensions.push(typeof extension === 'function' ? extension() : extension),
                      ),
                    )
                    setAddOpened(false)
                  }}
                >
                  {name}
                </Button>
              )}
            </For>
          </Show>
        </div>
      </div>
    </Split.Pane>
  )
}

const App: Component = () => {
  const threeManager = createThreeManager()
  const video = (<video hidden />) as HTMLVideoElement

  const [selectedNode, setSelectedNode] = createSignal(threeManager.scene)
  const [visible, setVisible] = createSignal(true)
  const [prediction, setPrediction] = createSignal<FaceLandmarkerResult | undefined>()
  const [stream, setStream] = createSignal<MediaStream | undefined>()
  const [camEnabled, setCamEnabled] = createSignal(true)
  const [videoLoaded, setVideoLoaded] = createSignal(false)
  const [extensions, setExtensions] = createStore<Array<Extension>>([
    transform(),
    material(),
    webcam(),
  ])
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

  const state: MeowState = {
    get gltf() {
      return threeManager.gltf()
    },
    get prediction() {
      return prediction()
    },
    scene: threeManager.scene,
    get stream() {
      return stream()
    },
  }

  const isNodeSelected = createSelector(
    selectedNode,
    (node: THREE.Object3D, selectedNode) => node === selectedNode,
  )

  /* Predict */
  let _lastVideoTime = -1
  let _prediction: undefined | FaceLandmarkerResult = undefined
  function predict(timestamp: number) {
    const landmarker = faceLandmarker()
    if (!landmarker || !camEnabled()) return
    if (_lastVideoTime !== video.currentTime || !_prediction) {
      _prediction = landmarker.detectForVideo(video, timestamp)
      _lastVideoTime = video.currentTime
      setPrediction(_prediction)
      threeManager.updatePrediction(_prediction)
    }
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
  async function enableCam() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    })
    video.srcObject = stream
    setStream(stream)
    video.addEventListener('loadeddata', () => {
      video.play()
      setVideoLoaded(true)
    })
  }

  createEffect(() => {
    if (!faceLandmarker()) return
    createEffect(() => {
      if (camEnabled()) {
        enableCam()
      } else {
        video.pause()
        setStream()
      }
    })
  })

  /* Setup all the extensions */
  createEffect(
    mapArray(
      () => extensions,
      extension => extension.setup?.(state),
    ),
  )

  /* Load default model */
  onMount(() => threeManager.loadFromUrl(avatar))

  return (
    <>
      <Show when={!visible()}>
        <Button
          style={{
            position: 'absolute',
            'z-index': 1,
            top: '0px',
            right: '0px',
            margin: 'var(--gap)',
          }}
          onClick={() => setVisible(true)}
        >
          editor
        </Button>
      </Show>
      <Split
        style={{
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Show when={visible()}>
          <SceneGraph state={state} onSelect={setSelectedNode} isNodeSelected={isNodeSelected} />
          <Split.Handle size="5px" class={styles.handle} />
        </Show>
        <Split.Pane
          size="1fr"
          style={{ position: 'relative', overflow: 'hidden', translate: '0px 0px 0px' }}
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
          <Show when={visible()}>{threeManager.stats}</Show>
          {video}
          {threeManager.canvas}
        </Split.Pane>
        <Show when={visible()}>
          <Split.Handle size="5px" class={styles.handle} />
          <EditorPane
            enabled={camEnabled()}
            extensions={extensions}
            setEnabled={setCamEnabled}
            setExtensions={setExtensions}
            state={state}
            threeManager={threeManager}
            onCloseMenu={() => setVisible(false)}
          />
        </Show>
      </Split>
    </>
  )
}

export default App
