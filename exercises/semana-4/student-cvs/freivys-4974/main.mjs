/*
console.log('Successful connection 👍🏻');

function handleSubmit(event) {
  event.preventDefault(); //🍎
  console.log('Hola mundo');
}
const $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
*/

// Humanización de fechas
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

await import('dayjs/locale/es-us.js');

dayjs.locale('es-us');
dayjs.extend(relativeTime);

function fechaTexto(date) {
  const fechaEntrada = dayjs(date);
  const diferenciaFechas = Math.abs(fechaEntrada.diff(dayjs(), 'days'));
  const isYear = fechaEntrada.year() === dayjs().year();
  if (!isYear) {
    return fechaEntrada.format('MMMM DD, YYYY');
  } else if (diferenciaFechas <= 30) {
    return fechaEntrada.fromNow();
  } else {
    return fechaEntrada.format('MMMM DD');
  }
}
/*
console.log(fechaTexto('2023-04-18'));
console.log(fechaTexto('2023-02-25'));
console.log(fechaTexto('2022-03-13'));
console.log(fechaTexto('2021-04-01'));
console.log(fechaTexto('2020-05-25'));
*/
