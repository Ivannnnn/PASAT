import React, { useEffect, useReducer } from 'react'
import ProgressCircle from './components/ProgressCircle/ProgressCircle'
import Solution from './components/Solution/Solution'
import ButtonDisplay from '../components/ButtonDisplay'
import Gesture from '@/ui/components/Gesture'
import { cx } from '@/helpers'

function Item({ val, hidden }) {
  return (
    <li
      className={cx(
        'w-1/3 h-12 flex items-center justify-center border cursor-pointer',
        {
          'bg-white': !hidden,
        }
      )}
    >
      {val}
    </li>
  )
}

function Keyboard() {
  return (
    <ul class="flex w-64 flex-wrap flex-row-reverse">
      <Item val={9} />
      <Item val={8} />
      <Item val={7} />
      <Item val={6} />
      <Item val={5} />
      <Item val={4} />
      <Item val={3} />
      <Item val={2} />
      <Item val={1} />
      <Item hidden />
      <Item val={0} />
    </ul>
  )
}

export default function Play({ game, reset }) {
  const [, forceRender] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    game.on('update:data', forceRender)
  }, [])

  function swipe({ direction }) {
    ;({
      Left: () => game.config.type === 'practice' && game.end(),
      Right: () => reset(),
    }[direction]())
  }

  return (
    <div className="p-4 bg-gray-200 h-screen flex flex-col items-center">
      <Gesture
        on="swipe"
        run={swipe}
        className="flex flex-col justify-center flex-grow items-center"
      >
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
            onTap={() => game.next()}
          >
            <div className="text-9xl font-extrabold text-green">
              {game.currentNumber}
            </div>
          </ProgressCircle>
        )}

        {game.config.type === 'practice' && (
          <Gesture on="tap" run={() => game.next()}>
            <div className="text-9xl font-extrabold text-green mb-10">
              {game.currentNumber}
            </div>
          </Gesture>
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
      </Gesture>

      <Keyboard />
    </div>
  )
}
