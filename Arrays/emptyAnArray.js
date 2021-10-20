let numbers = [1, 2, 3, 4, 5];
let another = numbers;

// Solution 1: works if the array is declared with the let key word

numbers = [];

console.log(numbers);

// If the variable is reassigned then the original variable gets its memory disallocated.
// If the variable is directly stored into another variable as it is, then it will still
// have its allocated memory.

// Solution 2
// numbers.length = 0; //changing the length of Array to 0

// console.log(numbers);
// console.log(another);

//Solution 3

// numbers.splice(0, numbers.length);

// console.log(numbers);
// console.log(another);

//Solution 4: not recommended

// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);
// console.log(another);
