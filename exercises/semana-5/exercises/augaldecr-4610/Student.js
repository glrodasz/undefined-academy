class Estudiante {
    #nombre
    #apellido

    /**
     * 
     * @param {string} nombre 
     * @param {string} apellido 
     */
    constructor(nombre, apellido) {
        this.#nombre = nombre
        this.#apellido = apellido
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`
    }

    static fromObject(obj) {
        return new Estudiante(obj.nombre, obj.apellido)
    }
}

/**
 * 
 * @param {Estudiante[]} estudiantes 
 * @returns Promise<Estudiante[]>
 */
const calculaPromedios = async (estudiantes) => {
    return new Promise((resolve, reject) => {
        const promedios = estudiantes.map(estudiante => {

            const estudianteInterno = Estudiante.fromObject(estudiante)

            const promedio = ((estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0)) / estudiante.calificaciones.length) ** 2
            return {
                nombreCompleto: estudianteInterno.nombreCompleto,
                promedioAlCuadrado: promedio,
            }
        })

        resolve(promedios),
        reject(new Error('Error'))
    })
}

const estudiantesInfo = [
    { nombre: 'Ana', apellido: 'García', calificaciones: [3, 5, 4, 4.5] },
    { nombre: 'Luis', apellido: 'Pérez', calificaciones: [4.5, 4, 4, 5] }
];

calculaPromedios(estudiantesInfo)
    .then(console.log)
    .catch(console.error)