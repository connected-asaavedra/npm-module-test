var Counter = require('./Counter.js');

console.log('in Referee.js: ');
new Counter().print();
console.log('-----done');

var Referee = function() {
	console.log('init of referee');
	this.print = function() {
		console.log('print in referee: Counter.counter ', Counter.count);
		console.log('print in referee: Counter.print', new Counter().print());
	};

};

module.exports = new Referee();
