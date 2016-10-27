var clicked = false;
var button = document.querySelector(".bars");
button.addEventListener('click', function() {
	clicked = !clicked;
	if (clicked) {
		document.getElementById("slideout").style.width = "100vw";
		document.getElementById("slideout").style.background = "black";
		document.getElementById("slideout").style.opacity = "0.5";
	}
	if (!clicked) {
		document.getElementById("slideout").style.width = "0px";
	}
})