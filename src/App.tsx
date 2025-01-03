import {
  Classifications,
  DrawingUtils,
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from '@mediapipe/tasks-vision'
import { createEffect, createResource, createSignal, For, type Component } from 'solid-js'

const App: Component = () => {
  const [enabled, setEnabled] = createSignal(false)
  const [blendShapes, setBlendShapes] = createSignal<Array<Classifications>>()

  const videoWidth = 480
  const video = (<video />) as HTMLVideoElement
  const canvasElement = (
    <canvas
      style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
    />
  ) as HTMLCanvasElement
  const ctx = canvasElement.getContext('2d')!

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
      canvasElement.style.width = videoWidth + 'px'
      canvasElement.style.height = videoWidth * radio + 'px'
      canvasElement.width = video.videoWidth
      canvasElement.height = video.videoHeight
    })
  }

  let lastVideoTime = -1
  let results: undefined | FaceLandmarkerResult = undefined
  const drawingUtils = new DrawingUtils(ctx)
  async function predictWebcam(faceLandmarker: FaceLandmarker) {
    ctx.clearRect(0, 0, video.videoWidth, video.videoHeight)

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

    setBlendShapes(results?.faceBlendshapes)

    // Call this function again to keep predicting when the browser is ready.
    if (enabled()) {
      window.requestAnimationFrame(() => predictWebcam(faceLandmarker))
    }
  }

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
        {canvasElement}
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
          <For each={blendShapes()?.[0]?.categories}>
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
