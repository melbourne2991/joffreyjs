var _ = require('lodash');
var fs = require('fs');
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
    _.forEach(fs.readdirSync('./modules'), function (moduledir) {
        if (moduledir.slice(0, 1) !== '.') {
            cb(server, express, moduledir);
        }
    });
};
module.exports.moduleRoutes = function (server, express) {
    loopModules(server, express, function (server, express, moduledir) {
        var path = __dirname + '/../modules/' + moduledir + '/api/app.js';
        if (doesExist(path)) {
            var api = require(path)(express);
            return server.use('/modules/' + moduledir, api);
        }
    });
};
module.exports.moduleStatics = function (server, express) {
    loopModules(server, express, function (server, express, moduledir) {
        var path = __dirname + '/../modules/' + moduledir + '/public';
        if (doesExist(path)) {
            return server.use('/modules/' + moduledir, express.static(path));
        }
    });
};