

const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset()
  setTimeout(() => {
    location.reload()
    
  }, 2500);
});
