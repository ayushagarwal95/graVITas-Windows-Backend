'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');

var dataFetch = require(path.join(__dirname, '..', 'api', 'data'));

router.post('/', function(request, response) {

  var data = {
      header: request.body.auth,
      version:  request.body.version
  };
  var onGet = function (err, result) {
      response.json(result);
  };
  dataFetch.get(data, onGet);
});

module.exports = router;
