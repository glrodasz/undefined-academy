import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import locale from "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.locale(locale);

function humanizeDates(d) {
  const date = dayjs(d);
  return dayjs(date).toNow();
}
const date = "Hecho: " + humanizeDates("2023-03-02");
document.getElementById("date").innerHTML = date;

function handleSubmit(event) {
  event.preventDefault();
  console.log("Hola mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
