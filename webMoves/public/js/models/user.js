define('models/user', function()
{
    return Backbone.Model.extend({
        defaults: {
            name: 'Hund'
        }

        , initialize: function()
        {
        }
    });
});