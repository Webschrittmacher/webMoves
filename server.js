var http = require("http");
var socket = require('socket.io');
var express = require("express");
var Backbone = require("backbone");

var expressApp = express();
expressApp.configure(function()
{
    expressApp.use( express.static(__dirname + '/public'));
});

var server = http.createServer(expressApp);
var sio = socket.listen(server);
server.listen(8842);

/**
 * jvt: requirejs config
 *
 * */
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});

/**
 * jvt: web-moves app bootstrap
 *
 * */
var webMovesApp = requirejs(['webMoves/app'], function(webMovesApp)
{
    var _hund = Backbone.Model.extend({});
    webMovesApp.init(expressApp);
});
