import logoif from '../assets/images/logoif.png';

function Header(){
  return(
    <header className="header">
        <div className="logo-container">
            <img className="logo-image" src = {logoif} alt="Logo de Indira Franchi"/>
        </div>

        <nav className="nav-header">
            <ul className="nav-list">
                <li><a href="">Inicio</a></li>
                <li><a href="">Tecnología</a></li>
                <li><a href="">Destinos</a></li>
                <li><a href="">Fotografía</a></li>
            </ul>

            <div className="search-bar">
                <input id="search" name="search" type="text" placeholder="Buscar" required pattern="[A-Za-zñÑ ]+" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    </header>
  );
}

export default Header;