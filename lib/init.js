var bootstrapper = require('./bootstrap');
var assets_compiler = require('./assets_compiler');
var route_wrapper = require('./route_wrapper');

var Joffrey = {}

Joffrey.bootstrapper = bootstrapper;
Joffrey.assetsCompiler = assets_compiler;
Joffrey.moduleRouter = route_wrapper;

module.exports = Joffrey;