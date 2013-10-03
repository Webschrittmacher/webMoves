define('app', function()
{
    return {
        init: function()
        {
            /*new require(['views/webMovesView'])({
                model: new require(['models/webMovesModel'])({
                    hund: 'woof'
                })
            });*/

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