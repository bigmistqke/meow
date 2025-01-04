import clsx from 'clsx'
import { For, JSX, Match, onMount, ParentProps, Switch } from 'solid-js'
import { Color, Texture, TextureLoader } from 'three'
import styles from './meow.module.css'

export function Labelled(props: ParentProps<{ label: string }>) {
  return (
    <div class={styles.labelled}>
      <label>{props.label}</label>
      {props.children}
    </div>
  )
}

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

export function List(props: ParentProps) {
  return <div class={styles.list}>{props.children}</div>
}

export function H3(props: ParentProps) {
  return <h3 class={styles.h3}>{props.children}</h3>
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

export function ColorInput(props: { color?: Color; onInput: (color: Color) => void }) {
  return (
    <div
      class={styles.colorInput}
      style={{
        'background-color':
          props.color instanceof Color
            ? `rgb(${props.color.r * 250},${props.color.g * 250},${props.color.b * 250})`
            : 'white',
      }}
    >
      <NumberInput
        step={0.1}
        value={props.color?.r || 0}
        onInput={value => {
          props.onInput(new Color(value, props.color?.g || 0, props.color?.b || 0))
        }}
      />
      <NumberInput
        step={0.1}
        value={props.color?.g || 0}
        onInput={value => {
          props.onInput(new Color(props.color?.r || 0, value, props.color?.b || 0))
        }}
      />
      <NumberInput
        step={0.1}
        value={props.color?.b || 0}
        onInput={value => {
          props.onInput(new Color(props.color?.r || 0, props.color?.g || 0, value))
        }}
      />
    </div>
  )
}

function CanvasFromBitmap(props: { bitmap: ImageBitmap; class?: string }) {
  return (
    <canvas
      class={props.class}
      ref={element => {
        onMount(() => {
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
export function TextureInput(props: { texture?: Texture; onInput: (texture: Texture) => void }) {
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
