//let i = 0 (if i is less than the document) i++ until it return false
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		//initialise Object
		let audio = new Audio("sounds/crash.mp3");
		audio.play();
		this.style.color = "midnightBlue";
	});
}
