import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(relativeTime);
dayjs.extend(duration);

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

const postDates = document.querySelectorAll('.post-date');
postDates.forEach((date) => {
  const humanDate = humanize(date.textContent);
  date.textContent = humanDate;
});
