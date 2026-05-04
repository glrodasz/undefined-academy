import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import locale from "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.locale(locale);

const today = dayjs();
const year = dayjs(today).year();
document.getElementById("year").innerHTML = year;

function humanizeDates(d) {
  const date = dayjs(d);
  return dayjs(date).toNow();
}

for (let i = 0; i <= 3; i++) {
  const date = "date" + i;
  let month = Math.floor(Math.random() * 12) + 1;
  let day = Math.floor(Math.random() * 31) + 1;
  const d = humanizeDates(year + "-" + month + "-" + day);
  document.getElementById(date).innerHTML = d;
}
