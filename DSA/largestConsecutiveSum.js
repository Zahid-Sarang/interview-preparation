// largest sum of consecutive digits
// [1,2,3,4,3,5,4,7,8]
// num = 4
// 5+4+7+8 => total = 25

// conditions
// num < array
// number of times for loop will run => array.length - num +1 = 10 - 4 + 1 = 7

// ================================== Program ============================================== //

function largestConsecutiveSum(array, num) {
  if (num > array) {
    throw new Error("Number should not be greater than array");
  } else {
    let max_sum = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if(temp>max_sum){
        max_sum = temp;
      }
    }
    return max_sum;
  }
}

const result = largestConsecutiveSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("Result====>", result);
