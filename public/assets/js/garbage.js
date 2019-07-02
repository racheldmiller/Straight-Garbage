// This is where the ajax calls will go for the buttons

// $.ajax("/results", {
//    type : "POST",
//    data : newPostalCode 
// }).then (
//     function () {
//         res.json({newPostalCode: newPostalCode})
//     }
// )

// a handle click function that plugs in the whereButton form into the getcoord()
//once we get back the lat, lng, another .then
//how to concatinate a string to have + in between spaces
    // HTML:
    // <form>
    // <input type="text" id="formValueId" name="valueId"/>
    // <input type="button" id="myButton" />
    // </form>
    // JS:
    // $(document).ready(function() {
    //     $('#myButton').click(function() {
    //       foo($('#formValueId').val());
    //       var street = "";
    //       var googleStreet= street.split(" ").join("+");
    //     });
    // });

function getCoord(street, city, state){
    axios
        .get(
            //
            // "https://maps.googleapis.com/maps/api/geocode/json?address=" 
            // + street 
            // + ",+" 
            // + city 
            // + ",+ " 
            // + state 
            // + "&key=" 
            // + process.env.GOOGLE
            //
            "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" +
            process.env.GOOGLE
        )
        .then(function(response) {
            console.log("************");
            var lat = response.data.results[0].geometry.location.lat;
            console.log("This is the lat: ", lat);
            var lng = response.data.results[0].geometry.location.lng;
            console.log("This is the longitude: ", lng);
            console.log("************");
        })
        // .then(
        //     .get()
        //     //  another api call to google maps
        //     //  make a new map 
        //     //  'center' at two coordinates from geocode api call        
        //     )
}

     var map;
      function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
              //pass in the variables here for lat lng
              lat: -34.397, 
              lng: 150.644},
          zoom: 8
        });
      }