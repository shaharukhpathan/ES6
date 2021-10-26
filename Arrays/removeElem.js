const numbers = [1, 2, 3, 4, 5, 6, 7];

// Removing the first element: shift method
// console.log(numbers.shift());

let first = numbers.shift();
console.log("first:", first);

// Removing last element: pop method
// console.log(numbers.pop());
let last = numbers.pop();
console.log("last:", last);

// Removing an element from anywhere
let anywhere = numbers.splice(3, 2);
//first arguement is starting index,
//second arguement is the number of elements to be removed from there onwards.
//third arguement is the number to be added in the array

console.log("anywhere", anywhere);
