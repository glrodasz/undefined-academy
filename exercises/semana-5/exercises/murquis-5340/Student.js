const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5]},
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5]},
    ];

class Estudiante {
    #nombre;
    #apellido;


    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(objeto){
        const {nombre, apellido} = objeto;
        return new Estudiante(nombre, apellido);
    }
}

async function calcularPromedios(estudiantes){

    const promedios = estudiantes.map(({nombre, apellido, calificaciones}) => {
        const estudiante = Estudiante.fromObject({
            nombre, apellido
        })

        const sumaCalificaciones = calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion ** 2,0)
        const promedio = sumaCalificaciones / calificaciones.length;

        return{
            nombreCompleto: estudiante.nombreCompleto,
            promedio: promedio?.toFixed(2) ?? "N/A"
        }
    })
    promedios.forEach(({nombreCompleto, promedio}) => {
        console.log(`${nombreCompleto}: ${promedio}`);
    })
}


calcularPromedios(estudiantesInfo)