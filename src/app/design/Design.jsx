import { useState } from 'react'
import NumberInput from './components//NumberInput/NumberInput'
import Ring from './components/Ring/Ring'
import ProgressCircle from './components/ProgressCircle/ProgressCircle'
import Button from './components/Button/Button'
import Solution from './components/Solution/Solution'
import ResultChart from './components/ResultChart/ResultChart'
import ModeSwitch from './components/ModeSwitch/ModeSwitch'

export default function Design() {
  const [n, setN] = useState(2)
  const [v, setV] = useState(7)

  return (
    <div className="p-4 bg-gray-200 h-screen">
      <ModeSwitch />

      <Solution value={Number(v)} onChange={setV} />
      <NumberInput value={n} onChange={setN} min={0} max={5}>
        <div className="font-black text-green-400 text-3xl">{n}</div>
      </NumberInput>

      <ProgressCircle
        duration={500}
        innerColor="rgb(229, 231, 235)"
        outerColor="#fff"
        width={200}
        outerWidth={20}
      >
        <div className="text-9xl font-extrabold text-green-400">7</div>
      </ProgressCircle>

      <Ring value="Game" green />

      <Button>Start</Button>

      <ResultChart success={37} gameType="Competition" />
    </div>
  )
}


