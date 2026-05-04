import { fechaatexto } from "../assets/Js/scripts.mjs";
function Card({title, content, image, date, avatar}){
    return(
    <div className="posts">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{content}</p>
    <div className="autor">
        <span><img className="avatar" src={avatar} alt="" /></span>
        <span className="date">{fechaatexto(date)}</span>
    </div>
    </div>
    )
}
export default Card;