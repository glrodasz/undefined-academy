import dayjs from "dayjs";
import locale from "dayjs/locale/es.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.locale(locale);
dayjs.extend(relativeTime);

function humanizeDataIfLessThanAMonth(date) {
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

console.log(humanizeDataIfLessThanAMonth(Date.now()));
console.log(humanizeDataIfLessThanAMonth(dayjs().subtract(1, "days")));
console.log(humanizeDataIfLessThanAMonth(dayjs().subtract(31, "days")));
console.log(humanizeDataIfLessThanAMonth(dayjs().subtract(365, "days")));
console.log(humanizeDataIfLessThanAMonth(dayjs().add(31, "days")));
console.log(humanizeDataIfLessThanAMonth(dayjs().add(365, "days")));

/* ****** Extra ****** */
// Script para poder cambiar el tema de oscuro a claro
const storageKey = 'theme-preference';

const onClick = () => {
    theme.value = theme.value === 'light'? 'dark': 'light';

    setPreference();
};

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);

    reflectPreference();
};

const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-color-mode', theme.value);

    document.querySelector('#change-theme-button')?.setAttribute('aria-label', theme.value);
};

const theme = {
    value: getColorPreference(),
};

reflectPreference();

window.onload = () => {
    reflectPreference();

    document.querySelector('#change-theme-button').addEventListener('click', onClick);
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light';

    setPreference();
});

// Script para mostrar el año actual
const year = document.getElementById("year");
let currentYear = new Date().getUTCFullYear();

year.setAttribute("datetime", currentYear);
year.append(currentYear);

// Script para mostrar contenidos según la etiqueta seleccionada
const filterButtons = document.querySelectorAll('.filter-button');
const postsContainer = document.querySelector('.cards-container');
const postCards = document.querySelector('.post-cards');
const posts = document.querySelectorAll('.post');

// Añadir evento click a los botones de filtrado
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtener el valor del botón de filtro
        const filterValue = button.getAttribute('data-filter');

        // Crear una variable para verificar si se encontraron posts
        let postsFound = false;

        // Iterar a través de cada post
        posts.forEach((post) => {
            // Obtener todas las etiquetas del post
            const postTags = post.querySelectorAll('.tag');

            // Crear una variable para verificar si el post coincide con el filtro
            let postMatchesFilter = false;

            // Iterar a través de cada etiqueta del post
            postTags.forEach((tag) => {
                // Obtener el valor de la etiqueta
                const tagValue = tag.getAttribute('data-tag');

                // Verificar si la etiqueta coincide con el filtro
                if (tagValue === filterValue || filterValue === 'all') {
                    postMatchesFilter = true;
                }
            });

            // Mostrar u ocultar el post según si coincide con el filtro
            if (postMatchesFilter) {
                post.style.display = '';
                postsFound = true;
            } else {
                post.style.display = 'none';
            }
        });

        // Mostrar el mensaje de error si no se encontraron posts
        if (!postsFound) {
            // Eliminar el mensaje de error anterior si existe
            const errorMessage = postsContainer.querySelector('.error-message');

            if (errorMessage) {
                postsContainer.removeChild(errorMessage);
            }

            // Crear un nuevo mensaje de error y agregarlo al contenedor de posts
            const newErrorMessage = document.createElement('p');
            newErrorMessage.classList.add('error-message');
            newErrorMessage.textContent = 'No se encontraron posts que coincidan con esta etiqueta.';
            postsContainer.appendChild(newErrorMessage);
        } else {
            // Si se encontraron posts, eliminar cualquier mensaje de error existente
            const errorMessage = postsContainer.querySelector('.error-message');

            if (errorMessage) {
                postsContainer.removeChild(errorMessage);
            }
        }

        // Cambiar la clase activa del botón de filtro
        filterButtons.forEach((button) => {
            button.classList.remove('active');
        });

        button.classList.add('active');
    });
});

// Script para mostrar los elementos según la búsqueda
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('search');

if (searchInput) {
    searchInput.addEventListener('keyup', function(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
        const searchTerm = searchInput.value.toLowerCase();
    
        posts.forEach(function(post) {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const description = post.querySelector('.post-description').textContent.toLowerCase();
    
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    });
    
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            posts.forEach(function(post) {
                post.classList.remove('hidden');
            });
        }
    });
}