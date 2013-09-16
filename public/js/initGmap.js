var map;
function initialize() {
      var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(51.223787, 6.787109),
            mapTypeId: google.maps.MapTypeId.ROADMAP};
            map = new google.maps.Map(document.getElementById('mapCanvas'),mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
