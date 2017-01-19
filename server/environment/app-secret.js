'use strict';

var path = require('path');
var _ = require('lodash');


function requiredProcessEnv(name) {
    if(!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

var all = {
    gmail: {
        user: process.env.user || 'shaina.veloz@gmail.com',
        secret: process.env.secret || 'zaki2420'
    }
};

module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});




