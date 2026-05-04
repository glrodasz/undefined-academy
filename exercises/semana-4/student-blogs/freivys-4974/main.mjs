/*
console.log('Successful connection 👍🏻');

function handleSubmit(event) {
  event.preventDefault(); //🍎
  console.log('Hola mundo');
}
const $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
// */
//
// Humanización de fechas
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

await import('dayjs/locale/es');

dayjs.locale('es');
dayjs.extend(relativeTime);

function fechaTexto(date) {
  const fechaEntrada = dayjs(date);
  const diferenciaFechas = Math.abs(fechaEntrada.diff(dayjs(), 'days'));
  const isYear = fechaEntrada.year() === dayjs().year();
  const today = dayjs();

  if (fechaEntrada.year() !== today.year()) {
    return fechaEntrada.format('MMMM DD, YYYY');
  } else if (diferenciaFechas <= 30) {
    return fechaEntrada.fromNow();
  } else {
    return fechaEntrada.format('MMMM DD');
  }
}

const $dates = document.querySelectorAll('time');

$dates.forEach((date) => {
  date.innerHTML = fechaTexto(date.dateTime);
});
//
// console.log(fechaTexto('2023-04-18'));
// console.log(fechaTexto('2023-02-25'));
// console.log(fechaTexto('2022-03-13'));
// console.log(fechaTexto('2021-04-01'));
// console.log(fechaTexto('2020-05-25'));
