export default function ButtonBase ({ children, onClick, type = "button", className = ""}) {
  return (
    <button 
      onClick={onClick}
      type={type}
      className={`${className}`}
    >
      { children }
    </button>
  )
}