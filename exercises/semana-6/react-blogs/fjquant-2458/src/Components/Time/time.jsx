import React from 'react'

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime.js"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
import es from "dayjs/locale/es.js"

dayjs.locale("es")
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

function humanizar(fecha) {
    const incognita = dayjs(fecha)
    const daysdiff = Math.abs(incognita.diff(Date.now(), "days"));

    const añoEnCurso = incognita.year() === new Date().getFullYear();

    if (!añoEnCurso) {
        return incognita.format("MMMM DD, YYYY")
    } else if (daysdiff >= 30) {
        return incognita.format("MMMM DD")
    } else {
        return incognita.fromNow()
    }
}

let $timeTags = document.querySelectorAll('time')
$timeTags.forEach(timeTag => {
    let fecha = timeTag.getAttribute('datetime')
    let humanDate = humanizar(fecha)

    timeTag.innerText = humanDate
})

const time = ({fecha}) =>{
  return (
    <time datetime={fecha}>humanizar(fecha)</time>
  )
}

export default time