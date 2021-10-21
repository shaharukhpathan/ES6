const numbers = [1, 2, 3, 4, 5, 6];

console.log(searched(numbers, 7));

function searched(array, searchBy) {
  for (let element of array) if (element === searchBy) return true;
  return false;
}
