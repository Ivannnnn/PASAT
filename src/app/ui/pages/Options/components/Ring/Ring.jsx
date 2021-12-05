import { cx } from '@/helpers'

export default function Ring({ value, onClick, active, className }) {
  const color = active ? 'bg-green' : 'bg-gray-300'

  return (
    <div
      onClick={onClick}
      className={cx(
        'w-44 h-44 flex justify-center items-center rounded-full cursor-pointer',
        { 'z-10': active },
        color,
        className
      )}
    >
      <div className="w-40 h-40 bg-white flex justify-center items-center rounded-full">
        <div className="text-3xl">{value}</div>
      </div>
    </div>
  )
}
