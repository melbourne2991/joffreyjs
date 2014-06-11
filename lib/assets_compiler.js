var _ = require('lodash');
var fs = require('fs');
var Handlebars = require('handlebars');
var root_path = process.cwd();

Handlebars.registerHelper('lowerCase', function(string, options) {
	return string.toLowerCase()
});

module.exports = function(api, module_dir) {
	var path = root_path + '/modules/' + module_dir + '/assets/js/';
	var files = fs.readdirSync(path);

	_.forEach(files, function(file) {
		var ext = file.slice(file.length - 3, file.length);

		if(ext === 'hbs' || ext === 'HBS') {
			var source = fs.readFileSync(path + 'app.js.hbs', {encoding: 'utf8'});
			var template = Handlebars.compile(source);
			var data = {
				moduleName: 'mOdUle'
			}
			var compiled = template(data);
			
			// console.log(compiled);

			var routeObjects = api.stack
			_.forEach(routeObjects, function(routeObject) {
				var route = routeObject.route;
			});
		}
	});
};