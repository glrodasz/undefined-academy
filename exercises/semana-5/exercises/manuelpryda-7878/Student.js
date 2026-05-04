/* CLASE 1 - EJERCICIO
1.- Crea una clase Estudiante con campos privados para el nombre y apellido, un getter para el nombre completo y un método estático fromObject.
2.- Crea una función asíncrona calcularPromedios que acepte un array de estudiantes.
3.- Dentro de calcularPromedios, calcula el promedio de las calificaciones al cuadrado de cada estudiante.
4.- Imprime el nombre completo y el promedio de calificaciones de cada estudiante utilizando Template literals.

Usa el siguiente array de estudiantes como entrada:**

const estudiantesInfo = [
  { nombre: 'Ana', apellido: 'García', calificaciones: [3, 5, 4, 4.5] },
  { nombre: 'Luis', apellido: 'Pérez', calificaciones: [4.5, 4, 4, 5] }
];
*/

class Student {
    #name;
    #lastname;
    
    constructor(name, lastname) {
      this.#name = name;
      this.#lastname = lastname;
    }
    
    get fullname() {
      return `${this.#name} ${this.#lastname}`;
    }
    
    static fromObject(obj) {
      const {name, lastname} = obj;
      return new Student (name, lastname);
    }
  }
    const studentsInfo = [
  { name: "Ana", lastname: "García", scores: [3, 5, 4, 4.5] },
  { name: "Luis", lastname: "Pérez", scores: [4.5, 4, 4, 5] },
  ];
  
  
  function calculateAverage(students) {
    const averages = students.map(({name,lastname,scores}) => {
      
      const student = Student.fromObject({
        name, lastname
      })
      
      const scoresSum = scores.reduce((acum, score) => acum + score **2, 0)
      
      const average = scoresSum / scores.length;
      
      return {
        fullname: student.fullname,
        average: average?.toFixed(2) ?? "N/A"
      }
    })
    
    averages.forEach(({fullname, average}) => {
      console.log(`${fullname}: ${average}`);
    })
  }
  
  calculateAverage(studentsInfo)