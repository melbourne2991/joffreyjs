var fs = require('fs');
var Handlebars = require('handlebars');
var gen = require('./gen');
var args = process.argv.slice(2, process.argv.length);
var command = args[0];
var type = args[1];
var gen_args = args.slice(2, args.length);
if (!gen[command]) {
    console.log(command + ' is not a valid command');
} else if (!gen[command][type] && command === 'generate') {
    console.log(type + ' is not a valid generator type.');
} else {
    gen[command][type](gen_args);
}