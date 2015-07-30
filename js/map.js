var locations = [
  ['Riverside House', 41.637614, -81.404860, 1],
  ['Kentworth Village', 41.430676, -81.882967, 2],
  ['Elayne Apartments', 41.393503, -81.768572, 3],
  ['Crest Apartments', 41.372940, -81.851101, 4],
  ['North Isle Apartments', 41.341552, -81.525158, 5],
  ['Falls Landing', 41.136771, -81.478690, 6],
  ['Brittain Park Apartments', 41.105323, -81.468408, 7],
  ['Grand Woodlands', 41.092550, -81.441848, 8]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 9,
  disableDefaultUI: true,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: false,
  center: new google.maps.LatLng(41.451395, -81.616453),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
