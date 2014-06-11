
module.exports = function (express) {
    var api = express.Router();
    api.get('/test', function (req, res, next) {
        res.send('Success');
    });

    api.get('/test2', function(req, res, next) {
    	res.send('Success');
    });
    return api;
};

// var root_path = process.cwd();
// var Joffrey = require(root_path + '/lib/init');

// module.exports = function (express) {
//     var api = Joffrey.moduleRouter();


//     api.get('test');


//     return api;
// };