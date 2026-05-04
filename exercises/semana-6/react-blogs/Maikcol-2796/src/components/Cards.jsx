import PropTypes from "prop-types";
import { humanizeDate } from "../logic/humanizeDate";
import clay from "../assets/clay.jpg";
import "./Cards.css";
export function Cards({ entries }) {
  const orderEntries = entries?.toSorted((a, b) => {
    if (a.principal && b.principal) {
      return a.id - b.id;
    } else if (a.principal) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <section className="posts">
      {orderEntries?.map((entry) => {
        return (
          <article key={entry.id} className={entry.principal && "principal"}>
            <div className="article-head">
              <h2>{entry.title}</h2>
              <img src={clay} alt="" />
            </div>
            <div className="article-text">
              <p>{entry.body}</p>
              <div className="article-footer">
                <time dateTime={entry.date}>{humanizeDate(entry.date)}</time>
                <a className="article-link" href="#">
                  Leer más
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
Cards.propTypes = {
  entries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.oneOf([null, undefined]),
  ]),
};
