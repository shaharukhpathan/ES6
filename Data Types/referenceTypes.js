//Types of data that can be assigned to variables.
// Primitives/Value types && Reference types.

//Types: Arrays, Objects, functions
//Objects---------------------------------------

let name = "Mak";
let age = 25;

//If something has many properties, you don't have to declare many variables for the properties.
//You can just declare an object and assign the key values alltogether.

let person = {
  name: "mosh",
  age: 30,
  awes: "Geius",
};
//How can you change a value inside of an object. Types are as below:

//Dot Notation
person.name = "John";
//Bracket Notation

person["name"] = "Mak";
person["awes"] = "Genius";

console.log(person);
console.log(person.name);

//Which is the best approach: Dot Notation

//Arrays------------------------------------------
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";

console.log(typeof selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);

//Functions----------------------------------------
//Performing a task

function greeting() {
  console.log("Hello World");
}
greeting();

//Function with Parameter

function greet(Name, LastName) {
  //here Name is a parameter.
  console.log("Hello " + Name + " " + LastName);
}
greet("Johnn", "Wick"); //here Johnn is an argument.
greet("Wick", "Johnn"); //Multiple Arguements, functions are reusable.

//Function calculating a value

function square(number) {
  return number * number;
}

let number = square(8);

console.log(number); //storing and the function in "let number" and consoling the same.
console.log(square(7)); //directly consoling the function with passing an argument (7).
