const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach((button) => {
	console.log(button);
	button.addEventListener("click", (e) => {
		console.log(e);
		console.log(e.target);
		console.log(e.target.id);

		// if (e.target.id === "black") {
		// 	body.style.backgroundColor = "#040d12";
		// }
		switch (e.target.id) {
			case "black":
				body.style.backgroundColor = "#040d12";
				body.style.color = "#93b1a6";
				button.style.border = "solid #93b1a6 2px";
				break;
			case "dark-green":
				body.style.backgroundColor = "#183d3d";
				body.style.color = "#93b1a6";
				button.style.border = "solid black 2px";
				break;
			case "light-green":
				body.style.backgroundColor = "#5c8374";
				body.style.color = "#040d12";
				break;
			case "phone":
				body.style.backgroundColor = "#93b1a6";
				break;
			default:
				body.style.backgroundColor = "#fff";
		}
	});
});
