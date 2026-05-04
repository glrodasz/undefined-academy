import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import realtivetime from "dayjs/plugin/relativeTime.js";

dayjs.extend(utc);
dayjs.extend(realtivetime);





function humanize(date){
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.year() === new Date().getFullYear;

    if (!isCurrentYear){
        return wrappedDate.format("MM DD, YYYY");
    } else if (daysDiff <= 30){
      
        return wrappedDate.fromNow();
    } else {
        return wrappedDate.format("MM DD")
    }



}
