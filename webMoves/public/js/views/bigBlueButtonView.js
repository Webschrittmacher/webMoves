define('views/bigBlueButtonView', ['backbone'], function(Backbone)
{
    return Backbone.View.extend({
        el: '#authButton'

        , events: {
            "click": "onAddMoves"
        }

        , initialize: function()
        {
        }

        , onAddMoves: function()
        {
            this.options.addMovesChannel();
        }
    });
});