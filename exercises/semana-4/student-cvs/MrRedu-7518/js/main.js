import dayjs from "dayjs"

import utc from "dayjs/plugin/utc.js"
import relativeTime from "dayjs/plugin/relativeTime.js"
import es from "dayjs/locale/es.js";

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.locale("es");


// Variables con fechas, para no tener que escribirlas en el ejercicio
const today = dayjs()
const fiveYearAgo = dayjs("2018-04-25")
const treeWeeksAgo = dayjs("2023-04-03")
const twoMonthsAgo = dayjs("2023-02-25")
const oneDayAgo = dayjs("2023-04-24")

// // // // // // // // // / // // / // // //
// El ejercicio que yo pude hacer:         //
// function humanizarFecha1 (date){        //
//     console.log(dayjs(date).fromNow())  //
// }                                       //
// humanizarFecha1(twoMonthsAgo)           //
// // // // // // // // // / // // / // // //

function humanizarFecha (date) {
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear()

    if (!isCurrentYear){
        return wrappedDate.format("MMMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}
console.log(humanizarFecha(treeWeeksAgo))