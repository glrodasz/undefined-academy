import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"
import customParseFormat from "dayjs/plugin/customParseFormat";

await import("dayjs/locale/es.js");

dayjs.locale("es");
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

function humanize(date){
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    return daysDiff + " dias";
}



function humanizeHTML (htmlElement){
    let elementDateFooter = document.getElementById(htmlElement);
    elementDateFooter.innerHTML = humanize(dayjs(elementDateFooter.innerHTML, "DD/MM/YYYY"));
}
humanizeHTML("dateRentUno");
humanizeHTML("dateRentDos");
humanizeHTML("dateRentTres");
humanizeHTML("dateRentCuatro");
humanizeHTML("dateRentCinco");
humanizeHTML("dateRentSeis");


