import humanizarFecha from "./scripts/humanizar_fechas";
function humanizarFechas ($dates, i) {
    const datetime = $dates.getAttribute("datetime");
    const humanizedDate = humanizarFecha(datetime)
    $dates.textContent = humanizedDate;
    console.log(humanizedDate)
}
const $dates = document.querySelectorAll("time");
$dates.forEach(humanizarFechas); 
