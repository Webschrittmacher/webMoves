define('webMoves/controller/index', ['jade'], function(jade)
{
    return {
        render: function(req, res)
        {
            res.write(jade.renderFile('webMoves/views/index.jade'));
            res.end();
        }
    }
});