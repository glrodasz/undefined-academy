import * as React from "react";

function Enlaces({href, icono}){
    return(
        <a href={href} target="_blank">
            <i className={icono}>
            </i>
        </a>
    )
}

export default Enlaces;