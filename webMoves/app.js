define('webMoves/app', ['backbone'], function()
{
    var privateBalls = 'hund';

    return {
        init: function(expressApp)
        {
            expressApp.get('/', function(req, res)
            {
                require('webMoves/controller/index').render(req, res);
            });
        }
    };
});
