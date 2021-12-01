export default function Button({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-72 h-20 bg-green-400 rounded-full flex items-center justify-center cursor-pointer"
    >
      <div className="text-white font-semibold tracking text-4xl">
        {children}
      </div>
    </div>
  )
}
