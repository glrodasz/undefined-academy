import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
dayjs.locale('es');

dayjs.extend(relativeTime);

export default function humanizarFecha(date) {
  const ahora = dayjs();
  const fechaObj = dayjs(date);
  const diff = ahora.diff(fechaObj, 'days');

  if (diff < 7) {
    return fechaObj.fromNow();
  } 
  else if (diff < 30) {
    const numSemanas = Math.floor(diff / 7);
    const restoDias = diff % 7;
    return `Hace ${numSemanas} semanas y ${restoDias} días`;
  }
  else if (fechaObj.year() === ahora.year()) {
    const fechaFormateada = fechaObj.format('MMMM D');
    return fechaFormateada.replace(/^\w/, (c) => c.toUpperCase());
  } 
  else {
    const fechaFormateada = fechaObj.format('MMMM D, YYYY');
    return fechaFormateada.replace(/^\w/, (c) => c.toUpperCase());
  }
}