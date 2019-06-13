var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var pickedColor = chooseColor();
var squares = document.querySelectorAll(".square");

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			changeColors();
			ansStatus.textContent = "Correct!"
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			ansStatus.textContent = "Try Again!";
		}
	});
}

var rgbDisplay = document.querySelector("#rgbDisplay");
rgbDisplay.textContent = pickedColor.toUpperCase();

function changeColors() {
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function chooseColor() {
	var colorIndex = Math.floor(Math.random() * 6);
	return colors[colorIndex];
}

var ansStatus = document.querySelector("#answerStatus");

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
