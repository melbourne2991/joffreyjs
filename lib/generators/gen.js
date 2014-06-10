var fs = require('fs');
var _ = require('lodash');
var cheerio = require('cheerio');
var root_path = process.cwd();
var modules_path = root_path + '/modules/';

module.exports = {};
module.exports.generate = {};

module.exports.generate.module = function(args) {
	_.forEach(args, function(module_name) {
		fs.mkdir(modules_path + module_name, function() {
			
		});
	});
};
modules_path = __dirname + '/../../modules/';