import dayjs from "dayjs"
await import ('dayjs/locale/es-us.js')
dayjs.locale('es-us')

function humanizeDate(dateContent){
    const today = dayjs();
    const newDate = dayjs(dateContent);
    const diferenceDates = today.diff(newDate, "month");
    const weeks = today.diff(newDate, "week");
    const days = today.diff(newDate, "day");
    const hours = today.diff(newDate, "hour");
    const minutes = today.diff(newDate, "minute");
    const seconds = today.diff(newDate, "second");


    if (diferenceDates < 1){
        if (seconds < 60){
            return `Hace ${seconds} segundos`;

        }

        else if (minutes < 60){
            return `Hace ${minutes} minutos`;
        }

        else if (hours < 24){
            return `Hace ${hours} horas`;
        }

        else if (days < 7){
            return `Hace ${days} días`;

        }

        else {
            return `Hace ${weeks} semanas`;

        }
    }
    else if (diferenceDates < 12) {
        return newDate.format("MMMM D");
    }

    else {
        return newDate.format("MMMM D, YYYY");
    }  
}

const receivedDate = document.querySelectorAll(".dates");
receivedDate.forEach(time => {
    const datesTransform = humanizeDate(time.textContent);
    time.textContent = datesTransform;
})
