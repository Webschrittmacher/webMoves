define('models/user', ['backbone'], function(Backbone)
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