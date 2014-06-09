var bootstrap	= require('./lib/bootstrap');
var express 	= require('express');
var server 		= express();
// var api 	= require('./api/app')(express);

server.set('view engine', 'jade');
server.set('views', __dirname + '/views');

bootstrap.moduleRoutes(server, express);

server.get('/', function(req, res) {
	res.render('index');
});

bootstrap.moduleStatics(server, express);

server.use(express.static(__dirname + '/public'));

if(server.listen(3000))
	console.log('server listening on port: 3000');
