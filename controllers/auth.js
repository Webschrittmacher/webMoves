//jw: function comments would be really really nice :P
util.debug("tryin to get it up und running...");
exports.authIndex = function(req, res)
{
    util.puts("auth: " + req.query.code);
    if(req.query.error)
    {
        util.error("error: " + req.query.error);
    }

    util.debug("connecting to api...");

    var sUrl = "https://api.moves-app.com/oauth/v1/access_token?"
            + "grant_type=authorization_code"
            + "&code=" + req.query.code
            + "&client_id=9z08yZSF2QRdLBms2akHYAR9O8wSLh8X"
            + "&client_secret=X3Q44uCxPj7_u8Kf753mpeUv9DTwF33c67siSYCWuQw2z7EbwigraifJn7rNy760";

    rest.post(sUrl,
    {
        data:
        {
            grant_type: "authorization_code"
            , code: req.query.code
            , cliend_id: "9z08yZSF2QRdLBms2akHYAR9O8wSLh8X"
            , client_secret: "X3Q44uCxPj7_u8Kf753mpeUv9DTwF33c67siSYCWuQw2z7EbwigraifJn7rNy760"
        }
        ,parser: rest.parsers.json
    }
    ).on('complete', function(result, response)     
    {
            if (result instanceof Error)
            {
                util.error('Error: ' + result.message);
                this.retry(5000);
            }
            else
            {
                if(response.statusCode == 200)
                {
                    util.debug("access token! time for some MONGO MONGoooooooooooo....");
                    util.debug("access token: "+result.access_token);
                    util.debug("trying to generate a new mongooo");
                    util.debug("connection anyone?");
                    util.debug('sessionID '+sessionID);

                    mSave = function()
                    {
                        movesUser.save(function(err)
                        {
                            util.debug('save dat mongo, dat freche');
                            if (err)
                            {
                                util.debug("mongo didn't make it :( "+err);
                            }
                            else
                            {
                                util.debug("mongo saved, is now a hipster...");
                            }    
                        });
                    };
                    mFind = function()
                    {
                        sString = { user_id: sessionID };
                        util.debug('Searchin for this: '+sessionID);
                        mongo.modelUser(mSave, movesUserSchema, movesUserData);
                        mModelResult = movesModel.find(sString, function (err, mModelResult)
                        {
                            util.debug("tryin to find dat mongo");
                            if (err) 
                            {   
                                util.debug("Y U NO MONGO ?! "+err);
                            }
                            else
                            {
                                if(typeof mModelResult !== 'undefined' && mModelResult != '')
                                {
                                    util.debug("Found dat Mongo: "+mModelResult);
                                    mongo.disconnect();    
                                }
                                else
                                {
                                    util.debug("Need a new mongo...tryin so save it");
                                }
                            }   
                        });
                    };

                    movesUserData =
                    {
                        access_token : result.access_token
                        , refresh_token : result.refresh_token
                        , user_id :  sessionID
                        , moves_user_id : result.user_id
                        , token_type : result.token_type
                        , expires_in : result.expires_in
                    };
                    
                    mongo.connect(mFind);
                }
                else
                {
                    util.puts(response.statusCode);
                    util.puts(result);
                    util.puts(result.error);
                }
            }
        });
    
    res.send("auth: " + req.query.code);
};