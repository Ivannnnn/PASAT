import { cx } from '@/helpers'

export default function ButtonDisplay({ children, className }) {
  return (
    <div
      className={cx(
        'w-28 border-gray-400 border-2 rounded-full flex justify-center items-center select-none py-1 px-2',
        className
      )}
    >
      <div className="font-black text-lg">{children}</div>
    </div>
  )
}
