define('app'
    , ['modules/core', 'gmap', 'modules/user', 'modules/channels']
    , function(Core, GMap, User, Channels)
{
    var currentUser;

    return {
        init: function()
        {
            GMap.init();

            User.init();
            currentUser = User.detect(); // jvt: init and store current user @todo instance needed at app level?

            Channels.init();

            // jvt: @todo move to "welcome" module or so....
            require(['views/bigBlueButtonView'], function(bbbv)
            {
                function addMoves()
                {
                    Core.getAction('addChannel')('moves');
                }

                new bbbv({
                    addMovesChannel: addMoves // jvt: pass callback for handling moves channel
                });
            });
        }
    }
});