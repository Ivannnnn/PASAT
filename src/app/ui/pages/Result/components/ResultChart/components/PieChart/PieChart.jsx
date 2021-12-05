import './PieChart.css'

function Segment({ value, offset }) {
  ;[value, offset] = [(value / 100) * 360, (offset / 100) * 360]

  return (
    <div
      className="segment"
      style={{
        transform: `translate(0, -50%) rotate(90deg) rotate(${offset}deg)`,
      }}
    >
      <div
        className="inner"
        style={{ transform: `translate(0, 100%) rotate(${value}deg)` }}
      ></div>
    </div>
  )
}

export default function PieChart({ size, value }) {
  return (
    <div className="pie" style={{ width: size, height: size }}>
      <Segment value={Math.min(value, 50)} offset={0} />
      {value > 50 && <Segment value={Math.min(value - 50, 50)} offset={50} />}
    </div>
  )
}
