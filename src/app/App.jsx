import React, { useState, useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom'
import createGame from '@/game'

import OptionsPage from './pages/OptionsPage'
import PlayPage from './pages/PlayPage'
import ResultsPage from './pages/ResultsPage'

import Design from './design/Design'

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

  if (!game) return <OptionsPage start={startGame} />

  return {
    running: <PlayPage game={game} />,
    ended: <ResultsPage game={game} />,
  }[game.status]
}

ReactDOM.render(
  <React.StrictMode>
    <Design />
  </React.StrictMode>,
  document.getElementById('root')
)

/*
  TODO:
    - roll in correct
    - improve design
    - save result
*/

/*

const data = {
  correct: 0,
  solutions: [],
}

// DisplayNumber
game.on('update:numbers', forceRender)

// Feedback
game.on('update:correct', forceRender)

// SolutionInput
// can you watch a getter change?
game.on('update:lastSolution', forceRender)

function updateData(props) {
  for (let key in props) emit('update:' + props[key])
}

// object that trackes all changes to itself and then when you press commit it
// tells you exactly what you changed

const data = new Data()

data.update({ name: 'Ivan' }) // stage changes
data.commit()
*/
