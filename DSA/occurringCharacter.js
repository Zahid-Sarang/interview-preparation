// Fin the Maximum Ocuuring Character in a string
// input => "Hello world"
// output => l

/*  Program  */

function getCharacter(str) {
	let map = {};
	str.split("").forEach((element) => {
		map[element] = map[element] ? map[element] + 1 : 1;
	});

	let max = 1;
	let character = str[0];

	for (let k in map) {
		if (map[k] > max) {
			max = map[k];
			character = k;
		}
	}
	return character;
}

const result = getCharacter("Zahid Parvez Sarang");
console.log(result);
