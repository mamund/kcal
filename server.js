/* KCAL Project */

var http = require('http');
var url = require('url');
var maintain = require('./maintain.js');
var expend = require('./expend.js');
var deficit = require('./deficit.js');

var port = (process.env.PORT || 1337);

// handle content-type for dev/production
var prodType = 'application/vnd.collection+json';
var devType = 'application/json';
var ctype = {'Content-Type' : devType};

// handle server for dev/production
var prodHost = 'http://kcal.azurewebsites';
var devHost = 'http://localhost:' + port;
var host = devHost;
if(node_env==='production') {
	host = prodHost;
}

// initialize collection object
var collection = {};
collection.href = host + '/';
collection.version = '1.0';
collection.links = [];
collection.items = [];
collection.queries = [];
collection.template = [];

// load up services links
collection.queries = [
	{link : { href : host + '/maintain/', rel : 'maintain'}},
	{link : { href : host + '/deficit/', rel : 'deficit'}},	
	{link : { href : host + '/expend/', rel : 'expend', 
		data : [
			{name : 'w', prompt : 'Weight'},
			{name : 'm', prompt : 'Minutes'},
			{name : 'id', prompt : 'Activity Id'}
		]
	}} 
];

function handler(req, res) {
  // check URI
	var path = url.parse(req.url).pathname;

	switch(path) {
		case '/':
			showRoot(req, res);
			break;
		case '/maintain/':
			showMaintain(req, res);
			break;
		case '/expend/':
		  showExpend(req, res);
			break;
		case '/deficit/':
		  showDeficit(req, res);
			break;
		default:
			showError(req, res, 404, null, 'Invalid URL');
			break;
	}
}

// ***********************************************
// main responders
// ***********************************************
function showRoot(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
		setSelfLink(req);
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showMaintain(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
    var g = maintain.init();
		console.log(g.name);

		setSelfLink(req);
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showExpend(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
		// get args
		var args = url.parse(req.url,true);
		
		if(!args.query.w || !args.query.m || !args.query.id) {
			showError(res, req, 400, null, 'Missing args w or m or id'); 
		}
    else {
			// compute expended calories
			var g = expend.init();
			var act = expend.calc(args.query.w, args.query.m, args.query.id);
    
			// build response
			var item = {};
			item.href = host + req.url;
			item.data = [];
			item.data.push({name : 'id', value : act.id});
			item.data.push({name : 'title', value : act.title});
			item.data.push({name : 'weight', value : args.query.w});
			item.data.push({name : 'minutes', value :args.query.m});
			item.data.push({name : 'factor', value : act.factor});
			item.data.push({name : 'calories', value : act.calories});
			
			collection.items = [];
			collection.items.push(item);
			setSelfLink(req);

			// send out the door
			res.writeHead(200,'OK',ctype);
			res.end(JSON.stringify(collection));	
		}
	}
}

function showDeficit(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
    var g = deficit.init();
		console.log(g.name);
		
		setSelfLink(req);
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showError(req, res, status, code, message) {
	var coll = getEmptyCollection(req);
  coll.error = {};
	if(code) {
		coll.error.code = code;
	}
	if(message) {
		coll.error.message = message;
	}
	setSelfLink(req);
	res.writeHead(status,ctype);
	res.end(JSON.stringify(coll));
}

// ***********************************************
// utility routines
// ***********************************************
function getEmptyCollection(req) {
	var c = {};
	c.href = host + '/';
	c.version = '1.0';
	return c;
}

function setSelfLink(req) {
  var coll, i, x, f;
	
	f = false;
	coll = collection.links;
	for(i=0, x=coll.length; i<x; i++) {
		if(coll[i].link.rel==='self') {
			coll[i].link.href = host + req.url;
			f = true;
			break;
		}
	}
	if(f===false) {
		collection.links.push({link : { href : host + req.url, rel : 'self'}});
	}
}

// bind listener
http.createServer(handler).listen(port);
console.log('running on ' + port);

