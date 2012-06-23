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
	res.writeHead(200,'OK',ctype);
	res.end(JSON.stringify(collection));
}

http.createServer(handler).listen(port);
console.log('running on ' + port);
