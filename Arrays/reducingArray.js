//Calculating sum of all numbers in the given array using FOR OF LOOP and Reduce method

const numbers = [1, 2, -2, 5, 6, -1, 7];

//FOR OF LOOP method

let sum = 0;

for (let number of numbers) {
  sum += number;
}

console.log(sum);

// Reduce method: here is what happens; reduce method has two arguements, a call back
// function and initial accumulator.

const reduced = numbers.reduce(function (accumulator, elements) {
  accumulator += elements;
  return accumulator;
}, 0);

console.log(reduced);

const optiReduced = numbers.reduce((acc, elements) => (acc += elements), 0);

console.log(optiReduced);

//Personal Practice-------------------------------------------

let sum2 = 0;

for (let number of numbers) {
  sum2 += number;
}

console.log("sum2", sum2);

let reduced2 = numbers.reduce(function (acc, number) {
  return (acc += number);
}, 0);
console.log("reduced2", reduced2);

// accumulator = 0, elements = 1 => 1
// accumulator = 1, elements = 2 => 3
// accumulator = 3, elements = -2 => 1
// accumulator = 1, elements = 5 => 6
// accumulator = 6, elements = 6 => 12
// accumulator = 12, elements = -1 => 11
// accumulator = 11, elements = 7 => 18

// if you don't initialize accumalator, the first item would be initial accumalator and
//the second parameter of the call back function would be second item and so on.
