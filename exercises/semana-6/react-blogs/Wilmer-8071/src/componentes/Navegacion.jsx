import * as React from "react";
import NavEnlace from "./NavEnlace";

function Navegacion(){
    const navegaciones = [
            
        {   
            ides: 1,
            href: '#',
            children: 'Inicio',
        },
        {
            ides:2,
            href: '##',
            children: 'Portafolio'
        },
        {
            ides: 3,
            href: '###',
            children: 'Contactame'
        }
    ]

    return(
        <nav className="navegacion">
        <div className="contenedor contenedor__navegacion">
        <ul className="Enlaces__navegacion">
            {navegaciones.map(({ href, children, ides, icono }) => 
            <NavEnlace key={ides} href={href}> {children}</NavEnlace>
            )}
        
        </ul>
        </div>
    </nav>
    )
}

export default Navegacion;