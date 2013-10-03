define('webMoves/controller/index', function()
{
    return {
        render: function(req, res)
        {
            var jade = require('jade');
            res.write(jade.renderFile('webMoves/views/index.jade'));
            res.end();
        }
    }
});