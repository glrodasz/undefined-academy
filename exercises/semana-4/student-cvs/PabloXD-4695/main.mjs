import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

// Humanize Date Function
const humanizeDate = (date) => {
  const now = dayjs();
  const diff = now.diff(date, "days");
  if (diff < 30) {
    return date.fromNow();
  }
  return date.year() === now.year()
    ? date.format("MMMM D")
    : date.format("MMMM D, YYYY");
};

// Show Humanize Date in HTML
let $timeTags = document.querySelectorAll("time");
$timeTags.forEach((timeTag) => {
  let date = timeTag.getAttribute("datetime");
  console.log(date);
  console.log(typeof date);
  let convertedDate = humanizeDate(dayjs(date));
  timeTag.innerText = convertedDate;
});

//Form Contact Sunmit
function handleSubmit(event) {
  event.preventDefault();
  !console.log("Hola mundo");
}
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
