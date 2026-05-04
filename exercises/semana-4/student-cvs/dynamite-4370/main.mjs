import { entries } from "./data/post.mjs";
import { humanizeDate, tagsIterations } from "./helpers/index.js";

// Minipulacion del DOM - Evento Menu Desplegable
const $form = document.querySelector("form");
$form.addEventListener("submit", handleSubmit);
const buttonOpen = document.querySelector("#button-open");
const buttonClosed = document.querySelector("#button-closed"); 
const mobileMenu = document.querySelector("#mobile-menu");

buttonOpen.addEventListener("click", toggleMenu);
buttonClosed.addEventListener("click", toggleMenu);

function handleSubmit(event) {
    event.preventDefault(); //
    console.log("Hola mundo");
}

function toggleMenu() {
    mobileMenu.classList.remove('inactive');
    mobileMenu.classList.add('navbar-transparent');
    mobileMenu.classList.toggle('show-navbar');
}

//  Minipulacion del DOM - Evento Llenar Posts
const postsContainer = document.querySelector('#posts');

entries.forEach((entry) => {

    const {titulo, descripcion, fecha, tags} =entry;
    const etiquetas = tagsIterations(tags);

    const post = document.createElement('article');
    post.classList.add('blog-card');
    post.innerHTML = `
        <div class="post-image">
            <img class="image" alt="imagen" src="https://source.unsplash.com/uppjafUWPj8">
        </div>
        <div class="post-principal">
            <div class="post-readtime">
                <span>${humanizeDate(fecha)}</span>
            </div>
            <div class="post-info">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
            <div class="post-tags">
                ${etiquetas}
            </div>
            <div class="post-button">
                <button>Ver mas</button>
            </div>
        </div>
    `;

    postsContainer.appendChild(post);
});