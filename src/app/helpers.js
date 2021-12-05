import { useState } from 'react'

export const cx = (...args) => {
  return args
    .map((arg) => {
      if (arg === null || arg === undefined) return null
      return typeof arg === 'string'
        ? arg
        : Object.keys(arg)
            .filter((key) => arg[key])
            .join(' ')
    })
    .filter(Boolean)
    .join(' ')
}

export const isNumeric = (v) => !isNaN(parseInt(v))

export function useUpdateState(initial) {
  const [state, setState] = useState(initial)
  const update = (stateOrFunc) =>
    setState((state) => ({
      ...state,
      ...(typeof stateOrFunc === 'function' ? stateOrFunc(state) : stateOrFunc),
    }))

  return [state, update]
}
