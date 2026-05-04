import dayjs from "dayjs"
   import realtiveTime from "dayjs/plugin/relativeTime.js"
   await import("dayjs/locale/es-us.js");

   dayjs.locale("es-us");
   dayjs.extend(realtiveTime);

function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
   }
   const $form = document.querySelector("form");
   $form.addEventListener("submit",handleSubmit);


function humanize(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
   
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();
       
    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY");
    } else if(daysDiff <= 30) {
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM");
    }
}
   
const $date = document.querySelector("time");
   
$date.textContent = humanize("2023-04-17");   