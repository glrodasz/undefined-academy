import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);

//* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

document.getElementById("myIcon").addEventListener("click", myFunction);

function myFunction() {
    let respomenu = document.getElementById("myTopnav");
    respomenu.classList.toggle("responsive");
}

// function to prevent default behavior and reset form
const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Hello World");
    document.querySelector("#contact-form").reset();
    alert(" ✅ Form sent successfully!");
});


// function to make dates more readable to human beings
function humanize(date) {

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
    element.innerHTML = `GRADUATION DATE: <br> ${readDate}`;
  });

