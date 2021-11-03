function sum(...items) {
  //   console.log(arguments);
  return items.reduce((a, b) => a + b);
}
console.log(sum(12, 4, 5, 7, 32));

//-------------------------------------------------------------------------

//What if an array is passed as an argument? You get the exact array not their sum
function sum2(...items) {
  //   console.log(items); //You can see, items is an array of arrays here: rest operator puts items in an array
  //Explained: items as an array inside an array of parameters. How to solve:
  if (items.length === 1 && Array.isArray(items[0])) newItems = [...items[0]];
  return newItems.reduce((a, b) => a + b);
}
console.log(sum2([15, 4, 12, 7, 8]));

// So we have checked, if the length is 1 and the first item is an array or not. If our both conditions are true,
// the functions will worl well.

// We have used spread operator to store the 0 indexed value of original array in a new variable.

// Applied the redued method to the new variable
