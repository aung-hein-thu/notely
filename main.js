// Set time out

// const { use, useCallback } = require("react");

// setTimeout(useCallback, delay);

// function output() {
//   console.log("Hello World");
// }

// setTimeout(output, 1000);

// const student = { name: "Mg", age: 23, isStudent: true };

// console.log(student.name);
// console.log(student["age"]);

// Destructuring
// const { age, isStudent, name} = student;

// console.log(age);
// console.log(isStudent);

//Filter

// const students = [
//   { name: "John", mark: 70 },
//   { name: "Su Su", mark: 45 },
//   { name: "cho", mark: 80 },
//   { name: "Su", mark: 50 },
// ];

// const passedStudents = students.filter((student) => {
//   return student.mark >= 50;
// });

// console.log(passedStudents);

// const searchTerm ="HELLO";
// const notes = [
//   {
//     id: "dfeb8fbd-57bf-43c9-b8b4-84d2c10dd76e",
//     title: "HELLO",
//     content: "hEllo",
//     pinned: false,
//     createdAt: 1794131868697,
//     updatedAt: 1794131868697,
//   },
//   {
//     id: "0c9b33f8-fe46-4051-b2cb-b3d00717874e",
//     title: "aSd",
//     content: "Asd",
//     pinned: false,
//     createdAt: 1794131858191,
//     updatedAt: 1794131858191,
//   },
//   {
//     id: "ed62087d-5e9e-47d9-b0af-ab19272819e4",
//     title: "Good Moring",
//     content: "asD",
//     pinned: false,
//     createdAt: 1794131855952,
//     updatedAt: 1794131855952,
//   },
// ];
// function getVisibleNotes(){
//   const visible = notes.filter((note) =>{
//     const {title,content} = note
//     const text = `${title} ${content}` .toLowerCase();
//     console.log(text);
//     const matchesSearch = text.includes(searchTerm.toLowerCase());
//     console.log(matchesSearch);
//     return matchesSearch;
//   });

//   console.log(visible);
//   return visible;
// }

// getVisibleNotes();