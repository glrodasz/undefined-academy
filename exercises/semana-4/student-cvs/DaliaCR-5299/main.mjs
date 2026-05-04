import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function fechaatexto(date){
    const fechaEntrada = dayjs(date);
    const diferenciaFechas= Math.abs(fechaEntrada.diff(dayjs(),"days"));
    const isYear = fechaEntrada.year() === dayjs().year();
    if (!isYear){
        return fechaEntrada.format("MMMM DD, YYYY")
    }else if (diferenciaFechas <= 30){
        return fechaEntrada.fromNow();
    }else{
    return fechaEntrada.format("MMMM DD")
    }
}

document.getElementById("date").innerHTML = fechaatexto("2011-08-01")

function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hola mundo");
}
const $form =
document.querySelector("form");
$form.addEventListener("submit",handleSubmit);