import React, { useState, useEffect, useReducer, useRef } from 'react'
import ReactDOM from 'react-dom'
import AlloyFinger from 'alloyfinger'

function Gesture({ name, run, children }) {
  const ref = useRef()

  useEffect(() => {
    const instances = Array.from(ref.current.children).map(
      (child) => new AlloyFinger(child, { [name]: run })
    )
    return () => instances.forEach((instance) => instance.destroy())
  }, [])

  return <div ref={ref}>{children}</div>
}

function Box({ color, children }) {
  return <div className={`w-64 h-64 bg-${color}-500`}>{children}</div>
}

function App() {
  const [swipeCount, setSwipeCount] = useState(0)
  const [tapCount, setTapCount] = useState(0)

  function swipe(e) {
    setSwipeCount((_) => ++_)
  }

  function tap(e) {
    setTapCount((_) => ++_)
  }

  return (
    <>
      <Gesture name="swipe" run={swipe}>
        <Box color="red">{swipeCount}</Box>
      </Gesture>

      <Gesture name="tap" run={tap}>
        <Box color="green">{tapCount}</Box>
      </Gesture>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
