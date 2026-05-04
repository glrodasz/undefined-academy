const $navButton= document.querySelector('.nav-button')
const $navItems = document.querySelector('.nav-links')
const $navLinks = document.querySelectorAll('.nav__link')
const $animatedElement = document.querySelector('.section-title');

$navLinks.forEach(li => {
  li.addEventListener('click', () => {
    $navItems.classList.toggle('show');
  })
});
$navButton.addEventListener('click', ()=>{$navItems.classList.toggle('show')})

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('typewriter-effect')
      observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('typewriter-effect')
    }
  })
})

observer.observe($animatedElement)

window.addEventListener('unload', () => {
  observer.disconnect()
})
