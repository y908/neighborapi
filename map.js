// starting location
var temp1 = -25.363;
var temp2 = 131.044;

// temporary variables
var lat;
var lon;

// initiate map
function initMap() {
  // latitude and logitude
  var myLatLng = {lat: temp1, lng: temp2};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng
});

//==========================================
// MARKERS ON GOOGLE MAPS
//==========================================
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });


      temp1 = -20;
      temp2 = 125;

// add another marker
  myLatLng2 = {lat: temp1, lng: temp2};

  marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Hello World!'
  });
  // google maps marker

  
}//======================================
// END OF MARKERS
//=======================================




$(document).ready(function() {



  //trulia api 
  var apiKey = "c72wfgjsbeng8ya6mfttdz8b";
  
 // var queryURL = "https://crossorigin.me/http://api.trulia.com/webservices.php?library=TruliaStats&function=getCityStats&city=New York&state=NY&startDate=2009-02-06&endDate=2009-02-07&apikey=" + apiKey;

  var queryURL = "https://crossorigin.me/http://api.trulia.com/webservices.php?library=LocationInfo&function=getCitiesInState&state=CA&apikey=" + apiKey;
   console.log(queryURL);

  
  $.ajax({
      url: queryURL,
      dataType: 'xml',
      method:'GET'
  })

  .done(function(response){
    console.log('response', response);
    var json = $.xml2json(response);
    //

  
     console.log(json);

   //  $('#here').append(JSON.stringify(json.response.TruliaStats.location.state));

    //  $('#there').append(JSON.stringify(json.response.TruliaStats.location.city));

      lat = json.response.LocationInfo.city[0].latitude;
      lon = json.response.LocationInfo.city[0].longitude;
     
      $('#there').append(lat);


  })





 $('#btn').on('click', function(){


    var myLatlng = new google.maps.LatLng(lat,lon);
    var mapOptions = {
      zoom: 4,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Place a draggable marker on the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"new location!"
    });


})




});