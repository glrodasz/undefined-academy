import * as React from "react";
import { humanize } from "../assets/js/humanize"

function Card ({ title, text, img, fecha, enlace }){

    const textoAlt = 'Imagen de la entrada';
    const imgArticulo = 'src/assets/img/' + img

    return (
        <div className="article">
            <div className="card">
                <div className="imagen__card">
                    <img src={imgArticulo} alt= {textoAlt} />
                </div>
                <h1>{title} </h1>
                <p>{text}</p>
                <div className="entrada__articulo">
                    <button>
                        <a href= {enlace} >Leer Articulo</a>
                        </button>
                    <small className="fecha">{ humanize(fecha)} </small>
                </div>
            </div>
        </div>  
    )
}

export default Card;