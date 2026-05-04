import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function humanizeDate(date) {
    const dayjsDate = dayjs(date)
    const daysDiff = Math.abs(dayjsDate.diff(Date.now(), "days"))

    const isCurrentYear = dayjsDate.year() === new Date().getFullYear()


    if (!isCurrentYear) {
        return dayjsDate.format("MMMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return dayjsDate.fromNow()
    } else {
        return dayjsDate.format("MMMM DD")
    }
}

const dates = document.querySelectorAll('.date');
dates.forEach((date) => {
    const humanDate = humanizeDate(date.textContent);
    date.textContent = humanDate;
});

// console.log(humanizeDate(Date.now()))
// console.log(humanizeDate(dayjs().subtract(10, "days")))
// console.log(humanizeDate(dayjs().subtract(60, "days")))
// console.log(humanizeDate(dayjs().subtract(500, "days")))
// console.log(humanizeDate(dayjs().add(300, "days")))
