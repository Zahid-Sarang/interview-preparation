console.log("Starting");

const randomColor = () => {
	const hex = "012345678910ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
		
	}
	return color;
};

let intervalId;

function changeColor() {
	document.body.style.backgroundColor = randomColor();
}

const startChangingColor = () => {
	if (!intervalId) {
		intervalId = setInterval(changeColor, 1000);
	}
};

const stopChangeColor = () => {
	clearInterval(intervalId);
	intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangeColor);
