import KeyboardInput from './KeyboardInput'

let keyboardInput: KeyboardInput | undefined

export default function getKeyboardInput() {
  if (!keyboardInput) {
    keyboardInput = new KeyboardInput()
  }
  return keyboardInput
}

export function rigToKeyboard(callback: (controller: KeyboardInput) => void) {
  let initialized = false
  window.addEventListener('keydown', () => {
    if (initialized) {
      return
    }
    initialized = true
    console.log('Keyboard connected.')
    callback(getKeyboardInput())
  })
}
