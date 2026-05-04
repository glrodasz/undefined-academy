const handleCloseMenu = (event) => {
    const $menuToggle = document.querySelector("#menu-toggle")
    $menuToggle.checked = false;
}

const $menuItems = document.querySelectorAll("nav li");
$menuItems.forEach(item => {
    item.addEventListener("click", handleCloseMenu);
});
