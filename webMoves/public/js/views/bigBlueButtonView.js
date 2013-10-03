define('views/bigBlueButtonView', function()
{
    return Backbone.View.extend({
        el: '#authButton'

        , events: {
            "click": "showMovesAuthWindow"
        }

        , initialize: function()
        {
        }

        , showMovesAuthWindow: function()
        {
            var sUrl = "https://api.moves-app.com/oauth/v1/"
                + "authorize?response_type=code&"
                + "client_id=9z08yZSF2QRdLBms2akHYAR9O8wSLh8X&"
                + "scope=activity location";

            var newWindow=window.open(sUrl,'name','height=500,width=450');
            if (window.focus)
            {
                newWindow.focus();
            }
        }
    });
});