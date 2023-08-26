/* sum of zero */

/* Input: [-5,-4,-3,-2,0,2,4,6,8] */

//========== Solution 1st =============//

// function getSumOfzero(array) {
//   for (let number of array) {
//     for (let j = 1; j < array.length; j++) {
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }

// const result = getSumOfzero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// complexity o(n^2)

//========== Solution 2st =============//

// function getSumOfPairZero(array){
//     let left = 0;
//     let right = array.length -1;

//     while(left < right){
//         let sum = array[left] + array[right];
//         if(sum === 0){
//             return [array[left],array[right]];
//         }else if (sum > 0){
//             right --;
//         }else {
//             left ++;
//         }
//     }
// }

//  const result = getSumOfPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// complexity is o(n)

//========== Solution 3rd =============//

function findAllPairsWithZeroSum(array) {
  // sort the array on ascending order
  array.sort((a,b)=> a - b);

  let left = 0;
  let right = array.length - 1;
  let pairs = [];

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      pairs.push([array[left], array[right]]);
      left++;
      right--;
    }else if (sum < 0){
        left++
    }else {
        right --;
    }
  }
  return pairs
}

// let array = [5,10,3,2,1,-10,-3,-7,7];
let array = [-10, -7, -3, 1, 2, 3, 5, 7, 10];
console.log(findAllPairsWithZeroSum(array));

// This code will return all pairs in the array that sum up to zero.
// The time complexity is O(n log n) for the sort operation,
// and O(n) for the while loop, which simplifies to O(n log n) in Big O notation
// as it's the dominant term.
