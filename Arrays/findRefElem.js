const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

console.log(courses.includes({ id: 1, name: "a" })); //it returns false
//This method doesn't work with reference data types.

//find method with predicate function
const course = courses.find(function (course) {
  return course.name === "b";
});

console.log(course);

//Optimised with arrow function
const course2 = courses.find((course2) => course2.name === "a");

console.log("---", course2);

//findIndex method with predicate function that returns index of the element

const course1 = courses.findIndex(function (course1) {
  return course1.name === "xyz";
});

console.log(course1);

//The above method shows -1 as xvz doesn't exist in the given arrayise

//optimised with arrow function

const course3 = courses.findIndex((course3) => courses.name === "xyz");

console.log("-_-", course3);
