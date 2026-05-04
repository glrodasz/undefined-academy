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

d.addEventListener("DOMContentLoaded", (e) => {
  const $cardDates = d.querySelectorAll(".card-date");

  $cardDates.forEach(element => {
    const humanDate = humanize(element.getAttribute("datetime"));
    element.innerHTML = humanDate;
  });
})