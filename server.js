var fuckinAwesomeSecret = 'hund';
var call = false;

var http = require("http");
var socket = require('socket.io');
var sockSession = require('session.socket.io');
var express = require("express");
var load = require("express-load");
var connect = require("connect");
var twig = require("twig");
var cookie = require("cookie");

util = require("util");
mongoose = require("mongoose");
rest = require("restler");

var app = express();
var cookieParser = express.cookieParser(fuckinAwesomeSecret);
var bodyParser = express.bodyParser();
var sessionStore = new express.session.MemoryStore();

mongoSchema = mongoose.Schema;
db = mongoose.connection;
mongoSObjectId = mongoSchema.ObjectId;

util.debug("let's go break shit...");
mongo = require("./controllers/mongo.js");

app.configure(function()
{
    app.use(bodyParser);
    app.use(cookieParser);
    app.use(sessionStore);
    app.use(express.methodOverride());
    app.use(app.router);
    app.use( express.static(__dirname + '/public'));

    app.set('title', 'webMoves');
});

load("config")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

var server = http.createServer(app);
var sio = socket.listen(server);
var sioSession = new sockSession(sio, sessionStore, cookieParser);

server.listen(8842);

var getMovesUserProfile = function()
{
    var pUrl = 'https://api.moves-app.com/api/v1/user/profile?access_token='
                    + movesAccessToken;
    rest.get(pUrl,
    {
        data:
        {
            access_token: movesAccessToken
        },
        parser: rest.parsers.json
    }
    ).on('complete', function(result, response)
    {
        if(result instanceof Error)
        {
            util.debug('Got a Error while Profile: ' + result.message);
        }
        else if(response.statusCode == 200)
        {
            util.debug('Yep, here it is dat freche UserID: ' + result.userId);
            console.dir(result.profile);
        }
    }
    ).on('fail', function(data, response)
    {
        util.debug('Think there might be a problem: ' + response.statusCode);
    }
    ).on('error', function(data, response)
    {
        util.debug('ERRROOOOOORRR: ' + response.statusCode);
    });
};


var validateToken = function()
{
    var vUrl = "https://api.moves-app.com/oauth/v1/tokeninfo?access_token=" + movesAccessToken;
    rest.get(vUrl,
    {
        data: 
        {
            access_token: movesAccessToken
        }
        , parser: rest.parsers.json
    }
    ).on('complete', function(result, response)
    {
        if(result instanceof Error)
        {
            util.debug('Nope, no refresh: ' + result.message);
        }
        else
        {
            if(response.statusCode == 200)
            {
                util.debug('Token valid, time for some DATA, bitch! ');
                util.debug('Client ID: ' + result.client_id);
                util.debug('User ID: ' + result.user_id);
                util.debug('Scope: ' + result.scope);
                util.debug('Expires in: ' + result.expires_in);
                util.debug('Still access? ' + movesAccessToken);
                if(!call)
                {
                    call = true;
                    getMovesUserProfile();
                }
            }
        }
    }
    ).on('fail', function(data, response)
    {
        util.debug('Restler has not fought very well :( '+response.statusCode);
        console.dir(data);
    }); 
}

var findMovesUser = function(callback)
{
    var resultMovesUser = movesModel.find({ user_id: sessionID}).populate('').exec(function(err, resultMovesUser)
    {
        if (err) 
        {   
            util.debug("Y U NO MONGO ?! "+err);
        }
        else
        {
            if(typeof resultMovesUser !== 'undefined' && resultMovesUser != '')
            {
                util.debug('GOT THAT MONGO!: '+resultMovesUser);
                resultMovesUser.forEach(function(movesUser)
                {
                    movesAccessToken = movesUser.access_token
                    util.debug('toller token from find: ' + movesAccessToken);
                });
                validateToken();
            }
            else
            {
                util.debug("No known mongo could be found");
                mongo.disconnect();
            }
        }
    });
};

var modelMovesUser = function()
{
    mongo.modelUser(findMovesUser, movesUserSchema);
};

sio.set('authorization', function (data, accept)
{
    util.debug('tryin to authorize with socket.io');
    if(typeof data.headers.cookie !== 'undefined')
    {
        data.cookie = cookie.parse(data.headers.cookie);
        data.sessionID = connect.utils.parseSignedCookie(data.cookie['express.sid'], fuckinAwesomeSecret);
        util.debug('Cookie Session; '+data.sessionID);
        if(data.cookie['express.sid'] == data.sessionID) // jvt: if these are the same someone is being naughty...
        {
            return accept('invalid cookie', false);
        }
    }
    else
    {
        util.debug('No cookie transmitted', false);
    }

    return accept(null, true);
});

sioSession.on('connection', function(err, socket, session)
{
    util.debug('Establishing connection with socket.io');
    if(err)
    {
        util.debug('No session for you :( ' + err);
    }
    util.debug("a socket with sessionID " + socket.handshake.sessionID + " just connected!");
    sessionID = socket.handshake.sessionID;

    mongo.connect(modelMovesUser);
});
