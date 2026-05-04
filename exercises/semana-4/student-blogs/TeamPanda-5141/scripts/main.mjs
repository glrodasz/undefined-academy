import humanizarFecha from "./utils/humanize.js";

let $postDates = document.querySelectorAll("time")

$postDates.forEach(postDate=>{
    let date = postDate.getAttribute('datetime')
    let humanizeDate= humanizarFecha(date)
  
    postDate.innerText= `Publicado: ` + humanizeDate;
})


/* console.log(humanizarFecha("10-01-2023")) */
