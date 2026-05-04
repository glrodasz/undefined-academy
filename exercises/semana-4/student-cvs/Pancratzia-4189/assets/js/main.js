import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js");

dayjs.locale("es-us");
dayjs.extend(relativeTime);



document.querySelector(".footer-time").innerHTML = "2023 - Creado: " +humanize(dayjs("2023-04-26"));
document.querySelector(".time-bachillerato").innerHTML = humanize(dayjs("2017-07-01"));
document.querySelector(".time-universidad").innerHTML = humanize(dayjs("2024-07-01"));

//HUMANIZE METHODS
function humanize(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.isSame(Date.now(), "year");

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY");
    }else if(daysDiff<=30){
        return wrappedDate.fromNow();
    }else{
        return wrappedDate.format("MMMM DD");
    }
}


