const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

const course = courses.find(function (course) {
  return course.name === "c";
});
console.log(course);

//Optimised with arrow function

const course1 = courses.find((course1) => course1.name === "b");

console.log(course1);
