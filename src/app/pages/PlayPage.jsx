import React, { useEffect, useReducer } from 'react'

import ProgressLine from './components/ProgressLine'

export default function PlayPage({ game }) {
  const [, forceRender] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    game.on('update:data', forceRender)

    //game.onAny(['update:solutions', 'update:correct', 'update:numbers'], forceRender)
  }, [])

  function onChange(e) {
    game.setSolution(e.target.value || null)
  }

  function onEnter() {
    game.next()
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>N {game.config.n}</h2>

      {!game.config.auditory && (
        <div
          id="number-display"
          key={game.round + 'number-display'}
          style={{ animation: 'rollin 0.3s' }}
        >
          {game.currentNumber}
        </div>
      )}

      <div id="solution">
        <input
          type="number"
          onBlur={(e) => e.target.focus()}
          autoFocus
          value={game.currentSolution || ''}
          onChange={onChange}
          onKeyPress={(e) => e.key === 'Enter' && onEnter()}
        />
      </div>

      {game.isRunning && game.config.type === 'competitive' && (
        <ProgressLine
          key={new Date().getTime()}
          duration={game.config.interval}
        />
      )}

      <p>
        {game.data.correct}/{game.round > 0 ? game.round - 1 : 0}
      </p>

      {game.config.type === 'practice' && (
        <p>
          <button onClick={() => game.end()}>End</button>
        </p>
      )}
    </div>
  )
}
