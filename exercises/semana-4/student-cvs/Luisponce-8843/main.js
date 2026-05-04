import humanize from "./utils/humanize.mjs";


function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function humanizeDate($date){
    const datetime = $date.getAttribute("datetime");
    const humanizedDate = humanize(datetime);
    $date.textContent = capitalize(humanizedDate);

}

const $dates = document.querySelectorAll("date");
$dates.forEach(humanizeDate)

const $cards = document.querySelectorAll(".card");
console.log($cards);