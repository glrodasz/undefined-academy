import './Button.css'

export function Button({ children, type, classes, isActive, id, value, role, dataFilter, disabled, onClick }) {

  return (
    <button
      type={type}
      className={`${classes} ${isActive ? 'active' : ''}`}
      id={id}
      value={value}
      role={role}
      data-filter={dataFilter}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}