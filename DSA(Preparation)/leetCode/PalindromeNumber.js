function IsPalindrome(x) {
	let reverse = 0;
	let valCopy = x;

	while (valCopy > 0) {
		let digit = valCopy % 10;
		reverse = reverse * 10 + digit;
		valCopy = ~~(valCopy / 10);
		console.log(valCopy);
	}
	return reverse === x;
}

const number = 121;
console.log(IsPalindrome(number));
