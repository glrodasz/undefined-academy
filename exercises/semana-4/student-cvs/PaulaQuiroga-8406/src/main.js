import humanize from "./utils/humanize.js";

function capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);  
} 

function humanizeDate ($date) {
    const datetime = $date.getAttribute("dateTime"); //3. Por c/ atributo dateTime se humaniza
    const humanizedDate = humanize(datetime); //4. Se humaniza a través del humanize.js
    $date.textContent = capitalize(humanizedDate);
}
const $dates = document.querySelectorAll("time")


$dates.forEach(humanizeDate) 
// El forEach recibe una funcion callback