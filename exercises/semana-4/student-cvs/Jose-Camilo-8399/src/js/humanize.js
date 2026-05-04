import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

await import('dayjs/locale/es.js');
dayjs.extend(relativeTime);
dayjs.locale('es');

const date_humanize = (date) => {
   const diff_date = Math.abs(dayjs(date).diff(dayjs(), 'M'));

   if (dayjs(date).year() !== dayjs().year()) {
      return dayjs(date).format('MMMM DD, YYYY');
   } else if (diff_date > 0) {
      return dayjs(date).format('MMMM DD');
   } else {
      return dayjs(date).fromNow();
   }
};

console.log(date_humanize(new Date('2023/03/14')));
console.log(date_humanize(new Date().now));