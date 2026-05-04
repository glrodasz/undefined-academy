class Student {
    #name;
    #lastName;
  
    constructor(name, lastName) {
      this.#name = name;
      this.#lastName = lastName;
    }
  
    getFullName() {
      return `${this.#name} ${this.#lastName}`;
    }
  
    static fromObject(object) {
      const { name, lastname } = object;
      return new Student(name, lastname);
    }
  }
  
  const sumFuction = (accumulator, currentvalue) => accumulator + currentvalue;
  const sumGrades = (grades) => grades.reduce(sumFuction);
  const calculateAverages = (students) => {
    const averages = students.map(({ name, lastname, grades }) => {
      const student = Student.fromObject({ name, lastname });
      const totalGrades = sumGrades(grades);
      const squareAverage = (totalGrades / grades.length)**2;  //square average **2
  
      return {
        fullname: student.getFullName(),
        average: squareAverage?.toFixed(2) ?? "N/A",}});
  
    averages.forEach(({ fullname, average }) => {
      console.log(`${fullname}: ${average}`);
    });
  };
  
  const studentsInfo = [
    {
      name: "Ana",
      lastname: "Garcia",
      grades: [3, 5, 4, 4.5],
    },
    {
      name: "Luis",
      lastname: "Perez",
      grades: [4.5, 4, 4, 5],
    }, ];
  
    calculateAverages(studentsInfo); /*output: 17.02 
                                               19.14*/  