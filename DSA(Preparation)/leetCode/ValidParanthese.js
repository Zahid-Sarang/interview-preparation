// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// function isValid(s) {
// 	let stack = [];

// 	for (idx = 0; idx < str.length; idx++) {
// 		let chr = s.charAt(idx);
// 		switch (chr) {
// 			case "{":
// 				stack.push("}");
// 				break;
// 			case "[":
// 				stack.push("]");
// 				break;
// 			case "(":
// 				stack.push(")");
// 				break;
// 			default:
// 				if (chr !== stack.pop()) {
// 					return false;
// 				}
// 		}
// 	}
// 	return !stack.length;
// }

// const parenthesis = "()[]{}{{}}";
// console.log(isValid(parenthesis));

// optimize solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let map = {
		"{": "}",
		"[": "]",
		"(": ")",
	};
	let splitted = s.split("");
	let stack = [];

	for (let i = 0; i < splitted.length; i++) {
		if (map[splitted[i]]) {
			const pop = stack.push(splitted[i]);
			console.log(splitted[i]);
		} else {
			let lastOpenedBracket = stack.pop();

			if (map[lastOpenedBracket] !== splitted[i]) {
				return false;
			}
		}
	}

	return stack.length === 0;
};

const parenthesis = "(){}[]";
console.log(isValid(parenthesis));
