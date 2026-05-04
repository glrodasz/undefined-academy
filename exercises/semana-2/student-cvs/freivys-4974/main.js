console.log('Successful connection');

const $form = document.querySelector('form');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('No data sent');
});
