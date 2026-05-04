const $navButton= document.querySelector('.nav-button')
const $navItems = document.querySelector('.nav-links')
const $navLinks = document.querySelectorAll('.nav__link')

$navLinks.forEach(li => {
  li.addEventListener('click', () => {
    $navItems.classList.toggle('show');
  })
});
$navButton.addEventListener('click', ()=>{$navItems.classList.toggle('show')})
