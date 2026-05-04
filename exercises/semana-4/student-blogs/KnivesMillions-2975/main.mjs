import dayjs from "dayjs"

import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/en.js")

dayjs.locale("en")
dayjs.extend(relativeTime)

function humanize(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear()

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY")
    } else if(daysDiff <= 30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function humanizeDate ($date) {
    const datetime = $date.getAttribute("datetime")
    const humanizedDate = humanize(datetime)
    $date.textContent = capitalize(humanizedDate)
}

const $dates = document.querySelectorAll("time")
$dates.forEach(humanizeDate)

// Menu Behavior

_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
}
_items.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
}
