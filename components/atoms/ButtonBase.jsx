export default function ButtonBase ({ children, onClick, type = "button", className = ""}) {
  return (
    <button 
      onClick={onClick}
      type={type}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition ${className}`}
    >
      { children }
    </button>
  )
}