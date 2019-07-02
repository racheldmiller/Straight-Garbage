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

$(document).ready(function () {
    $('#submit').click(function () {
        //store full address as variables
        var street = $('#Address').val();
        var city = $('#City').val();
        var state = $('#State').val();
        

        //converts and concatinates so its readable by google maps get request
        var googleStreet = street.split(" ").join("+");
        var googleCity = city.split(" ").join("+");
        var googleState = state.split(" ").join("+");

        
        console.log(googleStreet);
        console.log(googleCity);
        console.log(googleState);

    });
});

//grabs coordinates of address using geocode api
function getCoord(){
    var fullAddress ="https://maps.googleapis.com/maps/api/geocode/json?address=" 
    + googleStreet
    + ",+" 
    + googleCity
    + ",+ " 
    + googleState 
    + "&key=" 
    + process.env.GOOGLE;
    console.log(fullAddress);
    axios
        .get(
            "https://maps.googleapis.com/maps/api/geocode/json?address=" 
            + googleStreet
            + ",+" 
            + googleCity
            + ",+ " 
            + googleState 
            + "&key=" 
            + process.env.GOOGLE
            // "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" +
            // process.env.GOOGLE
        )
        .then(function(response) {
            console.log("************");
            var googleLat = response.data.results[0].geometry.location.lat;
            console.log("This is the lat: ", googleLat);
            var googleLng = response.data.results[0].geometry.location.lng;
            console.log("This is the longitude: ", googleLng);
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
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            //pass in the variables here for lat lng
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}




