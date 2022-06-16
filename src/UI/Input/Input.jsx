import "./Input.css";

function Input({
  handleChange,
  disable,
  label,
  placeholder,
  inputType,
  value,
}) {
  return (
    <div className="input-wrapper">
      <div>
        <label className="input-label">{label}</label>
      </div>
      <input
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        disabled={disable}
        className="border-none input"
        value={value}
        type={inputType}
      />
    </div>
  );
}

export default Input;
