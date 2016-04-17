var _ = require('lodash');
var winston = require('winston');

function Logger(params) {
}

Logger.new = function (params) {
    return _.bindAll(new Logger(params));
};

Logger.prototype.createLogger = function () {
    return new winston.Logger();
};

module.exports = Logger;
