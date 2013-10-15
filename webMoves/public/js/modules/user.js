define('modules/user', ['modules/core', 'models/user', 'log'], function(Core, UserModel, Log)
{
    function addChannel(sChannelType)
    {
        Log.debug('adding channel ' + sChannelType);

        switch(sChannelType)
        {
            case 'moves':
                var sUrl = "https://api.moves-app.com/oauth/v1/"
                    + "authorize?response_type=code&"
                    + "client_id=9z08yZSF2QRdLBms2akHYAR9O8wSLh8X&"
                    + "scope=activity location";

                var newWindow=window.open(sUrl,'name','height=500,width=450');
                if (window.focus)
                {
                    newWindow.focus();
                }

                break;

            default:
                Log.error('unknown channel: ' + sChannelType);
        }
    }

    return {
        init: function()
        {
            Core.registerActions({
                'addChannel': addChannel
            });
        }

        , detect: function()
        {
            // jvt: @todo detect user (cookie, bla, etc.) and init model
            return new UserModel();
        }
    };
});