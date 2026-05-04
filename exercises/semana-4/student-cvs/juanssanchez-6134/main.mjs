import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanizeDate(date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear()

    if (!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY")
    } else if (daysDiff<=30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}

// console.log(humanizeDate(Date.now()))
// console.log(humanizeDate(dayjs().subtract(10, "days")))
// console.log(humanizeDate(dayjs().subtract(60, "days")))
// console.log(humanizeDate(dayjs().subtract(500, "days")))
// console.log(humanizeDate(dayjs().add(300, "days")))
