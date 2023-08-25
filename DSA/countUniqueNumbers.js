// count unique Numbers

// input => [1,1,2,2,3,4,4,5,6,7,8,8,9,9,9]
// output => 9

// logic to solve
// -> i=0, j=1
// -> array[i] !== array[j]
// -> i++
// -> array[i] = array[j]

// ==== Program =============================================== //

function findUniqueNumbers(array) {
  if (array.length) {
    let i = 0;
    for (let j = 1; j < array.length - 1; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  }
  throw new Error("Array is empty");
}

const result = findUniqueNumbers([
  1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9, 10, 10,
]);
console.log(result);
// ================================================================================== //

// the time complexity is linear means O(n)
