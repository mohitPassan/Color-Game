var colors = [
	"rgb(66, 134, 244)",
	"rgb(68, 244, 65)",
	"rgb(214, 244, 65)",
	"rgb(214, 117, 14)",
	"rgb(214, 13, 123)",
	"rgb(145, 5, 5)"
]

var pickedColor = chooseColor();
var squares = document.querySelectorAll(".square");

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			changeColors();
			ansStatus.textContent = "Correct!"
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
