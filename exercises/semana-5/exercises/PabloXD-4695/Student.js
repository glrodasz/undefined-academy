//Given Data for testing
const studentsInfo = [
  { firstName: "Ana", lastName: "Garcia", scores: [3, 5, 4, 4.5] },
  { firstName: "Luis", lastName: "Perez", scores: [4.5, 4, 4, 5] },
];

//Helper Function and constants
const ALPHABETICAL_REGEX = /^[a-zA-Z]+$/;

function isNonEmptyString(param) {
  return typeof param === "string" && param.length > 0;
}

//Student Class
class Student {
  #firstName;
  #lastName;
  #scores;

  constructor(firstName, lastName, scores) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#scores = scores;
  }

  //Returning fullName with string literals
  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  getScores() {
    return this.#scores;
  }

  getAverageScore() {
    return (
      this.#scores.reduce((acum, score) => acum + score) / this.#scores.length
    );
  }

  static isValid(obj) {
    if (!obj.hasOwnProperty("firstName") || !obj.hasOwnProperty("lastName")) {
      return false;
    }

    let firstName = obj.firstName;
    let lastName = obj.lastName;

    if (!isNonEmptyString(firstName) || !isNonEmptyString(lastName)) {
      return false;
    }

    return !ALPHABETICAL_REGEX.test(firstName) ||
      !ALPHABETICAL_REGEX.test(lastName)
      ? false
      : true;
  }

  static async calculateSquareAverageListStudents(students) {
    return students.map((student) => ({
      fullName: student.getFullName(),
      scoreSquareAverage: student.getAverageScore() ** 2,
    }));
  }
}

//Extra Data for testing
let listStudents = [
  new Student("Pablo", "Rodriguez", [2, 3, 4, 5, 6]),
  new Student("Juan", "Perez", [1, 1, 2, 2]),
  new Student("Rosa", "Suarez", [7, 8, 9, 10, 11]),
  new Student("Rene", "Martinez", [2, 2, 2, 2]),
];

//Testing Exercises
console.log("* Testing isValid method");
console.log(
  Student.isValid({
    firstName: "Pablo",
    lastName: "Rodriguez",
    scores: [2, 3, 4, 5, 6],
  })
);
console.log(Student.isValid({ firstName: 1, lastName: "Uno" }));
console.log(Student.isValid({ firstName: "", lastName: "" }));
console.log(Student.isValid([]));
console.log(Student.isValid(studentsInfo[0]));
console.log(Student.isValid(studentsInfo[1]));

console.log(
  "* Testing exercise for the method that calculates average score for each student in a list"
);
Student.calculateSquareAverageListStudents(listStudents).then((data) =>
  console.log(data)
);
