//For of loop

const numbers = [1, 2, 3];

for (let number of numbers) console.log(number);

//ForEach

numbers.forEach(function (number) {
  console.log(number);
});

//Optimised forEach with arrow function

numbers.forEach((num, index) => console.log(num, index));
