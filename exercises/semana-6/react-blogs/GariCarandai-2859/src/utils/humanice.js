import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime.js"
import updateLocale from "dayjs/plugin/updateLocale.js"
import localeObject from "dayjs/locale/es.js"

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.locale(localeObject);//Carga archivo local "es.js" para cambiar el idioma a ES

/* dayjs.updateLocale('es', {// Edición del archivo "es.js" para cambiar las capitales
  months : ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  relativeTime:{future:"En %s",past:"Hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"}
}) */

function humanice(date){
  const fecha = dayjs(date);
  const ahora = dayjs();
  const diferencia = ahora.diff(fecha, "month");//Obtiene la diferencia de fechas por meses
  
  if(diferencia >= 12){// Si la diferencia es igual o mayor a 12 meses (un año)
    return fecha.format('MMMM D, YYYY');

  }else if(diferencia >= 1){// Si la diferencia es igual o mayor a un mes
    return fecha.format('MMMM D');

  }else if(diferencia < 1){// Si la diferencia es menor a un mes
    return fecha.fromNow();
  }
}

export default humanice;