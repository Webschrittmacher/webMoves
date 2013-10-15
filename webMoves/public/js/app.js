define('app', function()
{
    var currentUser;

    return {
        init: function()
        {
            require(['gmap'], function(gmap)
            {
                gmap.init();
            });

            require(['modules/user'], function(UserModule)
            {
                // jvt: @todo bootstrap user module?
                currentUser = UserModule.detect(); // jvt: init and store current user @todo instance needed at app level?
            });
        }
    }
});