let students = [
  { name: "An", score: 8 },
  { name: "Bình", score: 7 },
];
console.log(students);
let newStudents = [
  ...students,
  { name: "Đức", score: 3 },
  { name: "Thông", score: 6 },
  { name: "Duck", score: 3.6 },
  { name: "Phước", score: 10 },
  { name: "Quý", score: 6.7 },
];
console.log(newStudents);
newStudents.pop();
console.log(newStudents);
newStudents.sort((a, b)=> b.score - a.score);
for (const newStudent of newStudents) {
    console.log(newStudent);
}


