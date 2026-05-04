function Nav() {

    return (
        <nav>
            <ul class="menu_items">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <span class="btn_menu">
                <i class="fa fa-bars" onClick={() => {
                    console.log("Click")
                    const menu_items = document.querySelector('.menu_items')
                    menu_items.classList.toggle('show')
                }}></i>
            </span>
        </nav>
    )
}
export default Nav;