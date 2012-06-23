/* KCAL Project */

var http = require('http');
var port = (process.env.HTTP || 1337);

// handle content-type for dev/production
var prodType = 'application/vnd.collection+json';
var devType = 'application/json';
var ctype = {'Content-Type' : devType};

// handle server for dev/production
var prodHost = 'http://localhost';
var devHost = 'http://localhost:' + port;
var host = devHost;

// initialize collection object
var collection = {};
collection.href = '/';
collection.version = '1.0';
collection.links = [];
collection.items = [];
collection.queries = [];
collection.template = [];

// load up services links
collection.links = [
	{link : { href : host + '/maintain/', rel : 'maintain'}},
	{link : { href : host + '/expend/', rel : 'expend'}}, 
  {link : { href : host + '/deficit/', rel : 'deficit'}}	
];

function handler(req, res) {
  // check URI
	var url = req.url;
	switch(url) {
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

function showRoot(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showMaintain(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showExpend(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
		res.writeHead(200,'OK',ctype);
		res.end(JSON.stringify(collection));	
	}
}

function showDeficit(req, res) {
	if(req.method !== 'GET') {
		showError(req, res, 415, null, req.method + ' not allowed here');
	}
	else {
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
	res.writeHead(status,ctype);
	res.end(JSON.stringify(coll));
}

function getEmptyCollection(req) {
	var c = {};
	c.href = host + '/';
	c.version = '1.0';
	return c;
}

http.createServer(handler).listen(port);
console.log('running on ' + port);

