define('modules/channels', ['modules/core', 'log'], function(Core, Log)
{
    var addChannel;

    function addMovesChannel()
    {
        addChannel('moves');
    }

    return {
        init: function()
        {
            addChannel = Core.getAction('addChannel');

            // jvt: init views
            require(['views/channels'], function(ChannelsMainView)
            {
                new ChannelsMainView({
                    addMovesChannel: addMovesChannel // jvt: pass callback for handling moves channel
                });
            });
        }
    };
});