import { useRef } from 'react'

export default function OptionsPage({ start }) {
  const textarea = useRef()

  const options = {
    type: 'competitive',
    n: 2,
    interval: 3000,
    rounds: 10,
    auditory: false,
  }

  return (
    <div>
      <textarea
        ref={textarea}
        style={{ width: 240, height: 180 }}
        defaultValue={JSON.stringify(options, null, 2)}
      ></textarea>
      <br />
      <button onClick={() => start(JSON.parse(textarea.current.value))}>
        Start
      </button>
    </div>
  )
}

// practice or competition
// practice     --> n, auditory, interval
// competition  --> n, auditory, rounds?, interval?
