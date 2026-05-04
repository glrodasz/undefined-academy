function handleSubmit(event) {
  event.preventDefault();
  console.log('Hello World!');
}

document.addEventListener('DOMContentLoaded', () => {
  const $form = document.querySelector('form');
  $form.addEventListener('submit', handleSubmit);
});
