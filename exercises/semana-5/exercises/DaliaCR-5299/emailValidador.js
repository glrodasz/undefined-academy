let correos = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "cramdal@hotmail"
]

function valida_correo(correos) {
    const emailPattern = /^[\w-+]+(\.[\w-+]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
    const correo = correos.map(function(e){
            
        if (emailPattern.test(e)) {
            console.log(e.replaceAll(/\+[\w]+/g,""),": Correo electrónico válido.");
        } else {
            console.log(e.replaceAll(/\+[\w]+/g,""),": Correo electrónico no válido.");
        }
    })
    
}
valida_correo(correos)