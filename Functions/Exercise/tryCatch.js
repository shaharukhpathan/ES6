try {
  const numbers = [1, 2, 3, 4, 5];

  const count = countOccurrences(null, 2); //This line is going to cause an exception. null is not an array here.
  console.log(count);
} catch (e) {
  console.log(e.message);
}
function countOccurrences(array, searchBy) {
  if (!Array.isArray(array)) throw new Error("Not a valid array");
  return array.reduce(function (a, b) {
    const occurrences = b === searchBy ? 1 : 0;
    return occurrences + a;
  }, 0);
}
