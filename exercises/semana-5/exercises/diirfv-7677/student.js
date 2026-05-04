const ESTUDIANTES_INFO = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
];

class Estudiante{
    #nombre;
    #apellido;

    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombreCompleto(){
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(obj){
        return new Estudiante(obj.nombre, obj.apellido);
    } 
}

async function calcularPromedios(estudiantes){
    let estudiantesPromedio = [];

    estudiantes.forEach(estudiante => {
        let sumaNotas = 0;
    
        estudiante.calificaciones.forEach(nota => {
            sumaNotas = sumaNotas + nota;
        });
    
        const PROMEDIOS_NOTAS = sumaNotas / estudiante.calificaciones.length;

        const nuevoEstudiante = Estudiante.fromObject(estudiante);

        estudiantesPromedio.push(
            `${nuevoEstudiante.nombreCompleto}: ${PROMEDIOS_NOTAS**2}`
        )
    });
    return estudiantesPromedio;
}

console.log(await calcularPromedios(ESTUDIANTES_INFO));




