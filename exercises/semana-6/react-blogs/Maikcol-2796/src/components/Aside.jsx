import PropTypes from "prop-types";
import "./Aside.css";

export function Aside({ entries }) {
  return (
    <aside>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <a href="#">{entry.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
Aside.propTypes = {
  entries: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.oneOf([null, undefined]),
  ]),
};
