// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

function duplicateArray(nums) {
	let map = {};

	for (let value of nums) {
		map[value] = (map[value] || 0) + 1;
	}

	for (key in map) {
		if (map[key] >= 2) {
			return true;
		} else {
			return false;
		}
	}
}

const nums = [2, 14, 18, 22, 22];
const result = duplicateArray(nums);
console.log(result);
