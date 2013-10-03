require(['app'], function(app)
{
    app.init({
        // jvt: config
    });
});

/*(function($) {
    $(document).ready(function()
    {

        $('#authButton').on('click', function()
        {
            var sUrl = "https://api.moves-app.com/oauth/v1/"
                + "authorize?response_type=code&"
                + "client_id=9z08yZSF2QRdLBms2akHYAR9O8wSLh8X&"
                + "scope=activity location";
            var newWindow=window.open(sUrl,'name','height=500,width=450');
            if (window.focus) {newWindow.focus()}
            this.hide();
        });

        var socket = io.connect('http://web-moves.com:8842/');

        socket.on('connect', function()
        {
            console.info('Successfully established connection');
        });
        socket.on('data', function(data)
        {
            console.log('Got something from socket: '+data);
        });
        socket.on('error', function(reason){
         console.error('Unable to connect to Socket.IO' + reason);
         console.log('Reason: ' + reason);
         });
    });
}(jQuery));*/

