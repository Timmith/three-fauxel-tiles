import getKeyboardInput from './getKeyboardInput'
import { KeyboardCodes } from '../utils/KeyboardCodes'

const quickKeyboardElevations: Map<string, { val: number }> = new Map()

export function getQuickKeyboardDirectionElevation(
  up: KeyboardCodes = 'PageUp',
  down: KeyboardCodes = 'PageDown'
) {
  const key = `${up}:${down}`
  if (!quickKeyboardElevations.has(key)) {
    const direction = { val: 0 }
    quickKeyboardElevations.set(key, direction)

    const buttonStates = {
      up: false,
      down: false
    }

    const onKey = (code: KeyboardCodes, pressed: boolean) => {
      switch (code) {
        case up:
          buttonStates.up = pressed
          break
        case down:
          buttonStates.down = pressed
          break
      }

      direction.val = buttonStates.up ? -1 : 0
      direction.val += buttonStates.down ? 1 : 0
    }

    getKeyboardInput().addListener(onKey)
  }

  return quickKeyboardElevations.get(key)!
}
