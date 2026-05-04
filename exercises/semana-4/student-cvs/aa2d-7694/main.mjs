//Humanizar fechas
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import locale from "dayjs/locale/es.js"

dayjs.extend(relativeTime)
dayjs.locale(locale)

function humanizarFechas(d) {
    const date = dayjs(d)
    return dayjs(date).toNow()
}

const date = "Realizado: " + humanizarFechas("2023-03-02")
document.getElementById("date").innerHTML = date

//Evitar el envio del formulario
function handleSumit(event){
    event.preventDefault()
    console.log("Hola Mundo")
}

const $form = document.querySelector("form")
$form.addEventListener("submit", handleSumit)