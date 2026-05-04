// Ejercicio 04 - Semana 05: Crear una funcionalidad que lea una lista de correos validos y remueva la cadena de texto suaddresing


let emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w.-]+\.[\w]{2,7}$/

const correos = [
    'john.doe@example.com',
    'jane_doe+shopping@example.com',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
    'wilmerElmasodiadoscorreo.com'
]

const filtrarCorreo = correo => correo.match(emailRegex)


'alice.smith+work@example.co.uk'.match(emailRegex)

const mapCorreo = correo => {
    const [fullCorreo, subaddresing] = correo.match(emailRegex)

    if (subaddresing){
        return fullCorreo.replace(subaddresing, '')
    }
    
    return fullCorreo
}

correos.filter(filtrarCorreo).map(mapCorreo)