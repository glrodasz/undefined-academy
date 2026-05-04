//el import de dayjs viene de node_modules
//import from "../node_modules/dayjs";
import dayjs from "dayjs";  
import relativeTime from "dayjs/plugin/relativeTime.js"
 
dayjs.extend(relativeTime)
// para poder usar "fromNow"

console.log("Hello world from humanize.js"); 

export default function humanize(date){
    const wrappedDate = dayjs(date)
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

    if(!isCurrentYear){
        return wrappedDate.format("MMMM, DD - YYYY");
    } else if(daysDiff <=30){
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MMMM DD")
    }
}


