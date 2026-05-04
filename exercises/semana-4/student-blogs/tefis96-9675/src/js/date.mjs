import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from'dayjs/plugin/localizedFormat'
import fortmatDate from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/es'

dayjs.locale('es')
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.extend(fortmatDate)

//Humanizar fechas
function whichDate(date) {
    let userDate = Math.abs(dayjs(date, "YYYY MM DD HH:mm").diff()) / 60000 // Dividimos la diferencia en milisegundos por 60.000 para obtener la diferencia en minutos
    console.log(userDate)
    let datePost = dayjs(date, "YYYY MM DD HH:mm").locale('es')
    console.log(datePost)
    if (userDate < 1 ) {
        let calc = Math.trunc(userDate)
        let time = `Hace segundos`;
        console.log(time)
        return time
    }else if (userDate > 1 && userDate < 60) {
        let calc = Math.trunc(userDate)
        let time = `Hace ${calc} minutos`;
        console.log(time)
        return time
    } else if (userDate >= 60 && userDate <= 1440) { 
        let calc = Math.trunc(userDate / 60)
        let time = `Hace ${calc} horas`
        console.log(time)
        return time
    } else if (userDate >= 1440 && userDate <= 43200) { 
        let calc = Math.trunc(userDate / 1440)
        let time = `Hace ${calc} día`
        console.log(`${time} `)
        return time
    } else if (userDate > 43200 && userDate < 525600) { 
        let time = datePost.format('MMMM-DD').charAt(0).toUpperCase() + datePost.format('MMMM DD').slice(1)
        console.log(` ${time} `)
        return time
    } else if (userDate >= 525600) { 
        let time = datePost.format('MMMM-DD-YYYY').charAt(0).toUpperCase() + datePost.format('MMMM DD YYYY').slice(1)
        console.log(`${time}`)
        return time
    }
}


const post = document.querySelectorAll('.datePostContent');
for (let i = 0; i < post.length ;i++) {
  const date = post[i].getAttribute('datetime');
  post[i].innerHTML = whichDate(date)
}