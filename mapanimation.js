// This array contains the coordinates for all bus stops between Bay Ridge and NYU
const busStops = [
  [-74.0093348, 40.6527200],
  [-73.9814228, 40.6710672],
  [-73.9991637, 40.6795331],
  [-73.9962255, 40.6865360],
  [-73.9844722, 40.6848689],
  [-73.9955523, 40.6959294],
  [-73.9845407, 40.6960679],
  [-74.7077143, 40.0082787],
  [-74.0086323, 40.7162692],
  [-74.0006686, 40.7208595],
  [-74.0019174, 40.7245908],
  [-74.0074328, 40.7266108],
  [-74.0027418, 40.7335719],
  [-73.9925526, 40.7286587],
];

// TODO: add your own access token
mapboxgl.accessToken =
// 403: forbidden errors from Terminal or Postman

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [-74.0028364, 40.7140519],
  zoom: 11,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-74.0323532, 40.6319979]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
