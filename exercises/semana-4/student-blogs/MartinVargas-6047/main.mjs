import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import es from "dayjs/locale/es.js";
//
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.locale("es");
//
const d = document;
function humanize(date) {
  const wrappedDate = dayjs(date);
  const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();
  //
  if (!isCurrentYear) {
    return wrappedDate.format("MMMM DD, YYYY");
  } else if (daysDiff <= 30) {
    return wrappedDate.fromNow();
  } else {
    return wrappedDate.format("MMMM DD");
  }
}

d.addEventListener("DOMContentLoaded", (e) => {
  const $cardDates = d.querySelectorAll(".card-date");

  $cardDates.forEach((element) => {
    const humanDate = humanize(element.getAttribute("datetime"));
    element.innerHTML = humanDate;
  });
});
