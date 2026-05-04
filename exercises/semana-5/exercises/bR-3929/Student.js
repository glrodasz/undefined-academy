class Student {
    #name;
    #lastName;
    constructor(name, lastName) {
      this.#name = name;
      this.#lastName = lastName;
    }
  
    getNombreCompleto() {
      return this.#name + " " + this.#lastName;
    }
  
    static fromObject(nameComplete) {
      let studentNameComplete = nameComplete.name + " " + nameComplete.lastName;
      return studentNameComplete;
    }
  }
  
  let student1 = new Student("Ramon", "Perez");
  let student2 = new Student("Carlos", "Ust");
  
  console.log(student1.getNombreCompleto());
  console.log(student2.getNombreCompleto());
  
  let student3 = { name: "Be", lastName: "Erre" };
  console.log(Student.fromObject(student3));
  
  const estudiantesInfo = [
    { nombre: "Ana", apellido: "García", calificaciones: [3, 5, 4, 4.5] },
    { nombre: "Luis", apellido: "Pérez", calificaciones: [4.5, 4, 4, 5] },
  ];
  
  async function calcularPromedios(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let calificaciones = arr[i].calificaciones;
      sum = calificaciones.reduce((total, number) => total + number);
      let average = (sum / calificaciones.length) ** 2;
      let nameComplete = arr[i].nombre + " " + arr[i].apellido;
      console.log(`${nameComplete} tiene una calificacion de ${average}`);
    }
  }
  
  calcularPromedios(estudiantesInfo);
  
  function sumarProm(arr){
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
  sum += arr[i].calificaciones;
  
  }
  }
  console.log(sumarProm(estudiantesInfo));