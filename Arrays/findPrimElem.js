const numbers = [1, 2, 5, 6, 7, 1, 3, 4];

console.log(numbers.indexOf("a"));

//returns -1 if the element doesn't exist.

console.log(numbers.lastIndexOf(1));

//shows the last index of element if it exists

console.log(numbers.indexOf(1) !== -1);

//the above coonsole shows if the element exists in the array
//if it doesn't exists the index would be -1 so.

console.log(numbers.includes(1));

//This is new method that directly shows if the given element exists in the array

//Notes: All these methods have a second parameter that lets you search from a specifix index

console.log(numbers.indexOf(1, 3));

//the above console shows index (5) as the search starts from 3rd index.
