// String Anagram
// 'hello' -> 'llleo

// conditions
// => both strings length should be same
// => and both strings number's of letter's should be same

function AnagramString(string1, string2) {
	if (typeof string1 !== "string" || typeof string2 !== "string") {
		return "Not a string";
	}

	if (string1.length !== string2.length) {
		return "Not a Anagram";
	}

	let counter = {};

	for (let letter in string1) {
		counter[letter] = (counter[letter] || 0) + 1;
	}

	for (let item in string2) {
		if (!counter[item]) {
			return "Not a Anagram";
		}

		counter[item] -= 1;
	}

	return "Valid Anagram";
}

const result = AnagramString("hello", "lllhoe");
console.log(result);
