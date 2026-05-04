// function to humanize dates.

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
await import("dayjs/locale/es-us.js") 

dayjs.locale("es-us");
dayjs.extend(relativeTime)


function whatIsTheDate(date) {
    const userInput = dayjs(date)
    const diff = Math.abs(userInput.diff(Date.now(), "days"));
    const diff2 = Math.abs(userInput.diff(date, "days"));

    console.log(diff)

    const sameYear = userInput.year() === new Date().getFullYear();

    if(!sameYear) {
        return userInput.format("MMMM DD, YYYY")
    } else if(diff <= 30) {
        return userInput.fromNow();
    }
    else {
        return userInput.format("MMMM DD")
    }
}

// function to show in the blog the humanized date.

let timeTags = document.querySelectorAll("time");
  timeTags.forEach((timeTag) => {
  let date = timeTag.getAttribute("datetime");
  let convertedDate = whatIsTheDate(dayjs(date));
  timeTag.innerText = convertedDate;
});