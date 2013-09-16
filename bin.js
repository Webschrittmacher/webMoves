    //var parsedCookies = cookie.parseCookie(cookieString);
if(typeof data.headers.cookie !== 'undefined')
    {
        data.cookie = cookie.parse(data.headers.cookie);
        data.sessionID = connect.utils.parseSignedCookie(data.cookie['express.sid'], fuckinAwesomeSecret);
        sessionID = data.sessionID;
        util.debug("Cookie sessionID: " + sessionID);

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

    //sio.sockets.on('connection', function(socket)
//{
//});
        //sessionID = data.sessionID;
        //util.debug("Cookie sessionID: " + sessionID);
        //var parsedCookies = cookie.parseCookie(cookieString);

        /*var session = express.session(
    {
        store: sessionStore
        , secret: fuckinAwesomeSecret
        , key: 'express.sid'
    });*/

    
app.get('/', function(req, res)
{
  res.send('id: ' + req.query.id);
  util.debug('Sending whateverid: '+req.query.id);
});