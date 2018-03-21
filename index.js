'use strict';
var dnscache = require('dnscache')({ "enable": true, "ttl": 300, "cachesize" : 3000});
var soajs = require('soajs');

var controller = new soajs.server.controller();
controller.init(function () {
    controller.start();
});

