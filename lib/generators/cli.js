var fs 				= require('fs');
var Handlebars 		= require('handlebars');
var build     	= require('./build');
var args    		  = process.argv.slice(2, process.argv.length);
var command 		  = args[0];
var type    		  = args[1];
var gen_args    	  = args.slice(2, args.length);

if(!build[command]) {
	console.log(command + ' is not a valid command');
} else if (!build[command][type] && command === 'build') {
	console.log(type + ' is not a valid generator type.')
} else {
	build[command][type](gen_args);
}
