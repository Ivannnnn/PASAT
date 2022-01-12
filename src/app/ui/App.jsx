import React, { useState, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom'
import createGame from '@/game'

import Options from './pages/Options/Options'
import Play from './pages/Play/Play'
import Result from './pages/Result/Result'

const fakeGame = {
  type: 'competitive',
  status: 'running',
  config: {
    interval: 0,
  },
  currentNumber: 2,
  currentSolution: null,
  next: () => {},
  setSolution: () => {},
  on: () => {},
}

function App() {
  const [game, setGame] = useState(null)
  const [, forceRender] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    if (game) {
      game.on('ended', forceRender)
      return () => game.end()
    }
  }, [game])

  function startGame(options) {
    const game = createGame(options)
    game.start()
    setGame(game)
  }

  function reset() {
    setGame(null)
  }

  if (!game) return <Options start={startGame} />

  return {
    running: <Play game={game} reset={reset} />,
    ended: <Result game={game} reset={reset} />,
  }[game.status]
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
