var _ = require('lodash');
var AWS = require('aws-sdk');
var Logger = require('./create-logger');

function Context(params) {
    this._configService = params.configService;
}

Context.new = function (params) {
    return _.bindAll(new Context(params));
};

Context.prototype.getDynamoDocumentClient = function () {
    this._dynamoDocumentClient = this._dynamoDocumentClient || this.createDynamoDocumentClient();
    return this._dynamoDocumentClient;
};

//  Factory methods
Context.prototype.createDynamoDocumentClient = function () {
    var config = this._configService.getConfig();
    return new AWS.DynamoDB.DocumentClient({
        region: config.aws.region
    });
};

Context.prototpye.getLogger = function () {
    this._logger = this._logger || this.createLogger();
};

Context.prototype.createLogger = function () {
    return new Logger();
};

module.exports = Context;
