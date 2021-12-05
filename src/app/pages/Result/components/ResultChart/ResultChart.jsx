import PieChart from './components/PieChart/PieChart'
import { cx } from '@/helpers'

export default function ResultChart({ success, gameType, className }) {
  return (
    <div className={cx('relative w-72 h-72', className)}>
      <PieChart value={success} size="100%" />
      <div className="text-3xl text-white text-center absolute left-0 right-0 top-1/2 transform -translate-y-1/2 ">
        {gameType}
      </div>
      <div className="absolute text-center left-0 right-0 top-3/4 text-2xl font-semibold text-green-800">
        {success}%
      </div>
    </div>
  )
}
