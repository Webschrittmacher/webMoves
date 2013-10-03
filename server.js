var config = require("./config.json");
var http = require("http");
var socket = require('socket.io');
var express = require("express");
var Backbone = require("backbone");

var expressApp = express();
expressApp.configure(function()
{
    expressApp.use( express.static(__dirname + config.server.publicDir));
});

var server = http.createServer(expressApp);
var sio = socket.listen(server);
server.listen(config.server.port);

/**
 * jvt: requirejs config
 *
 * */
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
    //, baseUrl: __dirname + config.app.basePath
});

/**
 * jvt: web-moves app bootstrap
 *
 * */
requirejs(['webMoves/app'], function(webMovesApp)
{
    webMovesApp.init(expressApp);
});