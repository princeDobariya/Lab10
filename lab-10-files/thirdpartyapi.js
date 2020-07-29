
let map;
let infoWindow;
let mapSpot = document.getElementById("map");
let home = {
    lat:44.4059567,
    lng:-79.6710345
};


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center:{
        lat:44.4059567,
        lng:-79.6710345,
  
    },
      zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Prince's House.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service has failed."
      : "Error: Your browser doesn't support geolocation"
  );
  infoWindow.open(map);
}