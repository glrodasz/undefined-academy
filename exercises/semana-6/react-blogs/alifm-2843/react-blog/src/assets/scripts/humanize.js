import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

// function to make dates more readable to human beings
export function humanize(date) {

    const formattedDate = dayjs(date)
    const timeDiff = Math.abs(formattedDate.diff(Date.now(), 'months'))

    if (timeDiff <= 1) {
        return  `${formattedDate.fromNow()}`

    } else if (timeDiff > 1 && timeDiff < 13) {
        return `${formattedDate.format("MMMM DD")}`

    } else {
        return `${formattedDate.format("MMMM DD, YYYY"), formattedDate.fromNow()}`
    }
}

const $cardDates = document.querySelectorAll(".dates");

  $cardDates.forEach(element => {
    const readDate = humanize(element.getAttribute("datetime"));
    element.innerHTML = `${readDate}`;
  });

