// Check if the String is Palindrome or not

/* Program */
// Method: 1 using javaScript inbuild Functions

// function IsPalindromeCase1(str) {
// 	let reverse = str.split("").reverse().join("");
// 	if (str.toLowerCase() === reverse.toLowerCase()) return true;
// 	return false;
// }

// const result1 = IsPalindromeCase1("level");
// console.log(result1);

// =================================================================

// Method: 2 using pure logic

function IsPalindromeCase2(str) {
	let lowerStr = str.toLowerCase();
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (lowerStr[left] !== lowerStr[right]) {
			return false;
		}
		console.log(left, right);
		left++;
		right--;
	}
	return true;
}

const result1 = IsPalindromeCase2("levels");
console.log(result1);
