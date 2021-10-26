//Concating two arrays with spread operator

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);
//the above console returns a new array with individual elements
// from both arrays: [ 1, 2, 3, 4, 5, 6 ]

//if you don't use the spread operator, the console returns the
//arrays not individual elements: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

//It also works like


