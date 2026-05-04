import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import utc from 'dayjs/plugin/utc.js';
dayjs.extend(relativeTime);
dayjs.extend(utc);

// My Version
const humanDate = (date) => {
  const TODAY = dayjs();
  const MONTH_BEFORE_NOW = TODAY.subtract(1, 'month').valueOf();
  const wrappedDate = dayjs(date);
  if (wrappedDate.year() != TODAY.year()) {
    return wrappedDate.format('MMMM DD, YYYY');
  }

  if (
    wrappedDate.valueOf() < MONTH_BEFORE_NOW.valueOf() ||
    wrappedDate.valueOf() > TODAY.valueOf()
  ) {
    return wrappedDate.format('MMMM DD');
  }

  return wrappedDate.fromNow();
};

// Guille Version
function humanize(date) {
  const wrappedDate = dayjs(date);
  const daysDiff = Math.abs(wrappedDate.diff(dayjs(), 'days'));

  const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

  if (!isCurrentYear) {
    return wrappedDate.format('MMMM DD, YYYY');
  }

  if (daysDiff <= 30) {
    return wrappedDate.fromNow();
  }

  return wrappedDate.format('MMMM DD');
}
