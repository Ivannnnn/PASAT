import Chevron from './components/Chevron'
import { cx } from '@/helpers'

export default function NumberInput({
  children,
  big = false,
  value,
  onChange,
  min,
  max,
  step = 1,
  className,
}) {
  function increment() {
    if (value < Math.min(max, Infinity)) onChange(value + step, 1)
  }

  function decrement() {
    if (value > Math.max(min, -Infinity)) onChange(value - step, 1)
  }

  return (
    <div
      className={cx(
        'border-gray-500 border-2 rounded-full flex justify-between items-center select-none',
        big ? 'py-2 px-3 w-40' : 'w-28 py-2 px-2',
        className
      )}
    >
      <Chevron
        direction="left"
        onClick={decrement}
        className={big ? 'w-4 h-7' : 'w-3 h-4'}
      />
      {children(value)}
      <Chevron onClick={increment} className={big ? 'w-4 h-7' : 'w-3 h-4'} />
    </div>
  )
}
