import { Card_component } from "./Card_component"

export const Card = ({image,components,title,date,description,author,readingTime}) =>{
    return (
        <div className="boxCard">
            <div>
                <img className="image-post" src={image}></img>
                <section className="card-section">
                    <Card_component tags={[...components]}></Card_component>
                    <h2 className="headingTitle">{title}</h2>
                    <div className="daysPublish">{date}</div>
            </section>
            <div className="paragraph">{description}</div>  
            </div>
            <footer>
                <div class="author">
                    <img src="src/assets/img/avatars/1.jpg" alt="Avatar de un autor"/>
                    <span>{author}</span>
                </div>
                <span className="readingTime">{readingTime}</span>
            </footer>
        </div>
)
}