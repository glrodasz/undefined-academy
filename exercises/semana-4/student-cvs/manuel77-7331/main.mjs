import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/es-us.js")

dayjs.locale("es-us")
dayjs.extend(relativeTime)

function dateToStr(date){
    const dateIn = dayjs(date);
    const dateDiff= Math.abs(dateIn.diff(dayjs(),"days"));
    const isYear = dateIn.year() === dayjs().year();
    if (!isYear){
        return dateIn.format("MMMM DD, YYYY")
    }else if (dateDiff <= 30){
        return dateIn.fromNow();
    }else{
    return dateIn.format("MMMM DD")
    }
}

document.getElementById("date").innerHTML = dateToStr("2015-06-01")

function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Hola mundo");
}
const $form =
document.querySelector("form");
$form.addEventListener("submit",handleSubmit);