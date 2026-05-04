import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import es from "dayjs/locale/es.js";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.locale("es");

const d = document;

export default function humanize(date) {
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