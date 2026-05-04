//Código para realizar la validación de la etiqueta <select>

//defino una variable "form" a la cual le asigno el valor de mi formulario, mediante su id 'contact-form'
const form = document.getElementById('contact-form'); 

//defino otra variable "country" a la cual le asigno el valor de mi etiqueta <select>, mediante su id 'country'
const country = document.getElementById('country'); 

//le defino a 'country' un mensaje de validación personalizado que indicará que inicialmente tendrá un error (debe seleccionar un país)
country.setCustomValidity('El pais es obligatorio'); 

//ejecuto la validación para que se lance un error si no se cambia el país
country.checkValidity();

//le asigno a formulario un evento de "escucha" para que el navegador esté atento cuando el usuario presione el botón 'enviar' (evento submit)
form.addEventListener('submit', function(e) {
    //verifico si el formulario tiene algún valor por defecto asignado, de ser así, se cancela el submit
    e.preventDefault();
    //si llegamos a esta línea, no hay valor por defecto, se utiliza el reset para limpiar los datos del formulario
    form.reset();
});

//le asigno a 'country' un evento de escucha para saber si ha cambiado su valor
country.addEventListener('change', function() { 
    //como ya el usuario habrá cambiado el valor de country, entonces elimino el error en la validación
    country.setCustomValidity('');
    //se comprueba que no tenga error 
    country.checkValidity();
});