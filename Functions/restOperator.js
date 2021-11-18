// Rest Operator: (...givenName)
// Rest Operator is used to handle bunch of arguments. It combines the arguments in an array.
// It looks very similar to spread operator but it is totally different.
// The rest operator must be the last formal parameter, you cannot have another parameter after the rest parameter
// That is why it is called the rest operator as it rests at the very end.

const { arrayOf } = require("prop-types");

function addition(...args) {
  console.log(args); //All the arguments combined inside an array; if you remove the dots (...) from parameters
  //the console will show you 1 as it has taken the first argument

  return args.reduce((a, b) => a + b);
}
console.log(addition(1, 5, 4, 3, 2));

// Here's an advanced example

function cartWithDiscount(discount, ...prices) {
  // [20, 30]
  const total = prices.reduce((a, b) => a + b);
  const discounted = total * discount; //Short formula (total * (1- discount))
  return total - discounted;
}
console.log(cartWithDiscount(0.1, 20, 30));

function checkReducer() {
  arr = [0, 1, 2, 3, 4, 5];
  arr.reduce((a, b) => {
    a + b;
  });
}
