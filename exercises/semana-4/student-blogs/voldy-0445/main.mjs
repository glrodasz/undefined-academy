import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es")
dayjs.extend(relativeTime)

function humanize(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    return daysDiff + " days ago"
}

function humanizeDate (htmlElement){
    let datePublication = document.getElementById(htmlElement);
    datePublication.innerHTML = humanize(dayjs(datePublication.innerHTML, "DD/MM/YYYY"));
}
    
humanizeDate("date1");

