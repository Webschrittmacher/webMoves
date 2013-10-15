define('app'
    , ['modules/core', 'gmap', 'modules/user', 'modules/channels']
    , function(Core, GMap, User, Channels)
{
    var currentUser;

    return {
        init: function()
        {
            GMap.init();

            currentUser = User.detect(); // jvt: init and store current user @todo instance needed at app level?

            Channels.init();
        }
    }
});