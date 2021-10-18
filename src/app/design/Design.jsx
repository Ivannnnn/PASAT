function Chevron() {
  return (
    <svg
      width="16"
      height="25"
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.929688 23.5756L14.8161 12.1581M15.3296 13.0044L1.44317 1.58691"
        stroke="black"
        stroke-width="2"
      />
    </svg>
  )
}

function Switch() {
  return (
    <div className="w-44 b-">
      <Chevron />
      <div>2</div>
      <Chevron />
    </div>
  )
}

export default function Design() {
  return <div className="w-16 h-16 bg-red-"></div>
}

// https://play.tailwindcss.com/tZwkuhFeCQ?layout=horizontal
