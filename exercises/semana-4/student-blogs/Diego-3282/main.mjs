import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js");

dayjs.locale("es-us");
dayjs.extend(relativeTime);

function humanizeDate(date) {
  const wrappedDate = dayjs(date);
  if (!wrappedDate.isValid()) return "Invalid Date";

  const dateNow = dayjs();

  if (wrappedDate.year() != dateNow.year())
    return wrappedDate.format("MMMM - DD, YYYY");
  const diffDays = Math.abs(dateNow.diff(wrappedDate, "d"));
  if (diffDays > 30) return wrappedDate.format("MMMM - DD");
  else return wrappedDate.fromNow();
}


const postDateSpans = Array.from(document.querySelectorAll("span.post-date"));

postDateSpans.map((span) => {
  const currentText = span.textContent;
  const newText = humanizeDate(currentText);
  span.textContent = newText;
});


