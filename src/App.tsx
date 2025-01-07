import { Split } from '@bigmistqke/solid-grid-split'
import { FaceLandmarker, FaceLandmarkerResult, FilesetResolver } from '@mediapipe/tasks-vision'
import { ReactiveMap } from '@solid-primitives/map'
import clsx from 'clsx'
import {
  createEffect,
  createResource,
  createSelector,
  createSignal,
  For,
  getOwner,
  Index,
  mapArray,
  on,
  onCleanup,
  onMount,
  runWithOwner,
  Setter,
  Show,
  type Component,
} from 'solid-js'
import Stats from 'stats.js'
import * as THREE from 'three'
import { GLTF, GLTFLoader, OrbitControls, TransformControls } from 'three-stdlib'
import avatar from './assets/avatar.glb?url'
import { Button, HoverButton, Widget } from './components'
import material from './extensions/material'
import webcam from './extensions/webcam'
import styles from './meow.module.css'
import type { Extension, MeowState } from './types'
import { MeowProvider, useMeow } from './use-meow'
import { evaluateTrackNodes, track } from './utils/track'
import { traverse } from './utils/traverse'
import { MaterialWidget, TransformWidget } from './widgets'

const BUILTINS = { webcam, material }

/**********************************************************************************/
/*                                                                                */
/*                                Create Three Manager                            */
/*                                                                                */
/**********************************************************************************/

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
  const orbitControls = new OrbitControls(camera, renderer.domElement)
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
    camera,
    canvas,
    gltf,
    renderer,
    scene,
    stats: stats.dom,
    orbitControls,
    loadFromUrl(url: string) {
      loader.load(url, setGltf)
    },
    loadFromBinary(arrayBuffer: ArrayBuffer) {
      loader.parse(arrayBuffer, '', setGltf)
    },
    render: () => {
      stats.begin()
      evaluateTrackNodes()
      renderer.render(scene, camera)
      orbitControls.update()
      stats.end()
    },
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

/**********************************************************************************/
/*                                                                                */
/*                                   Scene Graph                                  */
/*                                                                                */
/**********************************************************************************/

const $HIDDEN_FROM_SCENEGRAPH = Symbol('meow-hidden')

function hideFromSceneGraph<T extends object>(node: T) {
  const _node = node as object & { [$HIDDEN_FROM_SCENEGRAPH]: true }
  _node[$HIDDEN_FROM_SCENEGRAPH] = true
  return _node
}

function isHiddenFromSceneGraph<T extends object>(node: T) {
  return $HIDDEN_FROM_SCENEGRAPH in node
}

function SceneGraph(props: {
  onSelect(node: THREE.Object3D): void
  isNodeSelected: (node: THREE.Object3D) => boolean
}) {
  const state = useMeow()

  function Node(nodeProps: { node: THREE.Object3D; layer: number }) {
    const [visible, setVisible] = createSignal(true)
    const childrenLength = track(nodeProps.node.children, 'length')

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
      <Show when={!isHiddenFromSceneGraph(nodeProps.node)}>
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
          <Index each={new Array(childrenLength())}>
            {(_, index) => {
              const node = track(nodeProps.node.children, index)
              return <Node node={node()} layer={nodeProps.layer + 1} />
            }}
          </Index>
        </Show>
      </Show>
    )
  }
  return (
    <Split.Pane size="250px" min="450px" max="50px" class={styles.sceneGraph}>
      <Node node={state.scene} layer={1} />
    </Split.Pane>
  )
}

/**********************************************************************************/
/*                                                                                */
/*                                  Editor Pane                                   */
/*                                                                                */
/**********************************************************************************/

