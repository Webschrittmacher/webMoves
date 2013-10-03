define('views/webMovesView', function()
{
    return Backbone.View.extend({
        el: 'body'

        , initialize: function()
        {
            var bbbv;
            require(['views/bigBlueButtonView'], function(bigBlueButtonView)
            {
                bbbv = new bigBlueButtonView();
            });
        }
    });
});