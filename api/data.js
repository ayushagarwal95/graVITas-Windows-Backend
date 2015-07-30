'use strict';

var path = require('path');
var events = require(path.join(__dirname, '..', 'data', 'data')).events;

exports.get = function (data, callback) {
    if (data.auth.username === process.env.USERNAME && data.auth.password === process.env.PASSWORD) {
        if (data.version === events.version) {
            var doc = {
                status: 2,
                data: null,
                message: 'no change'
            };
            callback(null, doc);
        }
        else {
            var doc = {
                status: 1,
                data: file,
                message: 'success',
                events: events
            };
            callback(null, doc);
        }
    }
    else {
        var doc = {
            data: null,
            status: 0,
            message: 'server error'
        };
        callback(null, doc);
    }
};
