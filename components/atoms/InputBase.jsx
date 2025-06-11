export default function InputBase ({ type = "text", value, onchange, name, placeholder, className = "", ...props}) {
  return(
    <input 
      type={type} 
      value={value} 
      onChange={onchange} 
      name={name} 
      placeholder={placeholder}
      className={`border border-gray-300 p-2 rounded-md w-full ${className}`}
      {...props}
    />
  )
}
