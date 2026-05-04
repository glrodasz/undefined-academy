import * as React from "react";

function LinkRed({href, icono}) {
    return (
        <a href={href} target="_blank"><i className={icono}></i></a>
    )
    
}

export default LinkRed;