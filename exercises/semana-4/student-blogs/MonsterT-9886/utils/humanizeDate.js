import humanize from "./humanize.js";
import capitalize from "./capitalize";

export default function humanizeDate($date) {
  const datetime = $date.getAttribute("datetime");
  const humanizedDate = humanize(datetime);
  $date.textContent = capitalize(humanizedDate);
}
