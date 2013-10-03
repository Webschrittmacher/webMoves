define('gmap', function()
{
    var map;

    return {
        init: function()
        {
            map = new google.maps.Map(document.getElementById('mapCanvas'), {
                zoom: 8,
                center: new google.maps.LatLng(51.223787, 6.787109),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }
    }
});
