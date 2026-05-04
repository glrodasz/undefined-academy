
class Estudiante {                  
    #nombre;   
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto() {                  
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(obj) {    
        const {nombre, apellido} = obj;        
        return new Estudiante(nombre, apellido);
    }
}

const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
]

function calcularPromedios(estudiantes) {
    const promedios = estudiantes.map(({ nombre, apellido, calificaciones }) => {   
        const estudiante = Estudiante.fromObject({ nombre, apellido })  
        const promediosSum = calificaciones.reduce((acum, score) => acum + score, 0)  
        const promedio = promediosSum / calificaciones.length;

        return {
            nombreCompleto: estudiante.nombreCompleto,
            promedio: promedio !== undefined ? promedio.toFixed(2) : "N/A"  
        }
    })

    promedios.forEach(({ nombreCompleto, promedio }) => {
        console.log(`${nombreCompleto}: ${promedio ** 2}`)
    });
}

calcularPromedios(estudiantesInfo)
