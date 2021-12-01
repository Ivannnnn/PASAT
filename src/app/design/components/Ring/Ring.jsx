import { cx } from '@/helpers'

export default function Ring({ value, green }) {
  const color = green ? 'bg-green-400' : 'bg-gray-300'

  return (
    <div
      className={cx(
        'w-56 h-56 flex justify-center items-center rounded-full',
        color
      )}
    >
      <div className="w-48 h-48 bg-white flex justify-center items-center rounded-full">
        <div className="text-3xl font-semibold">{value}</div>
      </div>
    </div>
  )
}
