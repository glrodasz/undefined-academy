/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import humanizeDate from "../helpers/dateFormater";

const Card = ({ card }) => {
  const { title, description, date, imageUrl } = card;
  return (
    <div className="card">
      <img src={imageUrl} />
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="card-footer">
        <p className="time">{humanizeDate(dayjs(date))}</p>
        <a className="card-link" href="#">
          See more
        </a>
      </div>
    </div>
  );
};

export default Card;
