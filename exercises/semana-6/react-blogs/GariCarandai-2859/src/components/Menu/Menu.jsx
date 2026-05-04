import "./Menu.scss"

function Menu(){
  return(<>
    <nav className="menu">
      <div className="container-row">

        <a href="#" onClick={e=>e.preventDefault()}><div className="logo">dB</div></a>
        
        <ul>
          <li><a href="#" onClick={e=>e.preventDefault()} className="selected text-xs">Inicio</a></li>
          <li><a href="#" onClick={e=>e.preventDefault()} className="text-xs">Suscribirse</a></li>
        </ul>

      </div>
    </nav>
  </>)
}

export default Menu;