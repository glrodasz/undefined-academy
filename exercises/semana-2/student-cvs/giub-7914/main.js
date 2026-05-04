// alert('esto es un alert')
$(document).ready(function(){
    $("form").submit(function(evento){
        getFormData();
        evento.preventDefault()
    })
})