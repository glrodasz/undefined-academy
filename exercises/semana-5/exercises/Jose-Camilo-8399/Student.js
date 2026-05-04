const estudiantesInfo = [
   { nombre: 'Ana', apellido: 'García', calificaciones: [3, 5, 4, 4.5] },
   { nombre: 'Luís', apellido: 'Pérez', calificaciones: [4.5, 4, 4, 5] },
];

class Estudiante {
   // Private -- no se puede acceder desde fuera de la clase
   #nombre;
   #apellido;

   constructor(nombre, apellido) {
      this.#nombre = nombre;
      this.#apellido = apellido;
   }

   get nombreCompleto() {
      return `${this.#nombre} ${this.#apellido}`;
   }

   // Método estático, sólo se puede acceder con la clase, NO con un objeto de la clase
   static fromObject(obj) {
      const { nombre, apellido } = obj;
      return new Estudiante(nombre, apellido);
   }
}

function calcularPromedio(calificacion) {
   let total = 0;
   calificacion.map(calificacion => total += calificacion ** 2);
   return total / calificacion.length;
}

function average(estudiantes) {
   const averages = estudiantes.map(({ nombre, apellido, calificaciones }) => {
      const estudiante = Estudiante.fromObject({ nombre, apellido });
      const fullName = estudiante.nombreCompleto;
      let average = calcularPromedio(calificaciones);

      return { fullName, average };
   });
   return averages;
}

const listAverages = average(estudiantesInfo);

listAverages.forEach(({ fullName, average }) => {
   console.log(`Estudiante: ${fullName} Promedio: ${average}`);
});



