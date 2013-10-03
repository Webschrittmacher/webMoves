var config = require("./config.json");
var http = require("http");
var socket = require('socket.io');
var express = require("express");
require("backbone");
require("underscore");

var expressApp = express();
expressApp.configure(function()
{
    expressApp.use( express.static(__dirname + config.app.basePath + config.server.publicDir));
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
    , shim: {
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        }
        , 'underscore': {
            exports: '_'
        }
    }
});

/**
 * jvt: shims
 */
/*define('jade', function()
{
    return require('jade');
});*/

/**
 * jvt: web-moves app bootstrap
 *
 * */
requirejs(['webMoves/app'], function(webMovesApp)
{
    webMovesApp.init(expressApp);
});