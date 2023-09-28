let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("button");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		const guess = parseInt(userInput.value);
		console.log(guess);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert("Please enter a valid number");
	} else if (guess < 1) {
		alert("Please enter a number more than 1");
	} else if (guess > 100) {
		alert("Please enter a number less than 100");
	} else {
		prevGuess.push(guess);
		if (numGuess === 10 || prevGuess.length === 10) {
			displaGuess(guess);
			displayMessage(`Game Over. Random number was : ${randomNumber}`);
			endGame();
		} else {
			displaGuess(guess);
			checkGuess(guess);
		}
	}
}

function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`You guessed it right`);
		endGame();
	} else if (guess < randomNumber) {
		displayMessage("Number is to low");
	} else if (guess > randomNumber) {
		displayMessage("Number is to high");
	}
}

function displaGuess(guess) {
	userInput.value = "";
	guessSlot.innerHTML += `${guess} , `;
	numGuess++;
	remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
	lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
	userInput.value = "";
	userInput.setAttribute("disabled", "");
	p.classList.add("button");
	p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
	startOver.appendChild(p);
	playGame = false;
	newGame();
}

function newGame() {
	const newGameButton = document.querySelector("#newGame");
	newGameButton.addEventListener("click", function (e) {
		randomNumber = parseInt(Math.random() * 100 + 1);
		prevGuess = [];
		newGuess = 1;
		guessSlot.innerHTML = "";
		remaining.innerHTML = `${10 - numGuess}`;
		userInput.removeAttribute("disabled");
		startOver.removeChild(p);

		playGame = true;
	});
}
