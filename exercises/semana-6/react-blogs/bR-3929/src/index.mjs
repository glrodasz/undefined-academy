import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
import es from "dayjs/locale/es.js";
dayjs.locale(es);

function humanize(dates) {
    const now = dayjs();
  
    if (now.diff(dates, "year") < 1 && now.diff(dates, "month") >= 1) {
      const formattedDate = dayjs().format("MMMM DD");
      return capitalizeFirstLetter(formattedDate);
    } else if (now.diff(dates, "year") > 1) {
      const formattedDate = dayjs().format("MMMM DD, YYYY");
      return capitalizeFirstLetter(formattedDate);
    } else {
      return "Publicado " + now.to(dates);
    }
  }
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    export {humanize}