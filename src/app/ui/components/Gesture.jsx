import { useRef, useEffect } from 'react'
import AlloyFinger from 'alloyfinger'

export default function Gesture({ on, run, children }) {
  const ref = useRef()

  useEffect(() => {
    const prepareRun = (e) => {
      !e.cancelBubble && run(e)
      e.cancelBubble = true
    }

    const instances = Array.from(ref.current.children).map(
      (child) => new AlloyFinger(child, { [on]: prepareRun })
    )
    return () => instances.forEach((instance) => instance.destroy())
  }, [run])

  return <div ref={ref}>{children}</div>
}
