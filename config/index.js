var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname +
        ':' + configValues.pwd + '@ds025239.mlab.com:25239/node-todo';
    }
};
