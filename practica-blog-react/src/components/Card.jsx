const Tag = ({ children, link = "#" }) => {
  return (
    <span className="tag tag-primary">
      <a href={link}>{children}</a>
    </span>
  );
};

const Card = ({
  unsplashId,
  unsplashAlt,
  tags,
  title,
  extract,
  date,
  author,
  readTime,
}) => {
  return (
    <article className="card">
      <img
        src={`https://source.unsplash.com/${unsplashId}`}
        alt={unsplashAlt}
      />
      <section>
        <div className="card-content">
          <header>
            <div className="tags">
              <Tag>Web Components</Tag>
              <Tag>CSS</Tag>
            </div>
            <h2 className="heading heading-sm font-bold">{title}</h2>
            <time
              className="help-text paragraph paragraph-xs font-regular"
              dateTime={date}
            >
              {date}
            </time>
          </header>
          <p className="paragraph paragraph-sm font-regular">{extract}</p>
        </div>
        <footer>
          <div className="author">
            <img src="https://i.pravatar.cc/300" alt="Avatar de un autor" />
            <span className="paragraph paragraph-xs font-bold">{author}</span>
          </div>
          <span className="help-text paragraph paragraph-xs font-regular">
            {readTime}
          </span>
        </footer>
      </section>
    </article>
  );
};

export default Card;
