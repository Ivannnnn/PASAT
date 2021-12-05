import React from 'react'

export default function ProgressLine({ duration }) {
  return (
    <div style={{ height: 1, width: 200 }}>
      <div
        style={{
          animation: `fill ${duration}ms`,
          background: 'red',
          height: '100%',
        }}
        className="fill"
      ></div>
    </div>
  )
}
