import { Color } from 'three'

import { clamp } from './math'
import { hexColor } from './colors'

const cache = new Map<string, string | null>()

function getSearchParam(param: string) {
  if (typeof window === 'undefined') {
    return null
  }
  return new URL(window.location.href).searchParams.get(param)
}

export function getUrlParam(param: string) {
  if (cache.has(param)) {
    return cache.get(param)!
  }
  queueParameterReminder(param)
  const value = getSearchParam(param)
  cache.set(param, value)
  return value
}

export function getUrlFlag(param: string) {
  const result = getUrlParam(param)
  return !!(result === '' || (result && result !== 'false'))
}

function getUrlNumber(
  param: string,
  defaultVal: number,
  parser: (val: string) => number,
  min = -Infinity,
  max = Infinity
) {
  return clamp(parser(getUrlParam(param) || defaultVal.toString()), min, max)
}

export function getUrlFloat(
  param: string,
  defaultVal: number,
  min = -Infinity,
  max = Infinity
) {
  return getUrlNumber(param, defaultVal, parseFloat, min, max)
}

export function getUrlInt(
  param: string,
  defaultVal: number,
  min = -Infinity,
  max = Infinity
) {
  return getUrlNumber(param, defaultVal, parseInt, min, max)
}

export function getUrlColor(param: string, defaultColor: string | Color) {
  let str = getUrlParam(param)
  if (!str) {
    if (defaultColor instanceof Color) {
      return defaultColor
    }
    str = defaultColor
  }
  return hexColor('#' + str)
}

const keysToRemember: string[] = []
let reminderQueued = false

function queueParameterReminder(name: string) {
  if (typeof window === 'undefined' || keysToRemember.includes(name)) {
    return
  }
  keysToRemember.push(name)
  if (reminderQueued) {
    return
  }
  reminderQueued = true
  setTimeout(() => {
    console.log('Nice Parameters to try: ' + keysToRemember.join(', '))
    reminderQueued = false
  }, 2000)
}
