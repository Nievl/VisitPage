var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt ('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = myHeading.innerHTML + myName ;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = myHeading.innerHTML + storedName;
}
myButton.onclick = function() {
	setUserName();
}





