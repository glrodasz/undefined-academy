//Funcion humanizada para fecha
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

await import("dayjs/locale/es-us.js");

dayjs.locale("es-us");
dayjs.extend(relativeTime);

function humanize(date) {
  const wrappedDate = dayjs(date)
  const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

     if(!isCurrentYear) {
     return wrappedDate.format("MMMM DD, YYYY");
   } else if(daysDiff <=30) {
     return wrappedDate.fromNow();
   } else {
     return wrappedDate.format("MMMM DD");
   }
  }
  
  document.getElementById("date-1").innerHTML = humanize("2023-02-26");