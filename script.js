//Variables
var noOfSquares;
var colors = [];
var pickedColor ;

//Selectors
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");
var ansStatus = document.querySelector("#answerStatus");
resetButton.addEventListener("click", reset);

init();

function init() {
	noOfSquares = 6;
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for(var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy")
				noOfSquares = 3;
			else
				noOfSquares = 6;
			reset();
		});
	}
}
	

function reset() {
	colors = generateRandomColors(noOfSquares);
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	pickedColor = chooseColor();
	rgbDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	ansStatus.textContent = "";
}


function setUpSquares() {
	for(var i=0; i<squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				changeColors();
				ansStatus.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				ansStatus.textContent = "Try Again!";
			}
		});
	}
}

function changeColors() {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function chooseColor() {
	var colorIndex = Math.floor(Math.random() * noOfSquares);
	return colors[colorIndex];
}

function generateRandomColors(numOfColors) {
	var arr = [];
	for(var i=0; i<numOfColors; i++) {
		arr.push(getColor());
	}
	return arr;
}

function getColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
