// JavaScript is dynamic language.

let x = 1;
x = "a";

// changed the variable's type from a number to string. The same concept is followed in arguments of a function

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

//----------------------Important Notes---------------

// If you pass only one argument in the above example "(sum(1));", you get an error NaN: Not a number
// Because here a is 1 and be is by defualt undefined. If you perform (1 + undefined): you get NaN

// The same happens when you don't pass any argument "(sum());": You get NaN

//You can pass more arguments than the function takes parameters but the function will only take as many arguemnts
// as the parameters in function. If there are two paramenters, only first two arguemtns will be considered.

// ---------------------------------Arguments Object----------------------

// if you "console.log(arguments)" in a function which is called/invoked with an argument
// you get an object which looks like an array
// It works fine even if there's no parameter

function addition() {
  console.log(arguments); //This will give you an argument's object
  //   so how do you get the sum of arguments in this case? here's how you do it:
  let total = 0;
  //for of loop can be used on any object that has an iterator.
  for (let value of arguments) total += value;
  return total;
}
console.log(addition(1, 5, 4, 3, 2));
