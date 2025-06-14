export default function SelectBase ({ name, value, onChange,  options = [], className = "", ...props }) {
  return(
    <select 
      name={name} 
      value={value}
      onChange={onChange}
      className={`border border-gray-300 p-2 rounded-md w-full text-[#333] ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}