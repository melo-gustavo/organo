import "./css/Input.css"

const Input = ({ required, label, changeInput, value, placeholder }) => {
  const capturingData = (event) => {
    changeInput(event.target.value)
  }

  return (
    <div className="input-text">
      {required ? (
        <label>{label}</label>
      ) : (
        <label>
          {label} <span style={{ fontSize: "12px" }}>(Opcional)</span>
        </label>
      )}
      <input
        onChange={capturingData}
        value={value}
        required={required}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
