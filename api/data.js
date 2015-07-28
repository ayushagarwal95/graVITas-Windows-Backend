'use strict';

var path = require('path');
var file = require(path.join(__dirname, '..', 'data', 'data')).list;

exports.get = function (data, callback) {
    if (data.header === process.env.AUTHORIZED_HEADER) {
        if (data.version === file.version) {
            var doc = {
                header: data.header,
                status: 1,
                data: null,
                message: 'Your data version is the latest one'
            };
            callback(null, doc);
        }
        else {
            var doc = {
                header: data.header,
                status: 0,
                data: file,
                message: 'Successful Refresh'
            };
            callback(null, doc);
        }
    }
    else {
        var doc = {
            header: data.header,
            data: null,
            status: 404,
            message: 'Unauthorized Access'
        };
        callback(null, doc);
    }
};
