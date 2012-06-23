/* calculate expended calories */

var expend = function() {
	
	var g = {};
  g.name = 'expend';

	function init() {
		return g;
	}

	var that;
	that.init = init;
	return that;
}

exports.expend = expend;
