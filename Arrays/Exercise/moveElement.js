const numbers = [1, 2, 3, 4];
const output = move(numbers, 2, -2);

console.log(output);

function move(array, index, offset) {
  const newOffset = index + offset;
  if (newOffset >= array.length || newOffset < 0) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...numbers];
  const elements = output.splice(index, 1)[0];
  output.splice(index + offset, 0, elements);
  return output;
}
