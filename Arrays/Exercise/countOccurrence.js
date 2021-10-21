const numbers = [1, 9, 2, 3, 4, 2, 2];
const number = [1, 9, 2, 3, 4, 2, 2];

const count = countOccurrences(numbers, 2);
console.log(count);

function countOccurrences(array, searchElement) {
  let occurrences = 0;
  for (let elements of array) {
    if (elements === searchElement) occurrences++;
    else occurrences = 1;
  }
  return occurrences;
}

const newInsance = numbers.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(newInsance);

function minMax(myNm) {
  return {
    min: Math.min(...myNm),
    max: Math.max(...myNm),
  };
  // console.log(myNm);
}

console.log(minMax(numbers));

function sorted(array) {
  let sortedItems = array.sort((a, b) => a - b);
  console.log(sortedItems);
  return {
    min: sortedItems[0],
    max: sortedItems.pop(),
  };
}
console.log(sorted(numbers));

function loopingMinMax(array) {
  let mins = array[0];
  let maxs = array[0];
  for (let elements of array) {
    if (elements < mins) {
      console.log("min", elements);
      mins = elements;
    }
    if (elements > maxs) {
      console.log("max", elements);
      maxs = elements;
    }
  }
  return {
    min: mins,
    max: maxs,
  };
}
console.log(loopingMinMax(number));
