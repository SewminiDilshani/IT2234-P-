//Define 10 students JSON
//Store it in an Array
//Find the female students
//Find the students who are following IT course
//Find the max and average GPA among the students

const students = [
    { id: 1, name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
    { id: 2, name: "Bob", gender: "Male", course: "Engineering", gpa: 3.5 },
    { id: 3, name: "Charlie", gender: "Male", course: "Mathematics", gpa: 3.2 },
    { id: 4, name: "Diana", gender: "Female", course: "IT", gpa: 3.9 },
    { id: 5, name: "Ethan", gender: "Male", course: "Physics", gpa: 3.7 },
    { id: 6, name: "Fiona", gender: "Female", course: "IT", gpa: 3.6 },
    { id: 7, name: "George", gender: "Male", course: "Biology", gpa: 2.8 },
    { id: 8, name: "Hannah", gender: "Female", course: "Arts", gpa: 3.4 },
    { id: 9, name: "Irene", gender: "Female", course: "IT", gpa: 4.0 },
    { id: 10, name: "Jack", gender: "Male", course: "Engineering", gpa: 3.3 }
];

// Find the female students
const femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

// Find students who are following IT course
const itStudents = students.filter(student => student.course === "IT");
console.log("Students following IT course:", itStudents);

// Find the max and average GPA among the students
const gpas = students.map(student => student.gpa);
const maxGPA = Math.max(...gpas);
const avgGPA = gpas.reduce((sum, gpa) => sum + gpa, 0) / gpas.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA);
