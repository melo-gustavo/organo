import "./css/Input.css"

const Input = (props) => {
  const capturingData = (event) => {
    props.changeInput(event.target.value)
  }

  return (
    <div className="input-text">
      {props.required ? (
        <label>{props.label}</label>
      ) : (
        <label>
          {props.label} <span style={{ fontSize: "12px" }}>(Opcional)</span>
        </label>
      )}
      <input
        onChange={capturingData}
        value={props.value}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default Input
