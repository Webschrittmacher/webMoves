define('modules/channels', ['modules/core'], function(Core)
{
    return {
        init: function()
        {
            // jvt: init views
            require(['views/channels'], function(ChannelsMainView)
            {
                new ChannelsMainView();
            });
        }
    };
});