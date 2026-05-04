import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
import es from "dayjs/locale/es.js";
dayjs.locale(es);

    function humanize(dates){
        const now = dayjs()
    
        if(now.diff(dates, "year") < 1 && now.diff(dates, "month") >= 1){
            return dayjs().format("MMMM DD");
        }
        else if(now.diff(dates, "year") > 1){
            return dayjs().format("MMMM DD, YYYY");
        }
        else{
        return "Publicado " + now.to(dates);
        }
    }
    
    const fechaElement = document.getElementById("fechas");
    const fecha = dayjs("2023-04-01");
    const fechaHumana = humanize(fecha);
    fechaElement.innerHTML = fechaHumana;

    

    function handleSubmit (event){
        event.preventDefault();
        console.log("Hola mundo");
        }
        
        const $form = document.querySelector("form");
        $form.addEventListener("submit", handleSubmit);
    
