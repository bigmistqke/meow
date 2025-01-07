import { Split } from '@bigmistqke/solid-grid-split'
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
  onCleanup,
  onMount,
  runWithOwner,
  Show,
  type Component,
} from 'solid-js'
import Stats from 'stats.js'
import * as THREE from 'three'
import { GLTF, GLTFLoader, OrbitControls, TransformControls } from 'three-stdlib'
import avatar from './assets/avatar.glb?url'
import { Button, HoverButton, Widget } from './components'
import material from './extensions/material'
import meowtube from './extensions/meowtube'
import styles from './meow.module.css'
import type { Extension, MeowState } from './types'
import { MeowProvider, useMeow } from './use-meow'
import { evaluateTrackNodes, track } from './utils/track'
import { MaterialWidget, TransformWidget } from './widgets'

const BUILTINS = { meowtube, material }

/**********************************************************************************/
/*                                                                                */
/*                                Create Three Manager                            */
/*                                                                                */
/**********************************************************************************/

type ThreeManager = ReturnType<typeof createThreeManager>

function createThreeManager() {
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

  return {
    camera,
    canvas,
    renderer,
    scene,
    stats: stats.dom,
    orbitControls,
    loadGLTFFromUrl(url: string) {
      return new Promise<GLTF>((resolve, reject) => loader.load(url, resolve, undefined, reject))
    },
    loadGLTFFromBinary(arrayBuffer: ArrayBuffer) {
      return new Promise<GLTF>((resolve, reject) => loader.parse(arrayBuffer, '', resolve, reject))
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
/*                                 Transform Pane                                 */
/*                                                                                */
/**********************************************************************************/

function TransformPane(props: { displayMode: 'cinema' | 'editor'; threeManager: ThreeManager }) {
  const [mode, setMode] = createSignal<'translate' | 'rotate' | 'scale'>('translate')
  const [space, setSpace] = createSignal<'global' | 'local'>('global')
  const meow = useMeow()

  createEffect(() => {
    if (props.displayMode === 'cinema') return
    if (meow.selectedNode === meow.scene) return

    const transformControls = new TransformControls(
      props.threeManager.camera,
      props.threeManager.renderer.domElement,
    ) as TransformControls

    hideFromSceneGraph(transformControls)
    transformControls.attach(meow.selectedNode)
    props.threeManager.scene.add(transformControls)

    transformControls.addEventListener('dragging-changed', ({ value }) => {
      console.log('dragging', value)
      props.threeManager.orbitControls.enabled = !value
    })

    createEffect(() => transformControls.setMode(mode()))
    createEffect(() => transformControls.setSpace(space()))

    onCleanup(() => {
      transformControls.detach()
      props.threeManager.scene.remove(transformControls)
    })
  })

  return (
    <div class={styles.transformPane}>
      <div>
        <Button selected={mode() === 'translate'} onClick={() => setMode('translate')}>
          translate
        </Button>
        <Button selected={mode() === 'rotate'} onClick={() => setMode('rotate')}>
          rotate
        </Button>
        <Button selected={mode() === 'scale'} onClick={() => setMode('scale')}>
          scale
        </Button>
      </div>
      <div>
        <Button selected={space() === 'global'} onClick={() => setSpace('global')}>
          global
        </Button>
        <Button selected={space() === 'local'} onClick={() => setSpace('local')}>
          local
        </Button>
      </div>
    </div>
  )
}

/**********************************************************************************/
/*                                                                                */
/*                                  Editor Pane                                   */
/*                                                                                */
/**********************************************************************************/

function EditorPane(props: {
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
        props.threeManager.loadGLTFFromBinary(arrayBuffer)
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
                  {widget()(state.selectedNode)}
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
                    props.addExtension(extension(state.selectedNode))
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
  const [displayMode, setDisplayMode] = createSignal<'editor' | 'cinema'>('editor')
  const [defaultGLTF] = createResource(() => threeManager.loadGLTFFromUrl(avatar))
  const extensions = new ReactiveMap<THREE.Object3D, Array<Extension>>()

  const isNodeSelected = createSelector(
    selectedNode,
    (node: THREE.Object3D, selectedNode) => node === selectedNode,
  )

  const state: MeowState = {
    scene: threeManager.scene,
    get selectedNode() {
      return selectedNode()
    },
  }

  return (
    <MeowProvider value={state}>
      {(() => {
        /* Animation loop */
        function animate(timestamp: number) {
          threeManager.render()
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

        /* Load default model */
        createEffect(() => {
          try {
            const gltf = defaultGLTF()
            console.log('gltf')
            if (!gltf) return
            threeManager.scene.add(gltf.scene)
            extensions.set(gltf.scene, [meowtube(gltf.scene)])
          } catch (error) {
            console.error(error)
          }
        })

        return (
          <>
            <Show when={displayMode() === 'cinema'}>
              <Button
                style={{
                  position: 'absolute',
                  'z-index': 1,
                  top: '0px',
                  right: '0px',
                  margin: 'var(--gap)',
                }}
                onClick={() => setDisplayMode('editor')}
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
              <Show when={displayMode() === 'editor'}>
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
                <Show when={displayMode() === 'editor'}>{threeManager.stats}</Show>
                {video}
                {threeManager.canvas}
                <Show when={displayMode() === 'editor'}>
                  <TransformPane threeManager={threeManager} displayMode={displayMode()} />
                </Show>
              </Split.Pane>
              <Show when={displayMode() === 'editor'}>
                <Split.Handle size="5px" class={styles.handle} />
                <EditorPane
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
                  threeManager={threeManager}
                  onCloseMenu={() => setDisplayMode('cinema')}
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
