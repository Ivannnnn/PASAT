import Chevron from './components/Chevron'

export default function NumberInput({ children, value, onChange, min, max }) {
  function increment() {
    if (value < Math.min(max, Infinity)) onChange(value + 1)
  }

  function decrement() {
    if (value > Math.max(min, -Infinity)) onChange(value - 1)
  }

  return (
    <div className="w-44 border-gray-500 border-2 rounded-full flex justify-between items-center py-3 px-4 select-none">
      <Chevron direction="left" onClick={decrement} />
      {children}
      <Chevron onClick={increment} />
    </div>
  )
}

// import
// creat react function
