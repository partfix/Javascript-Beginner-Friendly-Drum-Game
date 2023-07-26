//let i = 0 (if i is less than the object) i++ until it will go false
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		alert("hello");
	});
}
