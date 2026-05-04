//Crear una función que recibiendo una fecha, retorne "publicado hace __ días". Si la fecha coincide con el día de hoy
//entonces retornonará "publicado hoy"

function daysUntilNow(date){
    const dateInput = new Date(date)
    const dateToday = new Date()
    const ONE_DAY_IN_MILISECONDS = 24*60*60*1000
    const days = Math.floor((dateToday.getTime()-dateInput.getTime())/ONE_DAY_IN_MILISECONDS)
    if(days > 1){
        return `Publicado hace ${days} días`
    }else if(days==1){
        return `Publicado hace ${days} día`
    }else{
        return `Publicado hoy`
    }
}

export default daysUntilNow