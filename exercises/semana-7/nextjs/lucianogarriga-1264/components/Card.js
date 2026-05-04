  

const Card = ({title, img}) => {
  return (
    <div className="card">
        <img src={img} alt="dog"/>
        <p>{title}</p>
    </div>
  )
}

export default Card