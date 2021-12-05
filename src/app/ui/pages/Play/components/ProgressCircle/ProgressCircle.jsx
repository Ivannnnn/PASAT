import { cx } from '@/helpers'
import './ProgressCircle.css'

function getStyles({ duration, width, outerWidth, innerColor, outerColor }) {
  return {
    circular: { width: width + 'px', height: width + 'px' },
    inner: {
      width: width - outerWidth + 'px',
      height: width - outerWidth + 'px',
      margin: `-${(width - outerWidth) / 2}px 0 0 -${
        (width - outerWidth) / 2
      }px`,
      background: innerColor,
    },
    leftProgress: {
      animation: `left ${duration / 2}ms linear both`,
      clip: `rect(0, ${width / 2}px, ${width}px, 0)`,
      background: outerColor,
    },
    rightProgress: {
      animation: `right ${duration / 2}ms linear both`,
      animationDelay: `${duration / 2}ms`,
      clip: `rect(0, ${width / 2}px, ${width}px, 0)`,
      background: outerColor,
    },

    bar: {
      clip: `rect(0, ${width}px, ${width}px, ${width / 2}px)`,
    },
  }
}

export default function ProgressCircle({ children, className, ...props }) {
  const styles = getStyles(props)

  return (
    <div className={cx('circular', className)} style={styles.circular}>
      <div className="inner" style={styles.inner}></div>
      <div className="inside">{children}</div>
      <div className="circle">
        <div className="bar left" style={styles.bar}>
          <div className="progress" style={styles.leftProgress}></div>
        </div>
        <div className="bar right" style={styles.bar}>
          <div className="progress" style={styles.rightProgress}></div>
        </div>
      </div>
    </div>
  )
}
