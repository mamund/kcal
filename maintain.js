/* maintence weight calculator */

var maintain = function() {
	
	var g = {};
	g.name = 'maintain';

	function init() {
		return g;
	}

	var that;
	that.init = init;
	return that;
}

exports.maintain = maintain;
