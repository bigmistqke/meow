import {
  DrawingUtils,
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from '@mediapipe/tasks-vision'
import { createEffect, createResource, createSignal, For, type Component } from 'solid-js'
import * as THREE from 'three'
import { GLTFLoader, MeshoptDecoder, OrbitControls } from 'three-stdlib'
import avatar from './assets/avatar.glb?url'

// Utility function to calculate angles
function calculateHeadRotation(landmarks: Array<THREE.Vector3>) {
  const [leftEye, rightEye, noseTip] = [
    new THREE.Vector3(...landmarks[FaceLandmarker.FACE_LANDMARKS_LEFT_EYE_CENTER]),
    new THREE.Vector3(...landmarks[FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE_CENTER]),
    new THREE.Vector3(...landmarks[FaceLandmarker.FACE_LANDMARKS_NOSE_TIP]),
  ]

  // Compute directional vectors
  const eyeDirection = new THREE.Vector3().subVectors(rightEye, leftEye).normalize()
  const headDirection = new THREE.Vector3().subVectors(noseTip, leftEye).normalize()

  // Estimate yaw (horizontal rotation)
  const yaw = Math.atan2(eyeDirection.y, eyeDirection.x)

  // Estimate pitch (vertical rotation)
  const pitch = Math.asin(eyeDirection.z)

  // Estimate roll (tilt rotation)
  const roll = Math.atan2(headDirection.y, headDirection.z)

  return { pitch, yaw, roll }
}

const App: Component = () => {
  const [enabled, setEnabled] = createSignal(false)
  const [faceLandmarkerResults, setFaceLandmarkerResults] = createSignal<FaceLandmarkerResult>()

  const videoWidth = 480
  const video = (<video />) as HTMLVideoElement
  const mediaPipeCanvas = (
    <canvas
      style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
    />
  ) as HTMLCanvasElement
  const mediaPipeCtx = mediaPipeCanvas.getContext('2d')!

  const threeCanvas = (
    <canvas
      style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
    />
  ) as HTMLCanvasElement

  // Before we can use HandLandmarker class we must wait for it to finish
  // loading. Machine Learning models can be large and take a moment to
  // get everything needed to run.
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
      runningMode: 'VIDEO',
      numFaces: 1,
    })
  })

  // Enable the live webcam view and start detection.
  async function enableCam(faceLandmarker: FaceLandmarker) {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    })
    video.srcObject = stream
    video.addEventListener('loadeddata', () => {
      predictWebcam(faceLandmarker)
      video.play()
      const radio = video.videoHeight / video.videoWidth
      video.style.width = videoWidth + 'px'
      video.style.height = videoWidth * radio + 'px'
      mediaPipeCanvas.style.width = videoWidth + 'px'
      mediaPipeCanvas.style.height = videoWidth * radio + 'px'
      mediaPipeCanvas.width = video.videoWidth
      mediaPipeCanvas.height = video.videoHeight
    })
  }

  let lastVideoTime = -1
  let results: undefined | FaceLandmarkerResult = undefined
  const drawingUtils = new DrawingUtils(mediaPipeCtx)
  async function predictWebcam(faceLandmarker: FaceLandmarker) {
    mediaPipeCtx.clearRect(0, 0, video.videoWidth, video.videoHeight)

    let startTimeMs = performance.now()
    if (lastVideoTime !== video.currentTime) {
      lastVideoTime = video.currentTime
      results = faceLandmarker!.detectForVideo(video, startTimeMs)
    }
    if (results?.faceLandmarks) {
      for (const landmarks of results.faceLandmarks) {
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, {
          color: '#C0C0C070',
          lineWidth: 1,
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, {
          color: '#FF3030',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, {
          color: '#FF3030',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, {
          color: '#30FF30',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, {
          color: '#30FF30',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, {
          color: '#E0E0E0',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, {
          color: '#E0E0E0',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, {
          color: '#FF3030',
        })
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, {
          color: '#30FF30',
        })
      }
    }

    setFaceLandmarkerResults(results!)

    // Call this function again to keep predicting when the browser is ready.
    if (enabled()) {
      window.requestAnimationFrame(() => predictWebcam(faceLandmarker))
    }
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

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

  camera.position.z = 1

  const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const controls = new OrbitControls(camera, renderer.domElement)

  const loader = new GLTFLoader()
  loader.setMeshoptDecoder(MeshoptDecoder)
  loader.load(avatar, model => {
    model.scene.rotateY(Math.PI)
    scene.add(model.scene)
    scene.scale.x = 3
    scene.scale.y = 3
    scene.scale.z = 3
    const hair = model.scene.children[0] as THREE.Mesh

    hair.material = new THREE.MeshPhongMaterial()
    const faceParts = model.scene.children[1]?.children as Array<THREE.Mesh>

    faceParts.forEach(face => {
      if (face.name !== 'Facebaked_custom003_5') {
        face.material.depthWrite = true
        face.material.transparent = false
      }
      face.material.side = THREE.FrontSide
    })

    createEffect(() => {
      faceLandmarkerResults()?.faceBlendshapes[0]?.categories.forEach(category => {
        faceParts.forEach(face => {
          const name = category.displayName || category.categoryName
          const index = face.morphTargetDictionary![name] as number
          face.morphTargetInfluences![index] = category.score
        })
      })
    })
  })

  function animate() {
    renderer.render(scene, camera)
    controls.update()
  }
  renderer.setAnimationLoop(animate)

  createEffect(() => {
    const landmarker = faceLandmarker()
    if (!landmarker) return

    createEffect(() => {
      if (enabled()) enableCam(landmarker)
    })
  })

  return (
    <div
      style={{
        display: 'grid',
        'grid-template-columns': '1fr 300px',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {mediaPipeCanvas}
        {threeCanvas}
        {video}
      </div>
      <div
        style={{
          overflow: 'hidden',
          'border-left': '1px solid black',
          display: 'grid',
          'grid-template-rows': '30px 1fr',
        }}
      >
        <button disabled={!faceLandmarker()} onClick={() => setEnabled(enabled => !enabled)}>
          enable webcam
        </button>
        <div
          style={{
            overflow: 'auto',
            margin: '0px',
            padding: '20px',
            display: 'grid',
            'grid-template-columns': '1fr 60px',
          }}
        >
          <For each={faceLandmarkerResults()?.faceBlendshapes[0]?.categories}>
            {shape => (
              <>
                <span>{shape.displayName || shape.categoryName}</span>
                <span>{(+shape.score).toFixed(4)}</span>
              </>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default App
