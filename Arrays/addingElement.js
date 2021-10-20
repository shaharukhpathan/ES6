const numbers = [3, 4]; //if declared with const you cannot reassign the same array.

// Add an element at the beginning of an array.

numbers.unshift("unshift method---", 1, 2);

// Adding an element at the end of array

numbers.push(5, 6);

console.log("push method ---", numbers);

// Adding an element anywhere in an array

const digits = [10, 11, 12, 13, 14];

digits.splice(2, 0, "a", "b");

//first parameter: starting index
//second parameter: remove items from startin index(including) and onwards
//third parameter: add elements from starting index
console.log(digits);

console.log("checking result", digits.splice());
