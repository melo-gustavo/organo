import "./css/Select.css"

const Select = (props) => {
  const capturingData = (event) => {
    props.changeSelect(event.target.value)
  }

  return (
    <div className="select">
      <label>{props.label}</label>
      <select required={props.required} value={props.value} onChange={capturingData}>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
