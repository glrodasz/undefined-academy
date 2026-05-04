import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
await import("dayjs/locale/es-us.js") 

dayjs.locale("es-us");
dayjs.extend(relativeTime)


function whichIsTheDate(date) {
    const userInput = dayjs(date)
    const diffs = Math.abs(userInput.diff(Date.now(), "days"));

    const sameYear = userInput.year() === new Date().getFullYear();

    if(!sameYear) {
        return userInput.format("MMMM DD, YYYY")
    } else if(diffs <= 30) {
        return userInput.fromNow();
    }
    else {
        return userInput.format("MMMM DD")
    }    
}