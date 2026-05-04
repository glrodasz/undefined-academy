import { entries } from "./data/post.mjs";
import { humanizeDate, tagsIterations } from "./helpers/index.js";

//Llenar Posts
const postsContainer = document.querySelector('#posts');

entries.forEach((entry) => {

    const {titulo, descripcion, fecha, tags} =entry;
    const etiquetas = tagsIterations(tags);

    const post = document.createElement('article');
    post.classList.add('post1');
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