define('views/channels', ['backbone'], function(Backbone)
{
    return Backbone.View.extend({
        el: '#channels'

        , events: {
            "click .moves": "onAddMoves"
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