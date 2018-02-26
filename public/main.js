var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt ('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Добро пожаловать на мою тестовую страничку ' + myName ;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Добро пожаловать на мою тестовую страничку '  + storedName;
}
myButton.onclick = function() {
	setUserName();
}





