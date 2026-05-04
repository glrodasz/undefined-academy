import "./Card.scss"
import humanice from "../../utils/humanice"

function Card({
  id,
  imageUrl = ["https://via.placeholder.com/304x304/0000000/ffffff?text=dotBlog", "https://via.placeholder.com/538x334/707070/707070"],
  imageAlt = ["Imagen en blanco", "Imagen en blanco"],
  imageColor = ["#F45C43", "#EB3349"],
  title,
  date,
  text,
  tags = [],
  author,
  typeCard
}){

  if(typeCard === "category"){
    return(<>
      <article key={id}>
        <div className="img-box" style={{
          "--color-0": imageColor[0],
          "--color-1": imageColor[1]
        }}>

          <img className="img-bg" src={imageUrl[1]} alt={imageAlt[1]}/>
          <div className="img-ico"><img src={imageUrl[0]} alt={imageAlt[0]}/></div>
          
        </div>
        <div className="container-col">
          <h1 className="text-sm">{title}</h1>
        </div>
      </article>
    </>)
  }else{
    return(<>
      <article key={id} className="article-card">
        <div className="img-box" style={{
          "--color-0": imageColor[0],
          "--color-1": imageColor[1]
        }}>

          <img className="img-bg" src={imageUrl[1]} alt={imageAlt[1]}/>
          <div className="img-ico"><img src={imageUrl[0]} alt={imageAlt[0]}/></div>
          
        </div>
        
        <div className="container-col">
          <ul className="tags">
            {tags.map((tag, index) => {
              return <li  key={id+"_"+index} className="tag text-sm">{tag}</li>
            })}
          </ul>
          <h1 className="text-2xl">{title}</h1>
          <p className="text-sm">{text}</p>
          <div className="container-row">
            <p className="author text-sm">{"by "+author}</p>
            <time className="date text-xs" dateTime={date} >{humanice(date)}</time>
          </div>                
        </div>
      </article>
    </>);
  }
  
}

export default Card;