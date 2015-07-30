'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');

var dataFetch = require(path.join(__dirname, '..', 'api', 'data'));

router.post('/', function(request, response) {

  var data = {
      auth: {
          username: request.body.username,
          password: request.body.password
      },
      version: request.body.data_version
  };
  var onGet = function (err, result) {
      response.json(result);
  };
  dataFetch.get(data, onGet);
});

module.exports = router;
