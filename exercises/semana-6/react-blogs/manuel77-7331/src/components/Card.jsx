import { DateToStr } from "../assets/js/main";
function Card({title, content, image, date, avatar}){
    return(
    <div className="posts">
        <img src={image} alt="image post" />
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="author-post">
        <span><img className="avatar" src={avatar} alt="avatar" /></span>
        <span className="date">{DateToStr(date)}</span>
        </div>
    </div>
    )
}
export default Card;