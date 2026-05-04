import dayjs from "dayjs";
import locale from "dayjs/locale/es.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.locale(locale);
dayjs.extend(relativeTime);

export function humanizeDate(date) {
    // Pasar la fecha a formato dayjs
    const dayjsDate = dayjs(date);

    // Devuelve la diferencia respecto a la fecha actual en días. Además, se hace uso de Math.abs para devolver el valor absoluto de la diferencia de días, ya que puede dar negativos si son fechas pasadas
    const daysDifference = Math.abs(dayjsDate.diff(Date.now(), "days"));

    // Verificar que el año de la fecha es igual al actual
    const isCurrentYear = dayjsDate.year() === new Date().getFullYear();

    if (!isCurrentYear) {
        // Si el año no es el actual, se muestra la fecha completa formateada por: "[Nombre mes completo] [día en valor númerico], [año valor completo]"
        return dayjsDate.format("MMMM DD, YYYY");
    } else if (daysDifference <= 31) {
        // Si la fecha es menor a un mes, se muestra la fecha "humanizada", es decir, con texto tal que así: "Hace x minutos"; "Hace x días" ...
        return dayjsDate.fromNow();
    } else {
        // Si la fecha es mayor a un mes, sólo se muestra el mes por nombre completo y el día
        return dayjsDate.format("MMMM DD");
    }
}