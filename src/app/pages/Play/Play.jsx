import React, { useEffect, useReducer } from 'react'
import ProgressCircle from './components/ProgressCircle/ProgressCircle'
import Solution from './components/Solution/Solution'
import ButtonDisplay from '../components/ButtonDisplay'

export default function Play({ game }) {
  const [, forceRender] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    game.on('update:data', forceRender)
  }, [])

  return (
    <div className="p-4 bg-gray-200 h-screen flex flex-col items-center justify-center">
      <ButtonDisplay className="mb-16">
        <span className="text-green mr-1">{game.config.n}</span>
        <span className="text-gray-400">N</span>
      </ButtonDisplay>

      {game.config.type === 'competitive' && (
        <ProgressCircle
          duration={game.config.interval}
          innerColor="rgb(229, 231, 235)"
          outerColor="#fff"
          width={200}
          outerWidth={12}
          key={game.data.numbers.length}
          className="flex-shrink-0 mb-10"
        >
          <div className="text-9xl font-extrabold text-green">
            {game.currentNumber}
          </div>
        </ProgressCircle>
      )}

      {game.config.type === 'practice' && (
        <div className="text-9xl font-extrabold text-green">
          {game.currentNumber}
        </div>
      )}

      <Solution
        value={Number(game.currentSolution)}
        onChange={(v) => game.setSolution(v)}
        onEnter={() => game.next()}
        className="mb-20"
      />

      <ButtonDisplay>
        <span className="text-green mr-1">{game.data.correct}</span>
        <span className="text-gray-700 mr-1">/</span>
        <span className="text-gray-400">
          {game.round > 0 ? game.round - 1 : 0}
        </span>
      </ButtonDisplay>
    </div>
  )
}
