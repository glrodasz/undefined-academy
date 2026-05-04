// import dayjs from "dayjs";  
// import relativeTime from "dayjs/plugin/relativeTime.js"

// await import("dayjs/locale/es-us.js");

// dayjs.locale("es-us")
// dayjs.extend(relativeTime)
// // para poder usar "fromNow"

// console.log(dayjs().format("YYYY-MM-DD"));

// function humanize(date){
//     const wrappedDate = dayjs(date)
//     const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

//     const isCurrentYear = wrappedDate.year() === new Date().getFullYear();

//     if(!isCurrentYear){
//         return wrappedDate.format("MMMM, DD - YYYY");
//     } else if(daysDiff <=30){
//         return wrappedDate.fromNow();
//     } else {
//         return wrappedDate.format("MMMM DD")
//     }
// }
// console.log(humanize(Date.now()));//a few seconds ago
// console.log(humanize(dayjs().subtract(5, "days")));//5 days ago
// console.log(humanize(dayjs().subtract(60, "days")));//January 26
// console.log(humanize(dayjs().subtract(500, "days")));//November, 12 - 2021
// console.log(humanize(dayjs().add(30, "days")));//en un mes
// console.log(humanize(dayjs().add(300, "days")));//January, 21 - 2024