const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/es');
dayjs.locale('es');

dayjs.extend(relativeTime);

function humanizarFecha(fecha) {
  const ahora = dayjs();
  const fechaObj = dayjs(fecha);
  const diff = ahora.diff(fechaObj, 'days');

  if (diff < 7) {
    return fechaObj.fromNow();
    } 
    else if (diff < 30) {
      const numSemanas = Math.floor(diff / 7);
      const restoDias = diff % 7;
    return `hace ${numSemanas} semanas y ${restoDias} días`;}
    else if (fechaObj.year() === ahora.year()) {
    return fechaObj.format('MMMM D');
    } 
    else {
    return fechaObj.format('MMMM D, YYYY');
  }
}

console.log(humanizarFecha('2023-03-24')); 
console.log(humanizarFecha('2023-03-20'));
console.log(humanizarFecha('2023-03-08'));
console.log(humanizarFecha('2023-01-01'));  
console.log(humanizarFecha('1996-02-04'));

