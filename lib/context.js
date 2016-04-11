var _ = require('lodash');
var AWS = require('aws-sdk');

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

module.exports = Context;
