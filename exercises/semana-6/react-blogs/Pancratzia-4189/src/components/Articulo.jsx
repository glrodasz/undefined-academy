import * as React from "react";
import { humanize } from "../assets/js/humanize";

function Articulo({ titulo, contenido, img, fecha, id}) {

  const alt = "Imagen de la entrada " + id;
  const imgLink = "src/assets/imgs/" + img;

  return (
    <article className="articulo">
      <div className="card">
        <div className="imagen-card">
          <img src={imgLink} alt={alt} />
        </div>
        <div className="contenido-card">
          <p className="titulo-contenido-card">{titulo}</p>
          <p className="texto-contenido-card">{contenido}</p>
          <small className="small">{humanize(fecha)}</small>
          <br />
          <a className="boton-card" href="#">
            Leer Más
          </a>
        </div>
      </div>
    </article>
  );
}

export default Articulo;
