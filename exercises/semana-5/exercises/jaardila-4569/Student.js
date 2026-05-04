/** 
 * Clase 1 [EJERCICIO]
Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject.
*/
class Student {
    #name;
    #lastname;

    constructor(name, lastname) {
        this.#name = name;
        this.#lastname = lastname;
    }

    get fullName() {
        return `${this.#name} ${this.#lastname}`;
    }

    static fromObject(obj) {
        const { name, lastname } = obj;
        return new Student(name, lastname);
    }
}

//Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
//Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
//Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.
const estudiantesInfo = [
    { nombre: 'Ana', apellido: 'García', calificaciones: [3, 5, 4, 4.5] },
    { nombre: 'Luis', apellido: 'Pérez', calificaciones: [4.5, 4, 4, 5] }
];

async function calculateAverage(students) {

    const averages = [];
    for (const student of students) {
        const { nombre, apellido, calificaciones } = student;
        const average = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0) / calificaciones.length;
        const alumno = Student.fromObject({ "name": nombre, "lastname": apellido });//método estático recibe un objeto
        averages.push(`${alumno.fullName}, promedio: ${average ** 2}`);
    }
    return averages;
}

calculateAverage(estudiantesInfo)
    .then(data => { for (const item of data) { console.log(item); } })
    .catch(error => { console.error('Error al calcular los promedios:', error); });