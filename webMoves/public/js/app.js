define('app', function()
{
    return {
        init: function()
        {
            require(['gmap'], function(gmap)
            {
                gmap.init();
            });

            var webMovesModel;
            require(['models/webMovesModel'], function(MainModel)
            {
                webMovesModel = new MainModel();
            });

            require(['views/webMovesView'], function(MainView)
            {
                new MainView({
                    model: webMovesModel
                });
            });
        }
    }
});