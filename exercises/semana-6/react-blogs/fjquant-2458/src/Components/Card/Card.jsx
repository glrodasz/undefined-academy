import time from "../Time/time";

const Card = ({ imagenBlog, imagenAlt, title, date, text, }) => {
    return (
        <div className="article">
            <img
                src={`/src/Imagenesblog/${imagenBlog}.jpg`}
                alt={imagenAlt} />
            <h3>{title}</h3>
            <time dateTime={date}>{date}</time>
            <p>{text}</p>
        </div>
    );
};

export default Card
