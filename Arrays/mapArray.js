//This is mehtod is used to map each item in an array to something else.

//For ex. if there is an array of objects and you need to create card using that array.
//You can use map to create a anything with each object (card).
//If you create a single card, it will create as many cards as the objects present in the
//given array
//There are many other many other reasons too.

const numbers = [1, 2, 3, -3, -2, 4, 5, 6];

const mapped1 = numbers.filter((kuchbhi) => kuchbhi >= 0);

console.log("1--", mapped1);

const mapped2 = mapped1.map((items) => "<li>" + items + "</li>");

console.log("2--", mapped2);

// const html = "<ul>" + mapped2.join("") + "</ul>";
// console.log(html);

const mapped3 = mapped1.map((items) => {
  const obj = {
    value: items,
  };
  return obj;
});
console.log("3--", mapped3); //This console returns as many objects as elements
//present in MAPPED1.

//------------------Optimised--------------

const mapped4 = mapped1.map((n) => ({ value: n }));
console.log("4--", mapped4);

//Both the filter and map return a new array. They don't modify the original array.
