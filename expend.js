/* calculate expended calories */

var g = {};
g.name = 'expend';

g.activity = [];

function init() {
	fillActivityList();
	return g;
}

function fillActivityList() {
	g.activity = [];
	g.activity.push({id : 'aero1', title : '', factor : 0.044});
	g.activity.push({id : 'aero1', title : '', factor : 0.044});
	g.activity.push({id : 'aero2', title : '', factor : 0.056});
	g.activity.push({id : 'aero3', title : '', factor : 0.032});
	g.activity.push({id : 'aero4', title : '', factor : 0.056});
	g.activity.push({id : 'aero5', title : '', factor : 0.080});
	g.activity.push({id : 'cycle1', title : '', factor : 0.056});
	g.activity.push({id : 'cycle2', title : '', factor : 0.084});
	g.activity.push({id : 'circuit', title : '', factor : 0.064});
	g.activity.push({id : 'row1', title : '', factor : 0.056});
	g.activity.push({id : 'row2', title : '', factor : 0.068});
	g.activity.push({id : 'ski1', title : '', factor : 0.076});
	g.activity.push({id : 'stair1', title : '', factor : 0.048});
	g.activity.push({id : 'weight1', title : '', factor : 0.024});
	g.activity.push({id : 'weight2', title : '', factor : 0.048});
	g.activity.push({id : 'basket1', title : '', factor : 0.064});
	g.activity.push({id : 'basket2', title : '', factor : 0.052});
	g.activity.push({id : 'cycle3', title : '', factor : 0.068});
	g.activity.push({id : 'cycle4', title : '', factor : 0.064});
	g.activity.push({id : 'cycle5', title : '', factor : 0.080});
	g.activity.push({id : 'box1', title : '', factor : 0.072});
	g.activity.push({id : 'foot1', title : '', factor : 0.072});
	g.activity.push({id : 'foot2', title : '', factor : 0.064});
	g.activity.push({id : 'frisbee', title : '', factor : 0.024});
	g.activity.push({id : 'golf1', title : '', factor : 0.044});
	g.activity.push({id : 'golf2', title : '', factor : 0.028});
	g.activity.push({id : 'gymnast', title : '', factor : 0.032});
	g.activity.push({id : 'hball', title : '', factor : 0.096});
	g.activity.push({id : 'hike', title : '', factor : 0.048});
	g.activity.push({id : 'horse', title : '', factor : 0.032});
	g.activity.push({id : 'ice1', title : '', factor : 0.056});
	g.activity.push({id : 'martial', title : '', factor : 0.080});
	g.activity.push({id : 'rball1', title : '', factor : 0.080});
	g.activity.push({id : 'rball2', title : '', factor : 0.056});
	g.activity.push({id : 'climb1', title : '', factor : 0.088});
	g.activity.push({id : 'climb2', title : '', factor : 0.064});
	g.activity.push({id : 'roller1', title : '', factor : 0.056});
	g.activity.push({id : 'rope', title : '', factor : 0.080});
	g.activity.push({id : 'run1', title : '', factor : 0.064});
	g.activity.push({id : 'run2', title : '', factor : 0.072});
	g.activity.push({id : 'run3', title : '', factor : 0.080});
	g.activity.push({id : 'run4', title : '', factor : 0.088});
	g.activity.push({id : 'run5', title : '', factor : 0.100});
	g.activity.push({id : 'run6', title : '', factor : 0.116});
	g.activity.push({id : 'run7', title : '', factor : 0.132});
	g.activity.push({id : 'run8', title : '', factor : 0.064});
	g.activity.push({id : 'run9', title : '', factor : 0.072});
	g.activity.push({id : 'ski2', title : '', factor : 0.064});
	g.activity.push({id : 'ski3', title : '', factor : 0.048});
	g.activity.push({id : 'snshoe', title : '', factor : 0.064});
	g.activity.push({id : 'softball', title : '', factor : 0.040});
	g.activity.push({id : 'swim1', title : '', factor : 0.048});
	g.activity.push({id : 'tennis1', title : '', factor : 0.056});
	g.activity.push({id : 'volley1', title : '', factor : 0.024});
	g.activity.push({id : 'volley2', title : '', factor : 0.032});
	g.activity.push({id : 'volley3', title : '', factor : 0.064});
	g.activity.push({id : 'walk1', title : '', factor : 0.032});
	g.activity.push({id : 'walk2', title : '', factor : 0.036});
	g.activity.push({id : 'walk3', title : '', factor : 0.040});
	g.activity.push({id : 'walk4', title : '', factor : 0.048});
	g.activity.push({id : 'ski4', title : '', factor : 0.048});
	g.activity.push({id : 'polo', title : '', factor : 0.080});
	g.activity.push({id : 'whitewater', title : '', factor : 0.040});
	g.activity.push({id : 'wood', title : '', factor : 0.048});
	g.activity.push({id : 'garden', title : '', factor : 0.036});
	g.activity.push({id : 'clean', title : '', factor : 0.028});
	g.activity.push({id : 'mow1', title : '', factor : 0.044});
	g.activity.push({id : 'mow2', title : '', factor : 0.036});
	g.activity.push({id : 'snow1', title : '', factor : 0.036});
	g.activity.push({id : 'games', title : '', factor : 0.040});
	g.activity.push({id : 'lawn', title : '', factor : 0.032});
	g.activity.push({id : 'sex', title : '', factor : 0.012});
	g.activity.push({id : 'snow2', title : '', factor : 0.048});	
}

function calc(weight, minutes, id)
{
	var cal, act;

	act = getActivity(id);
	cal = (Math.round(weight * minutes * act.factor));
	act.calories = cal;
	return act;
}

function getActivity(id) {
	var coll, i, x, act;

	coll = g.activity;
	for(i=0, x=coll.length; i<x; i++) {
		if(coll[i].id===id) {
			act = coll[i];
			console.log(act);
			break;
		}
	}
	return act;
}

// exports
exports.calc = calc;
exports.init = init;

