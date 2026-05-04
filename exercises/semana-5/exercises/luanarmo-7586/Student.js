class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre = "Juan", apellido = "Perez") {
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

async function calcularPromedios(estudiantes) {

    const promedios = estudiantes.map(({nombre, apellido, calificaciones}) => {
        const estudiante = Estudiante.fromObject({nombre, apellido})

        const sumaCalificaciones = calificaciones.reduce((total, califiacion) => total + (califiacion ** 2))
        
        const promedio = sumaCalificaciones / calificaciones.length;

        return {
            nombreCompleto: estudiante.nombreCompleto,
            promedio: promedio?.toFixed(2) ?? "N/A"
        }
    })

    promedios.forEach(({nombreCompleto, promedio}) => {
        console.log(`${nombreCompleto}: ${promedio}`)
    });
    
}

const estudiantesInfo = [ 
    {nombre : "Ana", apellido: "Garcia", calificaciones: [3, 5, 4, 4.5] },
    {nombre : "Luis", apellido: "Perez", calificaciones: [4.5, 4, 4, 5] },
]

calcularPromedios(estudiantesInfo)