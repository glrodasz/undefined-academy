let switchDarkLight = document.getElementById('container');
let body = document.querySelector('body');

switchDarkLight.onclick = function() {
    switchDarkLight.classList.toggle('active');
    body.classList.toggle('active');
}
