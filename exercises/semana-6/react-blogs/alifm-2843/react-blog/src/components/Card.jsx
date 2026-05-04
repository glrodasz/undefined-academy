import {humanize} from "../assets/scripts/humanize";

function Card({title, content, image, date}) {
    return (
        <>

        <section className="card">
            <img src={image} alt="a picture of the post"/>
            <h1>{title}</h1>
            <p>{content}</p>
            <span>
                Posted: <time dateTime={date} className="dates" >{humanize(date)}</time>
            </span>
        </section>


        </>
    )
} 

export default Card;