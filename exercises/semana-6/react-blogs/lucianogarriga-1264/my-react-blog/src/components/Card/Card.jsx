import Time from "../Time/Time"; 
const Card = ({ title, src, alt, link, extract, date, author, readTime }) => {
  return (
    <>
      <article className="card">
        <img src={src} alt={alt} />
        <a href={link} className="title-link">
          <h3 className="tit1">{title}</h3>
        </a>
        <Time>{date}</Time>

        <div className="paragraph-card">
          <p className="p-cards">{extract}</p>
        </div>
        <section className="footer-card">
          <div className="author">
            <img src="./img/avatar.png" alt="Avatar" />
            <span className="paragraph">{author}</span>
          </div>
          <span className="reading-time">{readTime}</span>
        </section>
      </article>
    </>
  );
};

export default Card;
