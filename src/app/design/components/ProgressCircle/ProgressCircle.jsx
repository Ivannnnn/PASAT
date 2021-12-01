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
      animation: `left ${duration}ms linear both`,
      clip: `rect(0, ${width / 2}px, ${width}px, 0)`,
      background: outerColor,
    },
    rightProgress: {
      animation: `right ${duration}ms linear both`,
      animationDelay: `${duration}ms`,
      clip: `rect(0, ${width / 2}px, ${width}px, 0)`,
      background: outerColor,
    },

    bar: {
      clip: `rect(0, ${width}px, ${width}px, ${width / 2}px)`,
    },
  }
}

export default function Progress({ children, ...props }) {
  const styles = getStyles(props)

  return (
    <div className="circular" style={styles.circular}>
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
