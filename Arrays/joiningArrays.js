const numbers = [1, 2, 3];

const joined = numbers.join(", ");
console.log(joined); //joins the element in array by the given parameter and returns a string

const message = "This is my very first message";

const parts = message.split(" ");
console.log(parts); //splits the elements in array wherever the given number is found and returns an array

const combined = parts.join("-");
console.log(combined); //joins the element in array by the given parameter and returns a string
