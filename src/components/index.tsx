import clsx from 'clsx'
import {
  createRenderEffect,
  createSignal,
  For,
  JSX,
  Match,
  ParentProps,
  Show,
  Switch,
} from 'solid-js'
import { Texture, TextureLoader } from 'three'
import styles from './meow-components.module.css'

/**********************************************************************************/
/*                                                                                */
/*                                     Layout                                     */
/*                                                                                */
/**********************************************************************************/

export function Labelled(props: ParentProps<{ label: string }>) {
  return (
    <div class={styles.labelled}>
      <div>{props.label}</div>
      {props.children}
    </div>
  )
}

export function List(props: ParentProps) {
  return <div class={styles.list}>{props.children}</div>
}

export function H3(props: ParentProps) {
  return <h3 class={styles.h3}>{props.children}</h3>
}

export function Widget(props: ParentProps<{ name: string; onDelete?: () => void }>) {
  const [visible, setVisible] = createSignal(true)
  return (
    <section class={styles.widget}>
      <header class={styles.header}>
        <h2>{props.name}</h2>
        <Button onClick={() => setVisible(visible => !visible)}>{visible() ? 'min' : 'max'}</Button>
        <Show when={props.onDelete}>
          <Button
            style={{
              'aspect-ratio': 1,
            }}
            onClick={props.onDelete!}
          >
            x
          </Button>
        </Show>
      </header>
      <Show when={visible()}>
        <div>{props.children}</div>
      </Show>
    </section>
  )
}

/**********************************************************************************/
/*                                                                                */
/*                                   Interactive                                  */
/*                                                                                */
/**********************************************************************************/

export function Button(
  props: ParentProps<{
    class?: string
    style?: JSX.CSSProperties
    onClick: (event: MouseEvent) => void
  }>,
) {
  return (
    <button style={props.style} class={clsx(styles.button, props.class)} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export function HoverButton(
  props: ParentProps<{
    class?: string
    style?: JSX.CSSProperties
    onClick: (event: MouseEvent) => void
    hoverElement: JSX.Element
  }>,
) {
  return (
    <button
      style={props.style}
      class={clsx(styles.hoverButton, props.class)}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
      <span>{props.hoverElement}</span>
    </button>
  )
}

export function NumberInput(props: {
  value: number
  onInput: (value: number) => void
  step?: number
}) {
  return (
    <input
      class={styles.numberInput}
      type="number"
      value={props.value}
      onInput={event => props.onInput(+event.currentTarget.value)}
      step={props.step}
    />
  )
}

export function Select<const T extends string[]>(props: {
  options: T
  onInput: (option: T[number]) => void
  value: string
}) {
  return (
    <select
      class={styles.select}
      value={props.value}
      onInput={event => props.onInput(event.currentTarget.value)}
    >
      <For each={props.options}>{option => <option value={option}>{option}</option>}</For>
    </select>
  )
}

export function Vector3Input(props: {
  value: { x: number; y: number; z: number }
  onX: (value: number) => void
  onY: (value: number) => void
  onZ: (value: number) => void
}) {
  return (
    <div class={styles.vector3Input}>
      <NumberInput step={0.1} value={props.value.x} onInput={props.onX} />
      <NumberInput step={0.1} value={props.value.y} onInput={props.onY} />
      <NumberInput step={0.1} value={props.value.z} onInput={props.onZ} />
    </div>
  )
}

export function ColorInput(props: {
  value: { r: number; g: number; b: number }
  onR: (value: number) => void
  onG: (value: number) => void
  onB: (value: number) => void
}) {
  const color = () => {
    const { r, g, b } = props.value
    const biggest = [r, g, b].sort()[2]!
    const scale = Math.max(1, biggest)
    return `rgb(${(r / scale) * 250},${(g / scale) * 250},${(b / scale) * 250})`
  }
  return (
    <div
      class={styles.colorInput}
      style={{
        'background-color': color(),
      }}
    >
      <NumberInput step={0.1} value={props.value.r} onInput={props.onR} />
      <NumberInput step={0.1} value={props.value.g} onInput={props.onG} />
      <NumberInput step={0.1} value={props.value.b} onInput={props.onB} />
    </div>
  )
}

function CanvasFromBitmap(props: { bitmap: ImageBitmap; class?: string }) {
  return (
    <canvas
      class={props.class}
      ref={element => {
        createRenderEffect(() => {
          element.width = props.bitmap.width
          element.height = props.bitmap.height
          const ctx = element.getContext('2d')!
          ctx.drawImage(props.bitmap, 0, 0)
        })
      }}
    />
  )
}

const loader = new TextureLoader()
export function TextureInput(props: {
  texture: Texture | null
  onInput: (texture: Texture) => void
}) {
  let input: HTMLInputElement

  return (
    <>
      <input
        type="file"
        hidden
        ref={input!}
        onInput={event => {
          const file = event.currentTarget.files![0]
          if (file) {
            const reader = new FileReader()
            reader.onload = function (event) {
              const imageUrl = event.target!.result as string
              loader.load(imageUrl, props.onInput, undefined, function (err) {
                console.error('An error occurred loading the texture:', err)
              })
            }
            reader.readAsDataURL(file)
          }
        }}
      />
      <Button onClick={() => input!.click()} class={styles.textureInput}>
        <Switch>
          <Match
            when={
              props.texture?.source.data instanceof HTMLImageElement && props.texture.source.data
            }
          >
            {data => (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                src={data().src}
              />
            )}
          </Match>
          <Match
            when={props.texture?.source.data instanceof ImageBitmap && props.texture.source.data}
          >
            {data => <CanvasFromBitmap bitmap={data()} />}
          </Match>
        </Switch>
      </Button>
    </>
  )
}
