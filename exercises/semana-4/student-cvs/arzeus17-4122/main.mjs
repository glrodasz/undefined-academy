import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import customParseFormat from "dayjs/plugin/customParseFormat";
import 'dayjs/locale/es';

dayjs.locale("es-us");
dayjs.extend(relativeTime)
dayjs.extend(relativeTime);


function humanize(date) {
    const wrappedDate = dayjs(date, "DD-MM-YYYY");
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), 'days'));  
    const isCurrentYear = wrappedDate.year() === new Date().getFullYear();
  
    if (!isCurrentYear) {
      return wrappedDate.format('MMMM DD, YYYY');
    } else if (daysDiff <= 30) {
      return wrappedDate.fromNow();
    } else {
      return wrappedDate.format('MMMM DD');
  }

}

const dates = document.querySelectorAll("time")
dates.forEach(function(date) {
	// Accede al valor del atributo datetime
	const datetime = date.getAttribute("datetime")
	
	const humanizedDate = humanize(datetime)
	console.log(humanizedDate)
	date.textContent = humanizedDate.charAt(0).toUpperCase() + humanizedDate.slice(1)
})