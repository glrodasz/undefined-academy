import * as React from "react";
import LinkRed from "./LinkRed";


function Footer() {
    return (
        <footer className="footer" id="contacto">
        <div className="contenedor contenedor-footer">
            <div className="redes">
                <LinkRed href="https://github.com/Pancratzia" icono="fa fa-github" />
                <LinkRed href="https://www.linkedin.com/in/leortegaperez/" icono="fa fa-linkedin" />
            </div>

            <p>&copy; Todos los derechos reservados<br />Laura Ortega - 2023</p>
        </div>
    </footer>
    )
}

export default Footer;