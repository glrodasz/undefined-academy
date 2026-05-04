import './Menu.css'

const handleCloseMenu = () => {
  const $menuToggle = document.querySelector('#menu-toggle')
  $menuToggle.checked = false
}

const Menu = () => {
  return (
    <nav>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul>
        <li>
          <a href="/#about" onClick={handleCloseMenu}>
            Acerca
          </a>
        </li>
        <li>
          <a href="/#blog" onClick={handleCloseMenu}>
            Blog
          </a>
        </li>
        <li>
          <a href="/#social" onClick={handleCloseMenu}>
            Sígueme
          </a>
        </li>
        <li>
          <a href="/contact" onClick={handleCloseMenu}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
