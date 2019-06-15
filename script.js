var noOfSquares = 6;
var colors = generateRandomColors(noOfSquares);
var h1 = document.querySelector("h1");
var pickedColor = chooseColor();
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#resetButton");
var rgbDisplay = document.querySelector("#rgbDisplay");
var easyButton = document.querySelector("#easyB");
var hardButton = document.querySelector("#hardB");
var ansStatus = document.querySelector("#answerStatus");

easyButton.addEventListener("click", function() {
	noOfSquares = 3;
	colors = generateRandomColors(noOfSquares);
	pickedColor = chooseColor();
	rgbDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	ansStatus.textContent = "";
});

hardButton.addEventListener("click", function() {
	noOfSquares = 6;
	colors = generateRandomColors(noOfSquares);
	pickedColor = chooseColor();
	rgbDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	ansStatus.textContent = "";
});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(noOfSquares);
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = chooseColor();
	rgbDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	ansStatus.textContent = "";
});

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

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

rgbDisplay.textContent = pickedColor;

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
