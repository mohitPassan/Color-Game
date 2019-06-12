var colors = [
	"rgb(66, 134, 244)",
	"rgb(68, 244, 65)",
	"rgb(214, 244, 65)",
	"rgb(214, 117, 14)",
	"rgb(214, 13, 123)",
	"rgb(145, 5, 5)",
]

var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");

for(var i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			alert("correct");
		} else {
			alert("wrong");
		}
	});
}

var rgbDisplay = document.querySelector("#rgbDisplay");
rgbDisplay.textContent = pickedColor.toUpperCase();