function createCounter() {
	var count = 0;
	function increment() {
		count++;
		console.log(count);
	}
	return increment;
}

var addOne = createCounter();