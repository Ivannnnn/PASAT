import { cx } from '@/helpers'

export default function SolutionInput({ value = '', className }) {
  value = String(value || '')
    .padStart(2, ' ')
    .split('')

  return (
    <div className={cx('flex m-3', className)}>
      <div className="w-24 h-28 bg-gray-300 flex items-center justify-center text-7xl text-center mr-2">
        {value[0]}
      </div>
      <div className="w-24 h-28 bg-gray-300 flex items-center justify-center text-7xl text-center">
        {value[1]}
      </div>
    </div>
  )
}
