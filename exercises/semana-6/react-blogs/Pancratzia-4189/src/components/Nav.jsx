import * as React from "react";
import LinkNav from "./LinkNav";
import Barra from "./Barra";

function Nav() {

  const links = [
    {
      idx: 1,
      	href: "#",
      	children: "Inicio"
    },
    {
      idx: 2,
      	href: "#blog",
      	children: "Blog"
    },
    {
      idx: 3,
      href: "#contacto",
      children: "Contacto"
    }
  ]

  return (
    <nav className="navegacion">
      <div className="contenedor contenedor-navegacion">
       <Barra />

        <ul className="links-navegacion">

          {links.map(({ href, children, idx }) => 
            <LinkNav key={idx} href={href}>{children}</LinkNav>
          )}
      
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
