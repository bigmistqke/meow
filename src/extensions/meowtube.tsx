import {
  DrawingUtils,
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from '@mediapipe/tasks-vision'
import { createEffect, createResource, createSignal, onMount, Show } from 'solid-js'
import { Button, H3, Labelled, List, NumberInput } from 'src/components'
import { useMeow } from 'src/use-meow'
import { createExtension } from 'src/utils/create-extension'
import { traverse } from 'src/utils/traverse'
import { Matrix4, Matrix4Tuple, Mesh } from 'three'

export default createExtension(object => {
  const meow = useMeow()

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

  const [camEnabled, setCamEnabled] = createSignal(true)
  const [margin, setMargin] = createSignal(25)
  const [prediction, setPrediction] = createSignal<FaceLandmarkerResult>()
  const [stream, setStream] = createSignal<MediaStream | undefined>()
  const [videoLoaded, setVideoLoaded] = createSignal(false)
  const [visible, setVisible] = createSignal(false)
  const [ratio, setRatio] = createSignal<number>()
  const [width, setWidth] = createSignal(125)

  const hidden = (<video hidden width={width()} />) as HTMLVideoElement
  document.body.appendChild(hidden)

  /* Enable the live webcam view and start detection. */
  async function enableCam() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    })
    setStream(stream)
    hidden.srcObject = stream
    hidden.addEventListener('loadeddata', () => {
      setVideoLoaded(true)
      const ratio = hidden.videoHeight / hidden.videoWidth
      setRatio(ratio)
      hidden.play()
      hidden.style.width = width() + 'px'
      hidden.style.height = width() * ratio + 'px'
    })
  }

  /* Predict */
  let _lastVideoTime = -1
  let _prediction: undefined | FaceLandmarkerResult = undefined
  function predict(timestamp: number) {
    const landmarker = faceLandmarker()
    if (!landmarker || !camEnabled()) return
    if (_lastVideoTime !== hidden.currentTime || !_prediction) {
      _prediction = landmarker.detectForVideo(hidden, timestamp)
      _lastVideoTime = hidden.currentTime
      applyPrediction(_prediction)
      setPrediction(_prediction)
    }
  }

  function applyPrediction({
    facialTransformationMatrixes,
    faceBlendshapes,
  }: FaceLandmarkerResult) {
    const matrix = facialTransformationMatrixes[0]?.data as Matrix4Tuple
    if (matrix) {
      object.setRotationFromMatrix(new Matrix4(...matrix))
    }
    faceBlendshapes[0]?.categories.forEach(category => {
      const name = category.displayName || category.categoryName
      traverse(object, face => {
        if (face instanceof Mesh && face.morphTargetDictionary && face.morphTargetInfluences) {
          const index = face.morphTargetDictionary[name] as number
          face.morphTargetInfluences[index] = category.score
        }
      })
    })
  }

  onMount(() => {
    object.name = 'Avatar'
    meow.scene.add(object)
    // Fix broken gltf materials
    traverse(object, object => {
      if (object instanceof Mesh) {
        object.material.depthWrite = true
      }
    })
    enableCam()
  })

  return {
    name: 'MeowTube',
    tick() {
      if (!videoLoaded()) return
      predict(performance.now())
    },
    overlay() {
      const webcam = (<video />) as HTMLVideoElement
      const canvas = (
        <canvas
          width={width()}
          style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
        />
      ) as HTMLCanvasElement

      const ctx = canvas.getContext('2d')!
      const drawingUtils = new DrawingUtils(ctx)

      createEffect(() => {
        const _stream = stream()
        if (!_stream) return
        webcam.srcObject = _stream
        webcam.addEventListener('loadeddata', webcam.play.bind(webcam))
      })

      createEffect(() => {
        if (!camEnabled()) return
        const result = prediction()
        if (result) {
          ctx.clearRect(0, 0, webcam.videoWidth, webcam.videoHeight)
          drawLandmarks(result, drawingUtils)
        }
      })

      createEffect(() => {
        const _ratio = ratio()
        if (!_ratio) return
        webcam.style.width = width() + 'px'
        webcam.style.height = width() * _ratio + 'px'
        canvas.style.width = width() + 'px'
        canvas.style.height = width() * _ratio + 'px'
        canvas.width = hidden.videoWidth
        canvas.height = hidden.videoHeight
      })

      return (
        <Show when={camEnabled()}>
          <div
            style={{
              position: 'fixed',
              bottom: '0px',
              left: '0px',
              'z-index': 1,
              display: !visible() ? 'none' : 'flex',
              margin: `${margin()}px`,
            }}
          >
            {canvas}
            {webcam}
          </div>
        </Show>
      )
    },
    widget() {
      return (
        <>
          <List>
            <Button
              onClick={() => {
                setCamEnabled(enabled => !enabled)
                if (camEnabled()) {
                  enableCam()
                } else {
                  hidden.pause()
                  setStream()
                }
              }}
            >
              {camEnabled() ? 'disable' : 'enable'} cam
            </Button>
          </List>
          <List>
            <H3>Webcam Debugger</H3>
            <Labelled label="width">
              <NumberInput value={width()} onInput={value => setWidth(value)} />
            </Labelled>
            <Labelled label="margin">
              <NumberInput value={margin()} onInput={value => setMargin(value)} />
            </Labelled>
            <Labelled label="visible">
              <Button onClick={() => setVisible(visible => !visible)}>
                {!visible() ? 'hidden' : 'visible'}
              </Button>
            </Labelled>
          </List>
        </>
      )
    },
  }
})

function drawLandmarks(faceLandmarkerResult: FaceLandmarkerResult, drawingUtils: DrawingUtils) {
  for (const landmarks of faceLandmarkerResult.faceLandmarks) {
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
