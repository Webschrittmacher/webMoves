var mongo = (function () 
{
    var my = {};
    util.debug("mongo mongo...");

    my.modelUser = function (callback, movesModelSchema, movesModelData) 
    {
        util.debug("trying to shape dat ape...");
        if(typeof movesModel === 'undefined')
        {
            if(movesModelSchema)
            {
                movesModel = db.model("movesUser", movesModelSchema);
                util.debug('ape shaped, ready for takeoff');
                if(typeof movesModelData === 'undefined')
                {
                    util.debug('No data for me, no data for you but a model!');
                    callback();
                }
            }    
            else
            {
                util.debug('provide a schema and you get what you need!');
            }
            
        }
        else
        {
            util.debug('ape already shaped, need data!');
            if(movesModelData)
            {
                movesUser = new movesModel(movesModelData);    
                util.debug('ape is now a mongo. yeeah!');
            }
            callback();
        }    
    };

    my.connect = function (callback) 
    {
        util.debug("establishing connection with mongo mothership");
        mongoose.connect(conString);
        db.on('error', function(error)
        { 
            util.error( 'nope, no mongo for you: '+error); 
        });
        db.once('open', function() 
        { 
            util.debug("connected");
            callback();
        });
    };

    my.disconnect = function ()
    {
        util.debug("looking up established connection and terminate it...");
        mongoose.disconnect(function(err)
        {
            if(err)
            {
                util.debug('Connection still open, because of the dachs: '+err)
            }
            else
            {
                util.debug('Connection succesfully closed');
            }
        });
    };

    return my;
}(mongo || {}));

module.exports.connect = mongo.connect;
module.exports.modelUser = mongo.modelUser;
module.exports.disconnect = mongo.disconnect;
