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

// Script formulario
const $form = document.querySelector('form');
const birthday = document.getElementById('birthday');

function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo");
}

if (birthday) {
    birthday.max = new Date().toISOString().split("T")[0];
}

if ($form) {
    $form.addEventListener('submit', handleSubmit);
}