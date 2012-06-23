/* calculate expended calories */

var g = {};
g.name = 'expend';

g.activity = [];

function init() {
	fillActivityList();
	return g;
}
/*
Bicycling, Stationary: moderate	 
Bicycling, Stationary: vigorous	 	
Circuit Training: general	 
Rowing, Stationary: moderate	 	
Rowing, Stationary: vigorous	 
Ski Machine: general	 	
Stair Step Machine: general	 
Weight Lifting: general	 	
Weight Lifting: vigorous	 
Basketball: playing a game	 	
Basketball: wheelchair	 
Bicycling: BMX or mountain	 	
Bicycling: 12-13.9 mph	 
Bicycling: 14-15.9 mph	 	
Boxing: sparring	 
Football: competitive	 	
Football: touch, flag, general	 
Frisbee	 	Golf: carrying clubs	 
Golf: using cart	 	
Gymnastics: general	 
Handball: general	 	
Hiking: cross-country	 
Horseback Riding: general	 	
Ice Skating: general	 
Martial Arts: general	 	
Racquetball: competitive	 
Racquetball: casual, general	 	
Rock Climbing: ascending	 
Rock Climbing: repelling	 	
Rollerblade Skating	 
Rope Jumping	 	
Running: 5 mph (12 min/mile)	 
Running: 5.2 mph (11.5 min/mile)	 	
Running: 6 mph (10 min/mile)	 
Running: 6.7 mph (9 min/mile)	 	
Running: 7.5 mph (8 min/mile)	 
Running: 8.6 mph (7 min/mile)	 	
Running: 10 mph (6 min/mile)	 
Running: pushing wheelchair, marathon wheeling	 	
Running: cross-country	 
Skiing: cross-country	 	
Skiing: downhill	 
Snow Shoeing	 	
Softball: general play	 
Swimming: general	 	
Tennis: general	 
Volleyball: non-competitive, general play	 	
Volleyball: competitive, gymnasium play	 
Volleyball: beach	 	
Walk: 3.5 mph (17 min/mi)	 
Walk: 4 mph (15 min/mi)	 	
Walk: 4.5 mph (13 min/mi)	 
Walk/Jog: jog <10 min.	 	
Water Skiing	 
Water Polo	 	
Whitewater: rafting, kayaking	 
Chopping & Splitting Wood	 	
Gardening: general	 
Housecleaning: general	 	
Mowing Lawn: push, hand	 
Mowing Lawn: push, power	 	
Operate Snow Blower: walking	 
Children's Games: 4-square, etc.	 	
Raking Lawn	 
Sex: moderate effort	 	
Shoveling Snow: by hand
*/
function fillActivityList() {
	g.activity = [];
	g.activity.push({id : 'aero1', title : 'Aerobics: low impact', factor : 0.044});
	g.activity.push({id : 'aero2', title : 'Aerobics: high impact', factor : 0.044});
	g.activity.push({id : 'aero3', title : 'Aerobics, Step: low impact', factor : 0.056});
	g.activity.push({id : 'aero4', title : 'Aerobics, Step: high impact', factor : 0.032});
	g.activity.push({id : 'aero5', title : 'Aerobics: water', factor : 0.080});
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

