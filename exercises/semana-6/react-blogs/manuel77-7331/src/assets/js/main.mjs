import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"

await import("dayjs/locale/en.js")

dayjs.locale("en")
dayjs.extend(relativeTime)

export function DateToStr(date){
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
