import React, { useState, useEffect, useReducer, useRef } from 'react'
import ReactDOM from 'react-dom'

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className="border border-red-500"
      autoFocus
      onBlur={(e) => {
        console.log(e)
        e.target.focus()
      }}
    />
  )
}

function App() {
  const [name, setName] = useState('')

  return <Input value={name} onChange={setName} />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
