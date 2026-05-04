import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import relativeTime from "dayjs/plugin/relativeTime.js"
import weekday from "dayjs/plugin/weekday.js"
await import("dayjs/locale/es-us.js")

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(weekday)
dayjs.locale("es-us")

const fecha = dayjs("2023-02-30")
const fechaHoy = dayjs()

function humanizarFecha(fecha) {
  if (fechaHoy.get("year") != fecha.get("year")) {
    return fecha.format("MMMM, DD YYYY")
  } else if (fechaHoy.diff(fecha, "month") == 0) {
    return fecha.fromNow()
  } else if (fechaHoy.diff(fecha, "month") > 0) {
    return fecha.format("MMMM DD")
  }
}

const elements = document.querySelectorAll('time.date-post');
for (let i = 0; i < elements.length ;i++) {
  const fecha = elements[i].getAttribute('datetime');
  elements[i].innerHTML = humanizarFecha(dayjs(fecha))
}
