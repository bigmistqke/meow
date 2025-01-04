🐱

## TODO

- [x] character upload button
  - adds character model
- [x] material editor
  - list of all materials
  - allow to be parametrically overridden
- [ ] blendshape/landmark editor
  - connect blendshapes of character model to face-landmarks of `MediaPipe`
- [ ] multiple editor windows with shared state
  - for example:
    - 1 editor window for doing changes on the fly
    - another window without ui for broadcasting to OBS
  - mb `automerge`? would allow for easy synchronisation of multi-device setups.
- [ ] different modes: `editor` and `cinema` mode
  - `editor`: includes hud and threejs editor tools
  - `cinema`: only scene is visible, for streaming/composing purposes
- [x] extensions/extensible ui-scheme
  - similar to unity's scripts
  - extensions should follow a certain scheme, for example default exporting `interface Extension { setup(): Promise<void>; tick(scene: THREE.Scene, data: FaceLandmarkResults): void; ui(): JSX.Element }`
    - async `setup` method for loading all necessary data
    - `tick` gets called on every tick
    - `ui` method would allow them to add ui into the editor-pane, which could control variables/signals used in the extension, or visualise some internal state.
  - these extensions are also able to create `threejs` editor tools that aren't visible in `cinema` mode
  - mb also inject additional html into the scenecanvas-container?
  - could all UI/mediapipe-to-model logic be written according to this scheme?
