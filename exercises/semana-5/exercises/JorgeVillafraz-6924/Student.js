class Estudiante {
    #nombre;
    #apellido;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get nombrecCompleto() {
        return `Nombre:${this.#nombre}\nApellido:${this.#apellido}`;
    }

    static fromObject(objeto) {
        const { nombre, apellido } = objeto;
        return new Estudiante(nombre, apellido);
    }

}
// const estudiante1 = new Estudiante("Hariana", "Araque");
// console.log(estudiante1.nombrecCompleto);

// const objetoEstudiante = {nombre: "Jorge", apellido: "Villafraz"};
// const estudiante2 = Estudiante.fromObject(objetoEstudiante);
// console.log(estudiante2.nombrecCompleto);

const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
]

async function cacularPromedios(estudiantes) {

    for (estudiante of estudiantes) {

        const { nombre, apellido, calificaciones } = estudiante;

        const sumatoria = calificaciones.reduce(((a, b) => {
            return a += (b ** 2);
        }), 0);

        const promedioEstudiante = sumatoria / calificaciones.length;

        console.log(`Nombre: ${nombre} Apellido: ${apellido} Promedio: ${promedioEstudiante}`);
    }
}

cacularPromedios(estudiantesInfo);