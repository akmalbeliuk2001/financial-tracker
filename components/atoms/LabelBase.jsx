export default function LabelBase ({ htmlFor, className = "", children }) {
  return(
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    >
      {children}
    </label>
  )
}