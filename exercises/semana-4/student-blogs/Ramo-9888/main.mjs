import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"
await import("dayjs/locale/es-us.js")
import utc from "dayjs/plugin/utc.js"
dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.locale("es-us")

//***humaniza***//


//console.log(dayjs("2023-05-06"))


function humanize(date){
  const wrappedDate = dayjs(date)
  const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"))
  
  const isCurrentYear = wrappedDate.year() === new Date().getFullYear()
    if(!isCurrentYear){
        return wrappedDate.format('MMMM DD, YYYY')
    } else if (daysDiff <= 30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format('MMMM DD')
    }
}

function humanizeDate($date) {
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime);
    $date.textContent = capitalize(humanizedDate);
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }


  const $dates = document.querySelectorAll("time");
$dates.forEach(humanizeDate)
