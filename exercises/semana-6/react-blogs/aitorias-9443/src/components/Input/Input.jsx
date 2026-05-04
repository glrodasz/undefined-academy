import './Input.css'

export function Input({type, classes, id, value, placeholder, role, disabled, onChange }) {

  return (
    <input
      type={type}
      className={classes}
      id={id}
      value={value}
      placeholder={placeholder}
      role={role}
      disabled={disabled}
      onChange={onChange}
    >
    </input>
  )
}