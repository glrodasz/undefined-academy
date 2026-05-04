// Array de estudiantes
const estudiantesInfo = [
    {
        nombre: "Ana",
        apellido: "García",
        calificaciones: [3,5,4,4.5],
    },
    {
        nombre: "Luís",
        apellido: "Pérez",
        calificaciones: [4.5,4,4,5],
    }
]

// Crear una clase Estudiante con campos privados para el nombres y apellido, un getter para el nombre completo y un método estático fromObject.
class Estudiante {
    #nombre
    #apellido

    constructor(nombre, apellido) {
        this.#nombre = nombre
        this.#apellido = apellido
    }

    get nombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    static fromObject(object) {
        const {nombre, apellido} = object;

        return new Estudiante(nombre, apellido);
    }
}


// Función asíncrona para calcular los promedios de calificaciones al cuadrado dado un array de estudiantes
async function calcularPromedios(estudiantes) {
    try {
        const promedios = estudiantes.map((estudiante) => {
            const promedio = estudiante.calificaciones.reduce((acumulador, calificacion) => acumulador + calificacion ** 2, 0) / estudiante.calificaciones.length;
            
            return { 
                nombreCompleto: new Estudiante(estudiante.nombre, estudiante.apellido).nombreCompleto,
                promedio: promedio.toFixed(2)
            };
        });
    
        return promedios;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

(async () => {
    try {
        const estudiantes = await calcularPromedios(estudiantesInfo);
    
        estudiantes.forEach(({ nombreCompleto, promedio }) => {
            console.log(`El/la estudiante ${nombreCompleto} tiene un promedio de ${promedio}`);
        });
    } catch (error) {
        console.error(error);
    }
})();