// Method 1 --------------------------------------

const numbers = [1, 2, 3, 16, 4, 20, 5, 6];

const max = getMax(numbers);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  let maxi = array[0];

  for (let i = 1; i < array.length; i++) if (array[i] > maxi) maxi = array[i];
  return maxi;
  //   let max = Math.max(...array);
  //   return max;
}

// Method 2-------------------------------------------

const numbers2 = [1, 5, 4, 7, 2, 3, 45, 90, 2];

const max2 = getMax2(numbers2);
console.log(max2);

function getMax2(array) {
  if (array.length === 0) return undefined;

  //   array.reduce((a, b) => {
  //     if (a > b) return a;
  //     return b;
  //   });
  array.reduce((a, b) => {
    return a > b ? a : b;
  });
}
