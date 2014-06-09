var util = require('util');

module.exports = function(express) {
	var api = express.Router();

	api.get('/test', function(req, res, next){
		console.log(util.inspect(res.render, {showHidden: true, depth: 20}));
	});

	return api;
}


