import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanize(date) {
    const wrapperDate = dayjs(date)          
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
$dates.forEach(humanizeDate)


// form
function handleSubmit (event) {
    event.preventDefault();
    console.log("Hola Mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);