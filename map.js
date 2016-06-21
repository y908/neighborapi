$(document).ready(function() {



  //trulia api 
  var apiKey = "c72wfgjsbeng8ya6mfttdz8b";
  var queryURL = "https://crossorigin.me/http://api.trulia.com/webservices.php?library=TruliaStats&function=getCityStats&city=New York&state=NY&startDate=2009-02-06&endDate=2009-02-07&apikey=" + apiKey;
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
     $('#here').append(JSON.stringify(json.response.TruliaStats.location.state));

      $('#there').append(JSON.stringify(json.response.TruliaStats.location.city));
  })



});