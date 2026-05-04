import * as React from "react";
import Hero from "./Hero";
import Navegacion from "./Navegacion";
import NavigationBar from './NavigationBar'

function Header (){
    return(
    <header className="header">
        <div className="navegacion__explorador">
        <NavigationBar />
        <Navegacion />
        
        </div>
        
        <Hero />
        
        
    </header>
    )
}

export default Header;