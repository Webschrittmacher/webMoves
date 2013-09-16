define('webMoves/app', function()
{
    return {
        init: function(expressApp)
        {
            expressApp.get('/', function(req, res)
            {
                res.write('hund');
                res.end();
            });

            expressApp.get('/backbone/', function(req, res) { new (require('webMoves/controller/backboneTest')(req, res)) });
        }
    };
});
