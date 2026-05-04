import dayjs from "dayjs";
import "dayjs/locale/es.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.locale("es");
dayjs.extend(relativeTime);

const currentDate = dayjs();
const parseDate = date => dayjs(date);
const getDifference = (date, unit) => currentDate.diff(date, unit);
const isLessOrEqualToAMonth = date => getDifference(date, "month") <= 1;
const getRelativeTime = date => date.fromNow();
const capitalize = string => string[0].toUpperCase() + string.slice(1);
export const humanizeDate = date => {
  const parsedDate = parseDate(date);
  if (isLessOrEqualToAMonth(parsedDate)) {
    return capitalize(getRelativeTime(parsedDate));
  } else if (parsedDate.year() === currentDate.year()) {
    return capitalize(parsedDate.format("MMMM D"));
  } else {
    return capitalize(parsedDate.format("MMMM DD, YYYY"));
  }
};
