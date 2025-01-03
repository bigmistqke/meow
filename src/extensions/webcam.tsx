import { DrawingUtils, FaceLandmarker, FaceLandmarkerResult } from '@mediapipe/tasks-vision'
import { createEffect, createSignal } from 'solid-js'
import { Extension } from '../types'

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

export default (): Extension => {
  const [visible, setVisible] = createSignal(false)
  const [width, setWidth] = createSignal(125)
  const [margin, setMargin] = createSignal(25)
  const [ratio, setRatio] = createSignal<number>()
  const video = (<video width={width()} />) as HTMLVideoElement
  const canvas = (
    <canvas
      width={width()}
      style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px' }}
    />
  ) as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!
  const drawingUtils = new DrawingUtils(ctx)

  return {
    name: 'webcam-debugger',
    async setup(state) {
      createEffect(() => {
        if (!state.stream) return
        video.srcObject = state.stream
        video.addEventListener('loadeddata', () => {
          video.play()
          setRatio(video.videoHeight / video.videoWidth)
        })
      })

      createEffect(() => {
        const _ratio = ratio()
        if (!_ratio) return
        video.style.width = width() + 'px'
        video.style.height = width() * _ratio + 'px'
        canvas.style.width = width() + 'px'
        canvas.style.height = width() * _ratio + 'px'
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
      })
    },
    tick(state) {
      if (state.prediction) {
        ctx.clearRect(0, 0, video.videoWidth, video.videoHeight)
        drawLandmarks(state.prediction, drawingUtils)
      }
    },
    overlay() {
      return (
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
          {video}
        </div>
      )
    },
    widget() {
      return (
        <>
          <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr' }}>
            <label>width</label>
            <input type="number" value={width()} onInput={e => setWidth(+e.currentTarget.value)} />
          </div>
          <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr' }}>
            <label>margin</label>
            <input
              type="number"
              value={margin()}
              onInput={e => setMargin(+e.currentTarget.value)}
            />
          </div>
          <div style={{ display: 'grid', 'grid-template-columns': '1fr 1fr' }}>
            <label>visible</label>
            <button onClick={() => setVisible(visible => !visible)}>
              {!visible() ? 'hidden' : 'visible'}
            </button>
          </div>
        </>
      )
    },
  }
}
