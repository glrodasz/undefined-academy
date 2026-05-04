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

document.getElementById("date").innerHTML = dateToStr("2023-04-02");
document.getElementById("date2").innerHTML = dateToStr("2023-04-02");
document.getElementById("date3").innerHTML = dateToStr("2023-04-02");
document.getElementById("date4").innerHTML = dateToStr("2023-04-02");
document.getElementById("date5").innerHTML = dateToStr("2023-04-02");