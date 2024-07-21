// Method: 1
// complexity: O(N^2)
// function twoSum(array, target) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 1; j < array.length; j++) {
// 			if (array[i] + array[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// 	return [];
// }

// const result = twoSum([2, 7, 11, 15], 9);
// console.log(result);

// =================================================================

// method: 2
// complexity: O(N)
function twoSum(nums, target) {
	let indices = {};

	for (i = 0; i < nums.length; i++) {
		let temp = target - nums[i];
		if (indices[temp] !== undefined) {
			return [indices[temp], i];
		}
		indices[nums[i]] = i;
	}
	return [];
}

const result = twoSum([2, 7, 11, 15], 9);
console.log(result);

// temp = target - num[i]
// 9 - 2 = 7
// indices[7] agar hai to return kar do indices[temp] which is index.
