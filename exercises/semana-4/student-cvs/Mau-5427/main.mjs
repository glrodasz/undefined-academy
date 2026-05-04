import dayjs from "dayjs";
// para tiempos relativos
import relativeTime from "dayjs/plugin/relativeTime.js";
// para validar fecha y formato
import customParseFormat from "dayjs/plugin/customParseFormat.js";
// para traducir a español
import es from "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.locale("es");


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

  const $navBtn = d.querySelector(".hamburger");
  const $nav = d.querySelector(".navbar");
  
  // show hamburger menu
  d.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
      $navBtn.classList.toggle("is-active");
      $nav.classList.toggle("show-navbar");
    }

    if (e.target.matches(".navbar ul li a")) {
      $navBtn.classList.remove("is-active");
      $nav.classList.remove("show-navbar");
    }
  })

  // humanize card date
  function humanize(date) {
    const wrappedDate = dayjs(date, "YYYY-MM-DD", true);

    if (!wrappedDate.isValid()) {
      console.error("Fecha Invalida!!!")
      return "---";
    }

    if (wrappedDate.year() !== dayjs().year()) {
      return wrappedDate.format("MMMM DD, YYYY");
    }

    const monthDifference = Math.abs(wrappedDate.diff(dayjs(), "month", true));

    if (monthDifference > 1) {
      return wrappedDate.format("MMMM DD")
    } else {
      return wrappedDate.fromNow();
    }
  }

  const $cardDates = d.querySelectorAll(".card-date");

  $cardDates.forEach(element => {
    const humanDate = humanize(element.getAttribute("datetime"));
    element.innerHTML = `Ultima actualización: ${humanDate}`;
  });

  // prevent default submit of form
  d.addEventListener("submit", (e) => {
    e.preventDefault();
  })


})