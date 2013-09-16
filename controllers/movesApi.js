/*var mUser = (function()
{
	require("./mongo.js");
	var my = {};
	var movesBaseUrl = 'https://api.moves-app.com/';
	util.debug('muuuuuuhuser');

	my.getMovesUserProfile = function()
	{
	    var pUrl = movesBaseUrl + 'api/v1/user/profile?access_token='
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
	        if(response.statusCode == 200)
	        {
	            util.debug('Yep, here it is: ' + result.userId);
	            console.dir(result);
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

	my.validateToken = function()
	{
	    var vUrl = movesBaseUrl + 'oauth/v1/tokeninfo?access_token=' + movesAccessToken;
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
	            }
	        }
	    }
	    ).on('fail', function(data, response)
	    {
	        util.debug('Restler has not fought very well :( '+response.statusCode);
	        console.dir(data);
	    });
	}

	my.findMovesUser = function(mModel, callback)
	{
	    var resultMovesUser = movesUser.find({ user_id: sessionID}).populate('').exec(function(err, resultMovesUser)
	    {
	        if (err) 
	        {   
	            util.debug('Y U NO MONGO ?! '+err);
	        }
	        else
	        {
	            if(typeof resultMovesUser !== 'undefined' && resultMovesUser != '')
	            {
	                util.debug('GOT THAT MONGO!: '+resultMovesUser);
	                resultMovesUser.forEach(function(movesUser)
	                {
	                    movesAccessToken = movesUser.access_token
	                    util.debug('toller token: ' + movesAccessToken);
	                });
	                if(typeof callback === 'function')
	                {
	                	util.debug('findMovesUserCallback!');
	                	callback();
	                }
	            }
	            else
	            {
	                util.debug('No known mongo could be found');
	            }
	        } 
	    });
	};

	my.modelMovesUser = function(callback)
	{
	    mongo.modelUser(movesUserSchema, '', callback);
	};

	return my;
}(mUser || {}));

module.exports.modelMovesUser = mUser.modelMovesUser;
module.exports.findMovesUser = mUser.findMovesUser;
module.exports.validateToken = mUser.disconnect;
module.exports.getMovesUserProfile = mUser.getMovesUserProfile;*/
