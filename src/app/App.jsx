import React, { useState, useEffect, useReducer, useRef } from 'react'
import ReactDOM from 'react-dom'
import AlloyFinger from 'alloyfinger'

const log = (obj) => alert(JSON.stringify(obj))

function App() {
  const ref = useRef()

  useEffect(() => {
    const af = new AlloyFinger(ref.current, {})

    console.log('yes')

    af.on('swipe', (e) => log({ ...e, type: 'swipe' }))
    af.on('tap', (e) => log({ ...e, type: 'tap' }))
  }, [])

  return (
    <div>
      <p>alloy</p>
      <div ref={ref} className="w-64 h-64 bg-red-500"></div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
