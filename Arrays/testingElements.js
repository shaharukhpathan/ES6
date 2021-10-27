//Every method

//It checks if every element matches the given condition

const numbers = [1, 2, 3, -4];
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive); //Shows false as not all elements are greater than 0

//There's another method that shows if at least one element matches the condition

const number = [1, 2, 3, -4];

const atLeastOnePositive = number.some(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive); //shows true as at least one element is greater than 0
