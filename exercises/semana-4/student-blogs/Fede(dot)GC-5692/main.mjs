import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanize(date) {
    const wrapperDate = dayjs(date)           //wrapper for the Date object
    const actualDateInMiliseconds = dayjs().valueOf()
    const actualYear = dayjs().year()
    const daysDiff = Math.abs(wrapperDate.diff(actualDateInMiliseconds, "days"))
    const isCurrentYear = wrapperDate.year() === actualYear

    if (!isCurrentYear) {
        return wrapperDate.format("MMMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return wrapperDate.fromNow()
    } else {
        return wrapperDate.format("MMMM DD")
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function humanizeDate($date, i) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime);
    $date.textContent = capitalize(humanizedDate);
}

const $dates = document.querySelectorAll("time")          
// se suele agregar el signo $ para indicar que es un elemento del DOM
// ARRAY-LIKE parece un array pero no lo es.  [[Prototype]]: NodeList
// Solo tienen los metodos .lenght y .forEach
$dates.forEach(humanizeDate)


