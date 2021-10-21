const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(except(numbers, [2, 3]));

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;

  // {
  //   if (!array.elements.includes(excluded)) {
  //     output.push(elements);
  //   }
  // }
  // return output;
}
