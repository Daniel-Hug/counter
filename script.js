function createCounter(button) {
	var count = 0;
	function increment() {
		count++;
		console.log(count);
	}
	button.addEventListener('click', increment);
	return increment;
}

var button = document.querySelector('button');
var addOne = createCounter(button);