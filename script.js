function createCounter(button) {
	var count = 0;
	function increment() {
		count++;
		button.textContent = 'Clicked ' + count + ' times';
	}
	button.addEventListener('click', increment);
	return increment;
}

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
	createCounter(buttons[i]);
}