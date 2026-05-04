import CardFooter from "./card-footer";

function Card({title, image, content, date}){
  return (
    <article className="article-card">
      <a href="https://revolut.com/referral/indiraznhi!APR1-23-AR">
        <div className="image-card-container">
          <img className="card-image" src={image} alt={`Imagen de ${title}`} />
        </div>
        <div className="card-content">
          <h1 className="title-card">{title}</h1>
          <section className="section-card">
            <p>{content}</p>
          </section>
          <CardFooter date={date} />
        </div>
      </a>
    </article>
  );
}

export default Card;