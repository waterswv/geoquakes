// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  function earthquakeList() {
    $.ajax({
      method: "GET",
      url: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2017-06-30&endtime=2017-07-06&limit=10",
      success: onSuccess
    });
  }

  function onSuccess(responseData) {
    //title

    // $('#info').append($(`<h2> ${responseData.features[0].properties.title} </h2>`));
    // responseData.features[0].properties.title;
    // console.log(responseData.features[0].properties.title);
    // //coordinates
    // responseData.features[0].geometry.coordinates;
    // console.log(responseData.features[0].geometry.coordinates);
    // //time
    // responseData.features[0].properties.time;
    // console.log(responseData.features[0].properties.time);
    let theLocation = {
      lat: 37.78,
      lng: -122.44
    };
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: theLocation
    });

    responseData.features.forEach(function(event, i) {
      $('#info').append($(`<p> ${responseData.features[i].properties.title} </p>`));
      //$('#info').append($(`<p> ${responseData.features[i].properties.time} </p>`));
      //$('#info').append($(`<p> ${responseData.features[i].geometry.coordinates} </p>`));
      let theLocation = $(responseData.features[i].geometry.coordinates);
      let latLng = new google.maps.LatLng(theLocation[1], theLocation[0]);
      console.log(theLocation);
      let marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    })

    // Added a map via the Google Maps API ... there is a map class div in our index.html &
    //  a javascript import tag in the head with our google maps api key

    // var theLocation = {lat: 37.78, lng: -122.44};
    //
    // var marker = new google.maps.Marker({
    //   position: theLocation,
    //   map: map
    // });

    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //       lat: 37.78,
    //       lng: -122.44
    //     },
    //     zoom: 8
    //   });
    //
  }

  earthquakeList();
});
