import * as React from "react";

function NavEnlace ( { href, children, iconos }) {
    return (
        <li className="link-navegacion"><a href={href}> {children} {iconos} </a></li>
    )
}

export default NavEnlace;