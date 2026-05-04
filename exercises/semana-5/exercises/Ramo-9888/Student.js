/* 🏋Clase 1 [EJERCICIO]
Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject.
Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.*/

class Student {

    #name;
    #lastname;

    constructor(name, lastname){
        this.#name = name;
        this.#lastname = lastname;
    }

    get fullName() {
        return `${this.#name} ${this.#lastname}`;
    }

    static fromObject(obj) {
        const {name, lastname} = obj;
        return new Student(name, lastname);
    }
}

const ramo = new Student("ramiro", "reynoso")


const studentsInfo = [
    { name: 'Ana', lastname: 'García', scores: [3, 5, 4, 4.5] },
    { name: 'Luis', lastname: 'Pérez', scores: [4.5, 4, 4, 5] },
  ];
  
function calculateAverage(students){
    const averages = students.map(({name, lastname, scores}) => {
       
        const student = Student.fromObject({
            name, lastname
        })

        const scoresSum = scores.reduce((acum, score) => acum + score ** 2);

        const average = scoresSum / scores.length;

        return {
            fullName: student.fullName,
            average: average?.toFixed(2) ?? "N/A"
        }
    })

    averages.forEach(({fullName, average}) => {
        console.log(`${fullName}: ${average}`);
    })
}



  calculateAverage(studentsInfo)