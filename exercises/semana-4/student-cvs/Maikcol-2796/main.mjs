import dayjs from "dayjs";
// import "dayjs/locale/es.js";
import utc from "dayjs/plugin/utc.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);

// dayjs.locale("es");
dayjs.extend(utc);

function humanizarFecha(date) {
  const MONTH = 1000 * 60 * 60 * 24 * 30;
  const YEAR = 1000 * 60 * 60 * 24 * 365;
  const today = dayjs();
  const newDate = dayjs(date);
  const timeDiference = newDate.valueOf() - today.valueOf();

  if (-MONTH < timeDiference && timeDiference <= MONTH) {
    return dayjs().to(newDate);
  } else if (today.format("YYYY") !== newDate.format("YYYY")) {
    return newDate.format("MMMM D, YYYY");
  } else if (MONTH < Math.abs(timeDiference) && Math.abs(timeDiference) <= YEAR) {
    return newDate.format("MMMM D");
  }
}
let $timeTags = document.querySelectorAll('.time')
$timeTags.forEach(timeTag=>{
    let date = timeTag.getAttribute('datetime')
    let humanDate= humanizarFecha(date)
    
    timeTag.innerText= humanDate
})
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

