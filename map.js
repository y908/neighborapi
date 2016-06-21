 $(document).ready(function() { 
var queryURL = "http://api.trulia.com/webservices.php?library=LocationInfo&function=getCitiesInState&state=CA&apikey=c72wfgjsbeng8ya6mfttdz8b";

 $.ajax({url: queryURL, method: 'GET'})
           //call back function
           .done(function(response) {

           console.log(queryURL);
           console.log(response); 

           $('#here').html(JSON.stringify(response));

           }); 

})