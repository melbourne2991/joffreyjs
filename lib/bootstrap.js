var _ = require('lodash');
var fs = require('fs');
var assetsCompiler = require('./assets_compiler');

var doesExist = function (path) {
    try {
        fs.openSync(path, 'r');
        return true;
    } catch (e) {
        if (e && e.errno === 34) {
            console.log('WARNING: Module ' + path + ' could not be found.');
        } else if (e) {
            throw e;
        }
        return false;
    }
};
var loopModules = function (server, express, cb) {
    _.forEach(fs.readdirSync('./modules'), function (module_dir) {
        if (module_dir.slice(0, 1) !== '.') {
            cb(server, express, module_dir);
        }
    });
};
module.exports.moduleRoutes = function (server, express) {
    loopModules(server, express, function (server, express, module_dir) {
        var path = __dirname + '/../modules/' + module_dir + '/api/app.js';
        if (doesExist(path)) {
            var api = require(path)(express);
            assetsCompiler(api, module_dir);
            return server.use('/modules/' + module_dir, api);
        }
    });
};
module.exports.moduleStatics = function (server, express) {
    loopModules(server, express, function (server, express, module_dir) {
        var path = __dirname + '/../modules/' + module_dir + '/public';
        if (doesExist(path)) {
            return server.use('/modules/' + module_dir, express.static(path));
        }
    });
};