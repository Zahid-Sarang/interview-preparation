// largest sum of consecutive digits
// [1,2,3,4,3,5,4,7,8]
// num = 4
// 5+4+7+8 => total = 25
//
// conditions
// num < array
// number of times for loop will run => array.length - num +1 = 10 - 4 + 1 = 7

// function findLargest(array, num) {
// 	if (num > array.length) {
// 		return false;
// 	}
// 	let max_sum = 0;

// 	for (let i = 0; i < array.length - num + 1; i++) {
// 		let temp = 0;
// 		for (let j = 0; j < num; j++) {
// 			temp += array[i + j];
// 		}
// 		if (temp > max_sum) {
// 			max_sum = temp;
// 		}
// 	}
// 	return max_sum;
// }

// const array = [1, 2, 3, 4, 3, 5, 4, 7, 8,9];
// const num = 4;
// console.log(findLargest(array, num));

// method 2
function largestSum(arr, num) {
	if (num > arr.length) {
		return "invalid";
	}
	let max = 0;
	let temp = 0;
	for (let i = 0; i < num; i++) {
		temp += arr[i];
	}
	max = temp;
	console.log(max);
	for (let i = num; i < arr.length; i++) {
		temp = temp - arr[i - num] + arr[i];
		max = Math.max(max, temp);
	}
	return max;
}

const array = [1, 2, 3, 4, 3, 5, 4, 7, 8];
const num = 4;
console.log(largestSum(array, num));
