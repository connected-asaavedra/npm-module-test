
var Counter = function () {
	console.log('init of counter');
	var count = 5;
	this.print = function() {
		console.log('print: ', count);
		count += 1;
	};
};

module.exports = Counter;
