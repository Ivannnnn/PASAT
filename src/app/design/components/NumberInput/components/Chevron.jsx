import { cx } from '@/helpers'

export default function Chevron({ direction, className, ...props }) {
  return (
    <div className="cursor-pointer px-2 py-1" {...props}>
      <svg
        width="16"
        height="25"
        viewBox="0 0 16 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cx({ 'transform rotate-180': direction === 'left' })}
      >
        <path
          d="M0.929688 23.5756L14.8161 12.1581M15.3296 13.0044L1.44317 1.58691"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
