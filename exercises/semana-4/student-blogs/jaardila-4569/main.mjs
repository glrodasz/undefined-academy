import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import('dayjs/locale/es.js'); // opcional, para usar el idioma español
dayjs.locale('es');
dayjs.extend(relativeTime);

function humanizeDate(date) {
    const now = dayjs();
    const diff = now.diff(date, 'days');
    
    if (diff < 30) {
        return date.fromNow();
    } else if (date.year() === now.year()) {
        return date.format('MMMM D');
    } else {
        return date.format('MMMM D, YYYY');
    }
}

const elements = document.querySelectorAll('time.card_time');

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];  
  const datetime = element.getAttribute('datetime');  
  element.innerHTML = humanizeDate(dayjs(datetime));
}
