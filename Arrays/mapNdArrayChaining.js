//These methods are chainable. Which means we can call them one after the other in a chain

const numbers = [1, -1, 2, 3, -4, -3, 4, 5, 6];

const items = numbers
  .filter((n) => n > 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log("chained", items);

//Standard to be followed: each method starting from a "." should start a new line

//Personal Practice---------------------

const prac = [1, 5, 4, 7, 8, 9, 5, 6];

const value = prac
  .filter((n) => n % 2 === 0) //filtered even numbers
  .map((n) => n * 2) // even numbers multiplied by 2
  .reduce((a, n) => {
    //calculated sum of the numbers
    return (a += n);
  }, 0);
console.log("value", value);
