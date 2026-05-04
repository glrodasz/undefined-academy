import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

dayjs.locale('es')
dayjs.extend(relativeTime)

const humanizeDate = ( date ) => {
    const some_date = dayjs(date)
    const today = dayjs()

    const daysBetween = some_date.diff(today, 'days')

    if( some_date.year() !== today.year() ){
        return some_date.format('MMMM DD, YYYY')
    } else if ( daysBetween < -31 ){
        return some_date.format('MMMM DD')
    } else {
        return some_date.fromNow()
    }
}

const date = document.querySelector('#date')

date.innerHTML = humanizeDate(Date.now())