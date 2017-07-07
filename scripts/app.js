// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  function earthquakeList(){
    $.ajax({
      method: "GET",
      url:"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2017-06-30&endtime=2017-07-06&limit=10",
      success: onSuccess
    });
    }

  function onSuccess(responseData){
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

    responseData.features.forEach(function (event, i){
      $('#info').append($(`<h4> ${responseData.features[i].properties.title} </h4>`));
      $('#info').append($(`<h4> ${responseData.features[i].properties.time} </h4>`));
      $('#info').append($(`<h4> ${responseData.features[i].geometry.coordinates} </h4>`));
    })
  }

  earthquakeList();
});
