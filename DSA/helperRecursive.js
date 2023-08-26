// Helper Recursive Function
// input = [1,2,3,4,5,6,7,8,9,10]
// output = [1,3,5,7,9]

// ================================================ Program ================================================//

function findOdd(array) {
  let oddNumber = [];
  function helperRecursive(inputArray) {
    if (inputArray.length === 0) {
      return "Array is empty";
    }
    if (inputArray[0] % 2 !== 0) {
      oddNumber.push(inputArray[0]);
    }
    helperRecursive(inputArray.slice(1)); // recursive calling
  }
  helperRecursive(array); // 1st time call
  return oddNumber
}

const result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);
