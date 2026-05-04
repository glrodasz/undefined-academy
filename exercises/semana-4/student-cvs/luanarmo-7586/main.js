import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import utc from "dayjs/plugin/utc";
await import("dayjs/locale/en.js");

dayjs.locale("en-us");
dayjs.extend(relativeTime);
dayjs.extend(utc);

function humanizeDate(date) {

    const old_date = dayjs(date).locale('es')
    const today = dayjs().utc()
    
    if(today.diff(old_date, 'year')) {
        return old_date.format("MMMM DD, YYYY")
    }else if(today.diff(old_date, 'month'))  {
        return old_date.format("MMMM DD")
    }else {
        return old_date.fromNow()
    }
}

function handleSubmit(event) {
    event.preventDefault(); // 🍎
    console.log("Hola mundo");
}

const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);

const $date = document.querySelector("#birth");
$date.textContent = humanizeDate("01/05/1997")