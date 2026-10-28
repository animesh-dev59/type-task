
interface Student {
  id: number;
  name: string;
  marks: number;
  email?: string; // optional email
}


const students: Student[] = [
  { id: 1, name: "Rahim", marks: 85, email: "rahim@example.com" },
  { id: 2, name: "Karim", marks: 56, email: "karim@example.com" },
  { id: 3, name: "Nadia", marks: 72, email: "nadia@example.com" },
  { id: 4, name: "Sadia", marks: 35 }, // Below passing mark (40)
  { id: 5, name: "Tanvir", marks: 59, email: "tanvir@example.com" }
];


function getPassedStudents(studentList: Student[]): Student[] {
  return studentList.filter((student) => student.marks >= 40);
}


function getAverageMarks(studentList: Student[]): number {
  if (studentList.length === 0) return 0;
  const totalMarks = studentList.reduce((sum, student) => sum + student.marks, 0);
  return totalMarks / studentList.length;
}


function getStudentById(studentList: Student[], id: number): Student | undefined {
  return studentList.find((student) => student.id === id);
}



const passedStudents = getPassedStudents(students);
const averageMarks = getAverageMarks(students);
const foundStudent = getStudentById(students, 1);

const passedStr = passedStudents.map(s => `${s.name} - ${s.marks}`).join("; ");

console.log(`Passed Students: ${passedStr} | Average Marks: ${averageMarks} | Student Found: ${foundStudent ? foundStudent.name : "None"}`);