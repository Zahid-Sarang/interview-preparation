// let amount = 100;
// let totalApple = 0;

// function buyApple(amount) {
// 	if (amount > 0) {
// 		buyMore(amount);
// 	} else {
// 		console.log("totalApple is", totalApple);
// 	}
// }

// function buyMore(amount) {
// 	totalApple++;
// 	buyApple(amount - 10);
// }

// buyApple(amount);

// perctice question

function recursion(x) {
	if (x > 0) {
		recursion(x - 1);
	}
	console.log(x);
}
let data = 5;
recursion(data);
