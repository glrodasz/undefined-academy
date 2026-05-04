// main.mjs

const $input = document.querySelector('input[type=text]')
const $textArea = document.querySelector('textarea')

const $clearBtn = document.getElementById('clear')

$clearBtn.addEventListener('click', () => {
  $input.value = ''
  $textArea.value = ''
})

const $form = document.querySelector('form')

$form.addEventListener('submit', function (event) {
  event.preventDefault()
  alert('Thank you for sharing!')
})