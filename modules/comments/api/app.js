var util = require('util');
module.exports = function (express) {
    var api = express.Router();
    api.get('/test', function (req, res, next) {
        res.send('Success');
    });
    return api;
};