function EditorPane(props: {
  enabled: boolean
  setEnabled: Setter<boolean>
  extensions: Array<Extension>
  addExtension: (value: Extension) => void
  deleteExtension: (value: Extension) => void
  threeManager: ReturnType<typeof createThreeManager>
  onCloseMenu: () => void
}) {
  const state = useMeow()

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
        <TransformWidget node={state.selectedNode} />
        <Show when={state.selectedNode instanceof THREE.Mesh && state.selectedNode}>
          {node => <MaterialWidget node={node()} />}
        </Show>
        <For each={props.extensions}>
          {extension => (
            <Show when={extension.widget}>
              {widget => (
                <Widget name={extension.name} onDelete={() => props.deleteExtension(extension)}>
                  {widget()(state, state.selectedNode)}
                </Widget>
              )}
            </Show>
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
                    props.addExtension(typeof extension === 'function' ? extension() : extension)
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

/**********************************************************************************/
/*                                                                                */
/*                                       App                                      */
/*                                                                                */
/**********************************************************************************/

const App: Component = () => {
  const threeManager = createThreeManager()
  const video = (<video hidden />) as HTMLVideoElement

  const [selectedNode, setSelectedNode] = createSignal(threeManager.scene)
  const [mode, setMode] = createSignal<'editor' | 'cinema'>('editor')
  const [prediction, setPrediction] = createSignal<FaceLandmarkerResult | undefined>()
  const [stream, setStream] = createSignal<MediaStream | undefined>()
  const [camEnabled, setCamEnabled] = createSignal(true)
  const [videoLoaded, setVideoLoaded] = createSignal(false)
  const extensions = new ReactiveMap<THREE.Object3D, Array<Extension>>()
  extensions.set(threeManager.scene, [webcam()])

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

  const isNodeSelected = createSelector(
    selectedNode,
    (node: THREE.Object3D, selectedNode) => node === selectedNode,
  )

  const state: MeowState = {
    get gltf() {
      return threeManager.gltf()
    },
    get prediction() {
      return prediction()
    },
    scene: threeManager.scene,
    get selectedNode() {
      return selectedNode()
    },
    get stream() {
      return stream()
    },
  }

  return (
    <MeowProvider value={state}>
      {(() => {
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
          extensions
            .entries()
            .forEach(([object, extensions]) =>
              extensions.forEach(extension => extension.tick?.(object)),
            )
        }
        const owner = getOwner()
        threeManager.renderer.setAnimationLoop(timestamp =>
          runWithOwner(owner, () => animate(timestamp)),
        )

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
            () => [...extensions.keys()],
            object => {
              createEffect(
                mapArray(
                  () => extensions.get(object),
                  extension => {
                    extension.setup?.(object)
                  },
                ),
              )
            },
          ),
        )

        createEffect(() => {
          if (mode() === 'cinema') return
          if (selectedNode() === threeManager.scene) return

          const transformControls = new TransformControls(
            threeManager.camera,
            threeManager.renderer.domElement,
          ) as TransformControls
          hideFromSceneGraph(transformControls)
          transformControls.attach(selectedNode())
          threeManager.scene.add(transformControls)

          transformControls.addEventListener('dragging-changed', ({ value }) => {
            console.log('dragging', value)
            threeManager.orbitControls.enabled = !value
          })

          onCleanup(() => {
            transformControls.detach()
            threeManager.scene.remove(transformControls)
          })
        })

        /* Load default model */
        onMount(() => threeManager.loadFromUrl(avatar))

        return (
          <>
            <Show when={mode() === 'cinema'}>
              <Button
                style={{
                  position: 'absolute',
                  'z-index': 1,
                  top: '0px',
                  right: '0px',
                  margin: 'var(--gap)',
                }}
                onClick={() => setMode('editor')}
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
              <Show when={mode() === 'editor'}>
                <SceneGraph onSelect={setSelectedNode} isNodeSelected={isNodeSelected} />
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
                  <For each={extensions.get(selectedNode())}>
                    {extension => extension.overlay?.(selectedNode())}
                  </For>
                </div>
                <Show when={mode() === 'editor'}>{threeManager.stats}</Show>
                {video}
                {threeManager.canvas}
              </Split.Pane>
              <Show when={mode() === 'editor'}>
                <Split.Handle size="5px" class={styles.handle} />
                <EditorPane
                  enabled={camEnabled()}
                  extensions={extensions.get(selectedNode()) || []}
                  addExtension={extension => {
                    if (!extensions.has(selectedNode())) {
                      extensions.set(selectedNode(), [extension])
                    } else {
                      extensions.set(selectedNode(), [
                        ...extensions.get(selectedNode())!,
                        extension,
                      ])
                    }
                  }}
                  deleteExtension={extension => {
                    if (extensions.has(selectedNode())) {
                      extensions.set(
                        selectedNode(),
                        extensions
                          .get(selectedNode())!
                          .filter(_extension => _extension !== extension),
                      )
                    }
                  }}
                  setEnabled={setCamEnabled}
                  threeManager={threeManager}
                  onCloseMenu={() => setMode('cinema')}
                />
              </Show>
            </Split>
          </>
        )
      })()}
    </MeowProvider>
  )
}

export default App
