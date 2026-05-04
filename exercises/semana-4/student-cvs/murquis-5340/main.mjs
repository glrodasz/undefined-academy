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


    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear){
        return "Actualizado el " + wrappedDate.format("MMMM DD ") + "del " + wrappedDate.year()
    } else if(daysDiff <= 30){
        return "Última actualización " + wrappedDate.fromNow();
    }else{
        return "Última actualización el " + wrappedDate.format("DD MMMM");
    }

}

let elementDateFooter = document.getElementById("dateFooter");
elementDateFooter.innerHTML = humanize(dayjs(elementDateFooter.innerHTML, "DD/MM/YYYY"));
