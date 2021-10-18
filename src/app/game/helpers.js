export const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const merge = (obj1, obj2) => {
  const result = { ...obj1 }
  for (let key in obj2) {
    if (obj2[key]) result[key] = obj2[key]
  }
  return result
}

export const createEventBus = () => {
  const subscribers = {}
  let counter = 0

  const on = (name, cb) => {
    if (!subscribers[name]) subscribers[name] = {}
    subscribers[name][++counter] = cb
    return btoa(name + '.' + counter)
  }

  const off = (id) => {
    const [name, prop] = atob(id).split('.')
    subscribers[name] && delete subscribers[name][prop]
  }

  const emit = (name, ...args) => {
    if (subscribers[name])
      Object.values(subscribers[name]).forEach((cb) => cb(...args))
  }

  return { on, off, emit }
}

export const createTimeout = () => {
  let timeout = null
  const start = (cb, delay) => {
    stop()
    timeout = setTimeout(cb, delay)
  }
  const stop = () => {
    clearTimeout(timeout)
    timeout = null
  }
  return { start, stop }
}

export const createInterval = () => {
  let interval = null
  const start = (cb, delay) => !interval && (interval = setInterval(cb, delay))
  const stop = () => {
    clearInterval(interval)
    interval = null
  }
  return { start, stop }
}
