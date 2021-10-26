//The below two methods are good to sort numbers and strings in the Arrays

//Ascending order

const numbers = [1, 3, 4, 2, 6, 5];

const sorted = numbers.sort(); //converts the elements into a string and sorts the array

console.log(sorted);

//Descending order

const reversed = numbers.reverse();

console.log(reversed);

const courses = [
  { id: 3, name: "zfg" },
  { id: 1, name: "Hij" },
  { id: 2, name: "abc" },
  { id: 4, name: "xfg" },
];

//Notes: if the substraction of parameters (a, b) in sort method returns
// Negative Value: Descending
// Positive Value: Ascending
// 0 Value: Neutral

courses.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === => 0

  //   algorithm is based on ascii: American standard code information interchange

  const nameA = a.name.toUpperCase(); //either upperCase or lower case on both conditions
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log("Yo-Yo", courses);
