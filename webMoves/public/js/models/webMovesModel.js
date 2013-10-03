define('models/webMovesModel', function()
{
    return Backbone.Model.extend({
        defaults: {
            hund: 'katze'
        }

        , initialize: function()
        {
        }
    });
});