import style from "@/components/Card/Card.module.css"


function Card({img, name}){
  return(<>
    <div className={style["card"]}>      
      <img className={style["img"]} src={img} alt={name}/>      
      <h2>{name}</h2>
    </div>
  </>);
}


export default Card;