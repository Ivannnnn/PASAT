export default function Button({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-72 h-20 bg-green rounded-full flex items-center justify-center cursor-pointer border-2 border-green-500 flex-shrink-0"
    >
      <div className="text-white font-semibold tracking text-4xl">
        {children}
      </div>
    </div>
  )
}
