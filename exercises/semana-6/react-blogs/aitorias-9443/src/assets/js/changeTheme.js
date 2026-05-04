// Script para poder cambiar el tema de oscuro a claro
export function changeTheme() {
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
}