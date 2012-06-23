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
	g.activity.push({id : 'aero1', title : 'Aerobics: low impact', factor : 0.044});
	g.activity.push({id : 'aero2', title : 'Aerobics: high impact', factor : 0.044});
	g.activity.push({id : 'aero3', title : 'Aerobics, Step: low impact', factor : 0.056});
	g.activity.push({id : 'aero4', title : 'Aerobics, Step: high impact', factor : 0.032});
	g.activity.push({id : 'aero5', title : 'Aerobics: water', factor : 0.080});
	g.activity.push({id : 'cycle1', title : 'Bicycling, Stationary: moderate', factor : 0.056});
	g.activity.push({id : 'cycle2', title : 'Bicycling, Stationary: vigorous', factor : 0.084});
	g.activity.push({id : 'circuit', title : 'Circuit Training: general', factor : 0.064});
	g.activity.push({id : 'row1', title : 'Rowing, Stationary: moderate', factor : 0.056});
	g.activity.push({id : 'row2', title : 'Rowing, Stationary: vigorous', factor : 0.068});
	g.activity.push({id : 'ski1', title : 'Ski Machine: general', factor : 0.076});
	g.activity.push({id : 'stair1', title : 'Stair Step Machine: general', factor : 0.048});
	g.activity.push({id : 'weight1', title : 'Weight Lifting: general', factor : 0.024});
	g.activity.push({id : 'weight2', title : 'Weight Lifting: vigorous', factor : 0.048});
	g.activity.push({id : 'basket1', title : 'Basketball: playing a game', factor : 0.064});
	g.activity.push({id : 'basket2', title : 'Basketball: wheelchair', factor : 0.052});
	g.activity.push({id : 'cycle3', title : 'Bicycling: BMX or mountain', factor : 0.068});
	g.activity.push({id : 'cycle4', title : 'Bicycling: 12-13.9 mph', factor : 0.064});
	g.activity.push({id : 'cycle5', title : 'Bicycling: 14-15.9 mph', factor : 0.080});
	g.activity.push({id : 'box1', title : 'Boxing: sparring', factor : 0.072});
	g.activity.push({id : 'foot1', title : 'Football: competitive', factor : 0.072});
	g.activity.push({id : 'foot2', title : 'Football: touch, flag, general', factor : 0.064});
	g.activity.push({id : 'frisbee', title : 'Frisbee', factor : 0.024});
	g.activity.push({id : 'golf1', title : 'Golf: carrying clubs', factor : 0.044});
	g.activity.push({id : 'golf2', title : 'Golf: using cart', factor : 0.028});
	g.activity.push({id : 'gymnast', title : 'Gymnastics: general', factor : 0.032});
	g.activity.push({id : 'hball', title : 'Handball: general', factor : 0.096});
	g.activity.push({id : 'hike', title : 'Hiking: cross-country', factor : 0.048});
	g.activity.push({id : 'horse', title : 'Horseback Riding: general', factor : 0.032});
	g.activity.push({id : 'ice1', title : 'Ice Skating: general', factor : 0.056});
	g.activity.push({id : 'martial', title : 'Martial Arts: general', factor : 0.080});
	g.activity.push({id : 'rball1', title : 'Racquetball: competitive', factor : 0.080});
	g.activity.push({id : 'rball2', title : 'Racquetball: casual, general', factor : 0.056});
	g.activity.push({id : 'climb1', title : 'Rock Climbing: ascending', factor : 0.088});
	g.activity.push({id : 'climb2', title : 'Rock Climbing: repelling', factor : 0.064});
	g.activity.push({id : 'roller1', title : 'Rollerblade Skating', factor : 0.056});
	g.activity.push({id : 'rope', title : 'Rope Jumping', factor : 0.080});
	g.activity.push({id : 'run1', title : 'Running: 5 mph (12 min/mile)', factor : 0.064});
	g.activity.push({id : 'run2', title : 'Running: 5.2 mph (11.5 min/mile)', factor : 0.072});
	g.activity.push({id : 'run3', title : 'Running: 6 mph (10 min/mile)', factor : 0.080});
	g.activity.push({id : 'run4', title : 'Running: 6.7 mph (9 min/mile)', factor : 0.088});
	g.activity.push({id : 'run5', title : 'Running: 7.5 mph (8 min/mile)', factor : 0.100});
	g.activity.push({id : 'run6', title : 'Running: 8.6 mph (7 min/mile)', factor : 0.116});
	g.activity.push({id : 'run7', title : 'Running: 10 mph (6 min/mile)', factor : 0.132});
	g.activity.push({id : 'run8', title : 'Running: pushing wheelchair, marathon wheeling', factor : 0.064});
	g.activity.push({id : 'run9', title : 'Running: cross-country', factor : 0.072});
	g.activity.push({id : 'ski2', title : 'Skiing: cross-country', factor : 0.064});
	g.activity.push({id : 'ski3', title : 'Skiing: downhill', factor : 0.048});
	g.activity.push({id : 'snshoe', title : 'Snow Shoeing', factor : 0.064});
	g.activity.push({id : 'softball', title : 'Softball: general play', factor : 0.040});
	g.activity.push({id : 'swim1', title : 'Swimming: general', factor : 0.048});
	g.activity.push({id : 'tennis1', title : 'Tennis: general', factor : 0.056});
	g.activity.push({id : 'volley1', title : 'Volleyball: non-competitive, general play', factor : 0.024});
	g.activity.push({id : 'volley2', title : 'Volleyball: competitive, gymnasium play', factor : 0.032});
	g.activity.push({id : 'volley3', title : 'Volleyball: beach', factor : 0.064});
	g.activity.push({id : 'walk1', title : 'Walk: 3.5 mph (17 min/mi)', factor : 0.032});
	g.activity.push({id : 'walk2', title : 'Walk: 4 mph (15 min/mi)', factor : 0.036});
	g.activity.push({id : 'walk3', title : 'Walk: 4.5 mph (13 min/mi)', factor : 0.040});
	g.activity.push({id : 'walk4', title : 'Walk/Jog: jog <10 min.', factor : 0.048});
	g.activity.push({id : 'ski4', title : 'Water Skiing', factor : 0.048});
	g.activity.push({id : 'polo', title : 'Water Polo', factor : 0.080});
	g.activity.push({id : 'whitewater', title : 'Whitewater: rafting, kayaking', factor : 0.040});
	g.activity.push({id : 'wood', title : 'Chopping & Splitting Wood', factor : 0.048});
	g.activity.push({id : 'garden', title : 'Gardening: general', factor : 0.036});
	g.activity.push({id : 'clean', title : 'Housecleaning: general', factor : 0.028});
	g.activity.push({id : 'mow1', title : 'Mowing Lawn: push, hand', factor : 0.044});
	g.activity.push({id : 'mow2', title : 'Mowing Lawn: push, power', factor : 0.036});
	g.activity.push({id : 'snow1', title : 'Operate Snow Blower: walking', factor : 0.036});
	g.activity.push({id : 'games', title : 'Children\'s Games: 4-square, etc.', factor : 0.040});
	g.activity.push({id : 'lawn', title : 'Raking Lawn', factor : 0.032});
	g.activity.push({id : 'sex', title : 'Sex: moderate effort', factor : 0.012});
	g.activity.push({id : 'snow2', title : 'Shoveling Snow: by hand', factor : 0.048});	
}

function calc(weight, minutes, id)
{
	var act;
	act = getActivity(id);

	// append state data
	if(act) {
		act.calories = (Math.round(weight * minutes * act.factor));
		act.weight = weight;
		act.minutes = act.minutes;
	}
	return act;
}

function getActivity(id) {
	var coll, i, x, act;

	coll = g.activity;
	for(i=0, x=coll.length; i<x; i++) {
		if(coll[i].id===id) {
			act = coll[i];
			break;
		}
	}
	return act;
}

// exports
exports.calc = calc;
exports.init = init;

