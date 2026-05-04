import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js");

dayjs.locale("es-us");
dayjs.extend(relativeTime);


const smalls = document.querySelectorAll(".small");

smalls.forEach((small) => {
    const randomDate = getRandomDate();
    small.innerHTML = humanize(randomDate) + "";
})

//HUMANIZE METHODS
function humanize(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.isSame(Date.now(), "year");

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY");
    }else if(daysDiff<=30){
        return wrappedDate.fromNow();
    }else{
        return wrappedDate.format("MMMM DD");
    }
}

//Random Date

function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

