const $formEl = document.querySelector('#form');

$formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Hola mundo!!');
});
