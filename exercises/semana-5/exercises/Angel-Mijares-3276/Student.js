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
      const {name, lastname} = obj;
    return new Student(name, lastname);
    }
  }
  const studentsInfo = [
    { name: "Angel", lastname: "Mijares", grades: [5, 3, 2, 6] },
    { name: "Luis", lastname: "Tineo", grades: [2, 3.5, 2, 5] },
    { name: "Pedro", lastname: "Perez", grades: [2, 7, 4, 5] },
    { name: "Martin", lastname: "Rodriguez", grades: [2, 1, 4, 3] },
    { name: "Jose", lastname: "Martinez", grades: [2, 0, 4, 6] },
    { name: "Julio", lastname: "Escobar", grades: [2, 5, 4, 9] },
  ];
  
  
  function calculateAverage(students) {
    const averages = students.map(({name, lastname, grades}) => {
        
    const student = Student.fromObject({
      name, lastname
    })
    
    const gradesSum = grades.reduce((acum, grades) => acum + grades)
   
    const average = gradesSum / grades.length;
        
    return {
      fullname: student.fullName,
      average: average?.toFixed(2) ?? "N/A"
    }
  })
      
      averages.forEach(({ fullname, average}) => {
        console.log(`${fullname}: ${average}`);
      })
  }
  
  calculateAverage(studentsInfo)