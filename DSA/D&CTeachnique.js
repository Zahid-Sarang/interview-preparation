// Divide and Conquerer Technique
// binary search
// find the index of the given number  in sorted array
// num = 7
// array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// output = 6

// time complexity O(log(n))
// ========================================= Program ============================= //

function SearchElement(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (array[mid] === number) {
      return "Found at " + mid + " position";
    } else if (array[mid] < number) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return "Not Found";
}

const result = SearchElement(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  19
);
console.log(result);
