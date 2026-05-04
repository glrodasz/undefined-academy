class Student{
    // Atributos privados
    #name;
    #lastname;
    
    constructor(name, lastname){
      this.#name = name;
      this.#lastname = lastname;
    }
    // Metodo get para acceder a los atributos priv
    // Los convierte en atributo dinamico
    get fullname() {
      return `${this.#name} ${this.#lastname}`;
    }
  
    // Metodos estaticos
    static fromObject(obj){
      const {name, lastname} = obj;
      return new Student(name,lastname)
      // Es una funcion utilitaria
    } 
   
  }
  
   // Nuestra DB
    const studentsInfo = [
    { name: 'Ana', lastname: 'García', scores: [3, 5, 4, 4.5] },
    { name: 'Luis', lastname: 'Pérez', scores: [4.5, 4, 4, 5] },
    { name: 'Carlos', lastname: 'Gomez', scores: [6, 4, 4.2, 3] }
  ];
  
    function calculateAverage(students){
          const averages = students.map(({name, lastname, scores}) => {
          const student = Student.fromObject({
            name,lastname
          })
          const scoresSum = scores.reduce((acum, score) => acum + score, 0)
  
          const average = scoresSum / scores.length;
      
        return {
          fullname: student.fullname,
          average: average?.toFixed(2) ?? "N/A"
          // Si el promedio no redondea, que tenga 2 decimales.
          // Y si da null, que arroje ""N/A
        }
    })
  
    averages.forEach(({fullname, average}) => {
      console.log(`${fullname}: ${average}`)
    })
      
  }
  
  calculateAverage(studentsInfo)
  
  function calculateAsync(){
    console.log("The function will go after 4 seconds")
  }
  
  const FOUR_SECONDS_IN_MS = 4000;
  
  setTimeout(calculateAsync, FOUR_SECONDS_IN_MS)