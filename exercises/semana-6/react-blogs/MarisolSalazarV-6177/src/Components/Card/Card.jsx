import { humanizeDate } from "../../Javascript/main.mjs";

export const Card = ({title, description, date}) => {
  return (
    <>
      <div className="article">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Publicado: {humanizeDate(date)}</span>
      </div>
    </>
  );
}
Card.propTypes;