import * as React from "react";
import Enlaces from './Enlaces'

function Footer(){
    return(
        <footer className="footer">
            <div className="contenedor__footer">
                <div className="contenedor__redes">
                    <Enlaces href="https://github.com/DevOld112" icono ='fa fa-github' />
                    <Enlaces href= "https://twitter.com/EdwardEmpatico" icono = 'fa fa-twitter' />
                    <Enlaces href= 'https://www.linkedin.com/in/wilmer-lopez-b356a8122/' icono= 'fa fa-linkedin' />
                </div>
                <p>Gracias por tu visita, Blog creado usando React</p>
            </div>
        </footer>
    )
}


export default Footer;