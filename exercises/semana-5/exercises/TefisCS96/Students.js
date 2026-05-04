//1.Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el
// nombre completo y un método estático fromObject.
class Students {
    #name;
    #lastName;

    constructor(name, lastName) {
        this.#name = name;
        this.#lastName = lastName;
    }

    get name() {
        return `El nombre del estudiante es: ${this.#name} y el apellido ${this.#lastName}`;
    }

    static fromObject(obj) {
        const {name, lastName} = obj;
        return new Students(name, lastName);
    }
}

const tefis = new Students('Tefis', 'Castro Salas')
const pedro = new Students('Tefis', 'Castro Salas')

console.log(tefis.name)
console.log(Students.fromObject('pedro', 'perez'))

//2. Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.

const estudiantesInfo = [
    {
        nombre: "Ana",
        apellido: "García",
        calificaciones: [3, 5, 4, 4.5]
    },
    {
        nombre: "Luis",
        apellido: "Pérez",
        calificaciones: [4.5, 4, 4, 5]
    },
    {
        nombre: "Pedro",
        apellido: "Pérez",
        calificaciones: [4, 2.5, 3, 1.5]
    },
];

async function calificacionesPromedio(students) {
    let total = 0;
    let promedio = 0;
    let cuadradoProm = 0.0;
    let msn = "";
    for (let i = 0; i <= students.length - 1; i++) {
        for (let j = 0; j <= students[i].calificaciones.length - 1; j++) {
            total += students[i].calificaciones[j];
            promedio = total / students[i].calificaciones.length;
            cuadradoProm = promedio ** 2;
        }
        msn = `El promedio de las calificaciones de ${students[i].nombre} ${students[i].apellido} es: ${promedio} y el promedio al cuadrado es ${cuadradoProm}`;
    }
    return msn;
}


console.log(calificacionesPromedio(estudiantesInfo))

