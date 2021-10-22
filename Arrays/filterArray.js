const numbers = [1, 2, 3, -3, 4, -6, 5, 6, 10, 15];

const filteredNumbers = numbers.filter(function (value) {
  return value >= 0;
});
console.log(filteredNumbers);

// The above functions returns the value that matches the given condition

//Optimised filter with arrow function

const filter = numbers.filter((n) => n % 5 === 0);
console.log(filter);

//Both the filter and map return a new array. They don't modify the original array.
