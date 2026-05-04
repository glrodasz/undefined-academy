// Ejercicio 01 

class estudiantes {
    #nombre;
    #apellido;

    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`
    }

    static fromObject(obj){
        const {nombre, apellido} = oj;
        return new estudiante(nombre, apellido);
    }
}


const estudianteInfo = [
    {nombre: "Ana", apellido: "Garcia", calificaciones: [3, 5, 4, 4.5]},
    {nombre: "Luis", apellido: "Perez", calificaciones: [4.5, 4, 4, 5]},
];

async function calcularPromedio(estudiante){
    let sumarPromedio = estudiante.calificaciones.reduce((acumulador, numero) => acumulador + numero, 0)
    let promedio = sumarPromedio / estudiante.calificaciones.length 
    return promedio
    console.log(promedio ** 2);
}

calcularPromedio(estudianteInfo[0]).then((promedio) => {
    console.log(`El promedio de ${estudianteInfo[0].nombre} es ${promedio}`);
});

calcularPromedio(estudianteInfo[1]).then((promedio) => {
    console.log(`El promedio de ${estudianteInfo[1].nombre} es ${promedio}`);
});
