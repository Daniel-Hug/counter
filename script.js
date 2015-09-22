function createCounter(button) {
	var count = 0;
	function increment() {
		count++;
		button.textContent = 'Clicked ' + count + ' times';
	}
	button.addEventListener('click', increment);
	return increment;
}

var button = document.querySelector('button');
var addOne = createCounter(button);