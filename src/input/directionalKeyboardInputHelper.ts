import { Vector2 } from 'three'
import getKeyboardInput from './getKeyboardInput'
import { KeyboardCodes } from '../utils/KeyboardCodes'

const quickKeyboardDirectionVectors: Map<string, Vector2> = new Map()

export function getQuickKeyboardDirectionVector(
  up: KeyboardCodes = 'ArrowUp',
  down: KeyboardCodes = 'ArrowDown',
  left: KeyboardCodes = 'ArrowLeft',
  right: KeyboardCodes = 'ArrowRight'
) {
  const key = `${up}:${down}:${left}:${right}`
  if (!quickKeyboardDirectionVectors.has(key)) {
    const direction = new Vector2()
    quickKeyboardDirectionVectors.set(key, direction)

    const buttonStates = {
      up: false,
      down: false,
      left: false,
      right: false
    }

    const onKey = (code: KeyboardCodes, pressed: boolean) => {
      switch (code) {
        case up:
          buttonStates.up = pressed
          break
        case down:
          buttonStates.down = pressed
          break
        case left:
          buttonStates.left = pressed
          break
        case right:
          buttonStates.right = pressed
          break
      }

      direction.x = buttonStates.left ? -1 : 0
      direction.x += buttonStates.right ? 1 : 0
      direction.y = buttonStates.up ? -1 : 0
      direction.y += buttonStates.down ? 1 : 0
    }

    getKeyboardInput().addListener(onKey)
  }

  return quickKeyboardDirectionVectors.get(key)!
}
