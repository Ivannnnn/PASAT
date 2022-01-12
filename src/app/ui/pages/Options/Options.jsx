import Ring from './components/Ring/Ring'
import NumberInput from './components/NumberInput/NumberInput'
import ModeSwitch from './components/ModeSwitch/ModeSwitch'
import Button from './components/Button/Button'
import { useUpdateState } from '@/helpers'
import Gesture from '@/ui/components/Gesture'

export default function Options({ start }) {
  const [options, updateOptions] = useUpdateState({
    type: 'competitive',
    n: 2,
    interval: 2700,
    rounds: 10,
    mode: 'visual',
  })

  return (
    <Gesture
      on="swipe"
      run={({ direction }) => direction === 'Left' && start(options)}
    >
      <div className="p-4 bg-gray-200 h-screen flex flex-col items-center justify-center">
        <div className="flex mb-8 relative left-5 w-88">
          <Ring
            value="Game"
            active={options.type === 'competitive'}
            onClick={() => updateOptions({ type: 'competitive' })}
          />
          <Ring
            value="Practice"
            active={options.type === 'practice'}
            className="relative -left-10"
            onClick={() => updateOptions({ type: 'practice' })}
          />
        </div>

        <h3 className="text-3xl text-gray-500 mb-2 tracking-wider">N</h3>

        <NumberInput
          big
          value={options.n}
          onChange={(n) => updateOptions({ n })}
          min={0}
          max={5}
          className="mb-3"
        >
          {(value) => (
            <div className="font-black text-green text-3xl">{value}</div>
          )}
        </NumberInput>

        <h3 className="text-md text-gray-500 mb-1 tracking-wider">interval</h3>

        <NumberInput
          value={options.interval}
          onChange={(interval) => updateOptions({ interval })}
          min={1000}
          max={5000}
          step={100}
          className="mb-3"
        >
          {(value) => (
            <div className="font-semibold text-md">
              <span className="text-green">{value / 1000}</span>
              <span className="text-gray-400">s</span>
            </div>
          )}
        </NumberInput>

        <h3 className="text-md text-gray-500 mb-1 tracking-wider">mode</h3>
        <ModeSwitch
          className="mb-16"
          value={options.mode}
          onChange={(mode) => updateOptions({ mode })}
        />

        <Button onClick={() => start(options)}>Start</Button>
      </div>
    </Gesture>
  )
}
