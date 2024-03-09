import "./css/Select.css"

const Select = ({ label, changeSelect, value, required, items }) => {
  const capturingData = (event) => {
    changeSelect(event.target.value)
  }

  return (
    <div className="select">
      <label>{label}</label>
      <select required={required} value={value} onChange={capturingData}>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
