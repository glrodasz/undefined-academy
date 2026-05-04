import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
//await import('dayjs/locale/es.js'); // opcional, para usar el idioma español
//dayjs.locale('es');
dayjs.extend(relativeTime);

function humanizeDate(date) {
    const now = dayjs();
    const diff = now.diff(date, 'days');
    
    if (diff < 30) {
        return date.fromNow();
    } else if (date.year() === now.year()) {
        return date.format('MMMM D');
    } else {
        return date.format('MMMM D, YYYY');
    }
}

const $liTechnology = document.getElementById('technology');
const $liEngineering = document.getElementById('engineering');
const $liTechnical = document.getElementById('technical');
const $liDeveloper = document.getElementById('developer');
const $liAnalysis = document.getElementById('analysis');
const $pAuthorRight = document.getElementById('authorRight');
$liTechnology.innerHTML = humanizeDate(dayjs('2022-07-10'));
$liEngineering.innerHTML = humanizeDate(dayjs('2018-10-10'));
$liTechnical.innerHTML = humanizeDate(dayjs('2010-12-01'));
$liDeveloper.innerHTML = `${humanizeDate(dayjs('2020-10-10'))} - Present`;
$liAnalysis.innerHTML = `${humanizeDate(dayjs('2018-07-01'))} - ${humanizeDate(dayjs('2020-10-08'))}`;
$pAuthorRight.innerHTML = `&copy; ${dayjs().year()} Jorge Alexander Ardila Restrepo.`;



/**
 * EJERCICIO CON LODASH
 */
import _ from "lodash"

const entries = [
    {
        titulo: "Introducción a HTML5",
        descripcion:
            "En este artículo se explica qué es HTML5 y cómo funciona. También se detallan las principales novedades y mejoras respecto a HTML4.",
        fecha: "2022-01-15",
        autor: "Juan Pérez",
        tags: ["HTML5", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo diseñar una web responsive",
        descripcion:
            "En este artículo se explican las claves para diseñar una web responsive, es decir, que se adapte a diferentes tamaños de pantalla. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-02-02",
        autor: "María García",
        tags: ["Responsive Design", "Web", "Diseño"],
    },
    {
        titulo: "Introducción a CSS3",
        descripcion:
            "En este artículo se explica qué es CSS3 y cómo funciona. También se detallan las principales novedades y mejoras respecto a CSS2.",
        fecha: "2022-02-15",
        autor: "Pedro González",
        tags: ["CSS3", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo optimizar el rendimiento de una web",
        descripcion:
            "En este artículo se explican las claves para optimizar el rendimiento de una web, es decir, para que cargue más rápido y sea más eficiente. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-03-02",
        autor: "Ana Rodríguez",
        tags: ["Optimización", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo crear una página web desde cero",
        descripcion:
            "En este artículo se explican los pasos para crear una página web desde cero, desde la elección del nombre de dominio hasta la publicación en Internet. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-03-15",
        autor: "Juan Pérez",
        tags: ["Web", "Desarrollo"],
    },
    {
        titulo: "Cómo usar jQuery en una web",
        descripcion:
            "En este artículo se explica qué es jQuery y cómo se puede utilizar en una web para añadir interactividad y dinamismo. Se detallan los principales métodos y funciones.",
        fecha: "2022-04-02",
        autor: "María García",
        tags: ["jQuery", "Web", "Desarrollo"],
    },
    {
        titulo: "Cómo crear un diseño atractivo para una web",
        descripcion:
            "En este artículo se explican las claves para crear un diseño atractivo y efectivo para una web, desde la elección de colores hasta la disposición de los elementos. Se detallan las herramientas y técnicas más útiles.",
        fecha: "2022-04-15",
        autor: "Pedro González",
        tags: ["Diseño", "Web", "Desarrollo"],
    },
];

/*semana 4, clase 1
Utiliza los métodos de Lodash para Filtrar las entradas que tenga el
tag de Desarrollo , Mapea por titulo y Agrupa por autor.*/

const filterByDevelopmentTag = _.filter(entries, entry => _.includes(entry.tags, "Desarrollo"));
const groupByAuthor = _.groupBy(filterByDevelopmentTag, "autor");
const titleByAuthor = _.mapValues(groupByAuthor, function (entries) {
    return _.map(entries, "titulo");
});

console.log("Ejercicio con lodash:\n", titleByAuthor);