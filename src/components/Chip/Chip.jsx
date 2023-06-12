import "./Chip.css"

export function Chip({ label = "", isActive = true}) {
  // const buttonClassName;
  return (
    <button className={`chip ${isActive ? "active": ""}`}>
      <p className="label">{label} </p>
      
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
