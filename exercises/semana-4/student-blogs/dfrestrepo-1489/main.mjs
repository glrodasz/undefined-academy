import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import customParseFormat from "dayjs/plugin/customParseFormat"

await import("dayjs/locale/en-au.js")

dayjs.locale("en-au")
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

function toHumanize(date) {
    const wrappedDate = dayjs(date, "DD-MM-YYYY")
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

	const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

	if(!isCurrentYear) {
		return wrappedDate.format("MMMM DD, YYYY")
	} else if(daysDiff <= 30) {
		return wrappedDate.fromNow();
	} else {
		return wrappedDate.format("MMMM DD")
	}
}


  const dates = document.querySelectorAll("time")
    dates.forEach(function(date) {
    
	const datetime = date.getAttribute("datetime")

    console.log("datetime: " + datetime)

	const transformDate = toHumanize(datetime);
	console.log(transformDate)
	date.textContent = transformDate
})