import * as React from "react";

function LinkNav( { href, children }) {
    return (
        <li className="link-navegacion"><a href={href}> {children} </a></li>
    )
}

export default LinkNav;