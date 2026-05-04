import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import "dayjs/locale/es.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.locale("es")
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

let añoActual = dayjs().year()
let anyDate =  "13-07-2024"

export default function humanizarFecha(fecha) {
	let fechas = dayjs(fecha, 'DD-MM-YYYY')
	let diferenciaEnDias = Math.abs(fechas.diff(Date.now(), "days"));
	let esAñoActual = fechas.year()

	if(esAñoActual !== añoActual) {
		return fechas.format("DD MMMM, YYYY")
	} else if(diferenciaEnDias <= 30) {
		return fechas.fromNow();
	} else {
		return fechas.format("DD MMMM")
	}
}

//pruebas
/* console.log(humanizarFecha(dayjs().add(30, "days"))) */
/* console.log(humanizarFecha(anyDate)) */
