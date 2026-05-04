import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(relativeTime);
dayjs.extend(duration);

// Humanize date
const updateDate = document.querySelector('#update-date');
const humanDate = humanize(updateDate.textContent);
updateDate.textContent = humanDate;

function humanize(date) {
  const prevDate = dayjs(date);
  const now = dayjs();
  const diffBtwDates = dayjs.duration(now.diff(prevDate));
  if (diffBtwDates.months() === 0) {
    return dayjs(prevDate).fromNow();
  } else if (dayjs(prevDate).year() === dayjs(now).year()) {
    return dayjs(prevDate).format('MMMM D');
  } else {
    return dayjs(prevDate).format('MMMM D, YYYY');
  }
}

//Avoid the default behavior when submitting the form
const $formEl = document.querySelector('#form');
$formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Hola mundo!!');
});
