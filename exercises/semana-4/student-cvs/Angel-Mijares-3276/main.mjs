import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
await import("dayjs/locale/es-us.js")
dayjs.locale("es-us")
dayjs.extend(relativeTime)

// console.log(dayjs().format())

function fechaescrita(date) {
    const Entrada = dayjs(date)
    const Diferencia = Math.abs(Entrada.diff(Date.now(), "days"));

    const CurrentlyYear = Entrada.year() === new Date().getFullYear();

    if(!CurrentlyYear) {
        return Entrada.format("MM-DD-YYYY")
    } else if(Diferencia <= 30){
        return Entrada.fromNow();
    } else {
        return Entrada.format("MM-DD")
    }
}

console.log(fechaescrita(new Date('2023/04/16')));

console.log(fechaescrita(new Date().now));


// FORM

function handleSubmit(event) {
    event.preventDefault();
    !console.log("Hola mundo");
  }
  const $form = document.querySelector("form");
  $form.addEventListener("submit", handleSubmit);