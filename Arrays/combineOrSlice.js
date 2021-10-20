const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log("concat", combined);

const sliced1 = combined.slice(2, 4);
console.log(sliced1);
// Slice method accepts two parameter.
// 1st is the starting index from
// 2nd is the ending index
// Anything between the two points is sliced.

const combo = [1, 2, 3, 4, 5, 6];
const sliced2 = combo.slice(3);
console.log(sliced2);
// Slice with signle parameter gives you a new array starting from
//the given index(parameter)

const slice = combo.slice();
console.log(slice);

// Slice method without any parameter helps you clone an array
// just like a spread [...] operator.
