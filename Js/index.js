//let i = 0 (if i is less than the document) i++ until it return false

//you can use a ()=>  for a function

//detecting button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		//initialise Object
		let buttonInnerHtml = this.innerHTML; //trigger the element

		makeSound(buttonInnerHtml);

		animation(buttonInnerHtml);
	});
}
//detecting keyboard press
addEventListener("keydown", (pressed) => {
	makeSound(pressed.key);

	animation(pressed.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			let snear = new Audio("sounds/crash.mp3");
			snear.play();
			break;
		case "a":
			let bass = new Audio("sounds/kick-bass.mp3");
			bass.play();
			break;
		case "s":
			let snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "d":
			let tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "j":
			let tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "k":
			let tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "l":
			let tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		default:
			console.log(buttonInnerHtml);
	}
}

function animation(currentkey) {
	let appliedAnimation = document.querySelector("." + currentkey);
	appliedAnimation.classList.add("pressed");
	setTimeout(() => {
		appliedAnimation.classList.remove("pressed");
	}, 200);
}
