// Esta fue la configuración para prevenir el comportamiento por default del envio del formulario que yo encontré en internet, la que tiene extensión de .mjs, es la que se agrega en el ejercicio de la Semana3-Clase3

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Evita el comportamiento de envío por defecto

    let formData = new FormData(event.target); 
    // Crea un objeto FormData con los datos del formulario

    fetch(event.target.action, { 
        // Envía una solicitud POST al servidor especificado en el atributo action del formulario
        method: 'post',
        body: formData
    }).then(response => {
        // Maneja la respuesta del servidor aquí
        alert("Formulario enviado");
    });
});