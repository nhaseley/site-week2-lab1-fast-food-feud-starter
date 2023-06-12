import "./Chip.css"

export function Chip({ label = "", isActive = false, handleClick }) {
  return (
    <button className="chip"onClick={handleClick}>
      <p className="label">{isActive ? "IM ACTIVE BABY" : label} </p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
