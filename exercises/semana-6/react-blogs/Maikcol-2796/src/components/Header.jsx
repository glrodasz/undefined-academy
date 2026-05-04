import PropTypes from "prop-types";
import "./Header.css";
import clay from "../assets/clay.jpg";
export function Header({ title }) {
  return (
    <header>
      <img
        className="header-img"
        src={clay}
        alt="Imagen de un portatil y un café"
      />
      <div className="header-content">
        <h1>{title}</h1>
        <nav>
          <ul>
            <li>
              <a className="nav__link" href="#">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav__link" href="#">
                Categorías
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};
