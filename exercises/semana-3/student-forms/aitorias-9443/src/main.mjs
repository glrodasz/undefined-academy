/**
* Created by: Aitorias | https://github.com/aitorias
* Date: 03-10-2023
* Version: 1.0
*/

// Constants
const html = document.querySelector('html');
const changeModeButton = document.getElementById('change-scheme');
const headerElement = document.getElementById('header');
const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('toggle-menu');
const backToTopButton = document.getElementById("back-to-top-btn");

// Script para poder cambiar el tema de oscuro a claro

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

changeModeButton.addEventListener('click', function() {
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
});

// Script para menú en móvil
menuButton.addEventListener('click', function() {
    navbar.classList.toggle('hidden');
});

html.addEventListener('click', function(e) {
    if (e.target !== menuButton && !navbar.classList.contains('hidden')) {
        navbar.classList.add('hidden');
    }
});



// Botón para volver al inicio de la página
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.opacity = 1;
    } else {
        backToTopButton.style.opacity = null;
    }
}

window.onscroll = function () {
    scrollFunction();
};

backToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Script para mostrar el año actual
const year = document.getElementById('year');
let currentYear = new Date().getUTCFullYear();

year.setAttribute('datetime', currentYear);
year.append(currentYear);

// Scroll effects
function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
        addObserver(el, options);
    });
}

function addObserver(el, options){
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el);
        } else {
            entry.target.classList.add('active');
        }

        return;
    }

    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el);
                } else {
                    entry.target.classList.add('active');
                }

                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(el);
}

scrollTrigger('.scroll-reveal', {
    rootMargin: '-80px',
});