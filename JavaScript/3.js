// Array
// Collection of simillar items under the same name.
// example
const students = ["Ram", "Shayam", "Hari","Riteshtamang"];
const teachers = [
  { name: "Ram", sub: "Maths" },
  { name: "Ramesh", sub: "science" },
  { name: "Rammma", sub: "social" },
];
console.log(students, teachers);
// Methods of Array
// 1.At
console.log(students[2]);
console.log(teachers[0].sub);
// 2.Length
console.log(students.length);
console.log(teachers.length);
// 3.push
students.push("Ritesh");
console.log(students);
teachers.push({ name: "hari", sub: "English" });
console.log(teachers);
// 4.Slice
// console.log(students.slice(1, 3));
// 5.splice
// console.log(students.splice(1, 3));
// 6.Filter
const response =students.filter((student)=>{
    return student ==="ganesh";
})
console.log(response)

const res =teachers.filter((teacher)=>{
    
    return teacher.sub === "science";
    
})
console.log(res);



