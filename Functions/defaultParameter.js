// Sometimes you might need to write a function with default parameters. For ex.

//--------------------------------Example 1

function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 15, 2));

//--------------------------------Example 2

function interest2(principal, rate, years) {
  rate = rate || 15; //asigning a default value here if in case an argument is not provided
  years = years || 4; //asigning a default value here if in case an argument is not provided
  return ((principal * rate) / 100) * years;
}
console.log(interest2(10000));

//--------------------------------Example 3 (starting from ES6)
// With ES6 you can set the default parameters in the parameters body itself. However, there's a catch.

function interest3(principal, rate = 15, years = 8) {
  return ((principal * rate) / 100) * years;
}
console.log(interest3(10000));

// All the parameters with such default values should be at the end just like the rest operator.
// Otherwise, the JavaScript engine will be confused as to which value needs to be taken into account.

// An Example: "function blabla(principal, rate = 15, years)" function call: blabla(10000, 10, 16)
//The above example will show you: "NaN". The javascript engine is confused between rate = 15 or rate = 10

//However, there's a catch. You can pass undefined as an argument at the place of default paremeter while calling
// the function. But this is ugly and not recommended. An Example:

// -----------------------------------Example 4 (not recommended)

function interest4(principal, rate = 15, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest4(10000, undefined, 16));

// To avoid confusing others with the undifined thing, you should define default parameters at the very end
