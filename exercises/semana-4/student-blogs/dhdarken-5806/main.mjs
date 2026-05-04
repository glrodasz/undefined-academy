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

document.getElementById("date").innerHTML = fechaatexto("2023-04-02");
document.getElementById("date2").innerHTML = fechaatexto("2023-01-15");
document.getElementById("date3").innerHTML = fechaatexto("2023-02-06");
document.getElementById("date4").innerHTML = fechaatexto("2023-03-02");
document.getElementById("date5").innerHTML = fechaatexto("2023-03-10");