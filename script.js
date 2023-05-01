// function countChars(obj) {
//   document.getElementById("letterCount").innerHTML = obj.value.length;
// }
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener('input', () => {
	let str = evaluatedText.value;
	letterCount.innerHTML = `${str.length}`;
});