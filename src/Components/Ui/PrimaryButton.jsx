


const PrimaryButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="primary-button primary-button-shadow ">{text}</button>
  )
}

export default PrimaryButton