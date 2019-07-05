// jQuery ready func
$(document).ready(function () {
    // //Google maps documentation
    var map;
    function initMap(lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                //pass in the variables here for lat lng
                lat: lat,
                lng: lng
            },
            zoom: 8
        });
    }

    // //USING JQUERY TO GRAB FORM INPUT FROM  disposeLocForm.handlebars

    $("#submit").on("click", function (event) {
        // prevent page refresh
        event.preventDefault();
        console.log("submit was clicked")

        //capture form inputs from disposeLocForm
        var street = $("#Address").val();
        var city = $("#City").val();
        var state = $("#State").val();

        console.log("ln 40", street, city, state)

        // if any fields are empty, return a error message
        $('input').each(function () {
            if (!$(this).val()) {
                alert("Please review missing fields and try again.");
                return false;
            }
        });

        //     var address = {
        //         street: street,
        //         city: city,
        //         state: state
        //     };

        //     // test var
        // var street = "160 Spear Street";
        // var city = "San Francisco";
        // var state = "CA";
        // var lat = 33.67;
        // var lng = -112.84;
        //     //.end test var

        var cnctStreet = street.replace(/\s+/g, '+');
        var cnctCity = city.replace(/\s+/g, '+');
        var cnctState = state.replace(/\s+/g, '+');

        var lat;
        var lng;

        var max_distance = 25;
        //     console.log("garbage.js, ln 16 address: ", address);

        //     //send to server
        //     $.post("/disposallocationresults", address, function(response) {
        //         console.log("garbage.js, ln 20: ", response)
        //     })

        var queryURL1 =
            "https://maps.googleapis.com/maps/api/geocode/json?address="
            + cnctStreet
            + ",+"
            + cnctCity
            + ",+ "
            + cnctState
            + "&key=AIzaSyAu1DCEzzMt3HyoNm90Myqn6cjWdevfOdc";

        // var query2 = 
        // "http://api.earth911.com/earth911.searchLocations?latitude=" +
        // lat +
        // "&longitude=" +
        // lng +
        // "&max_distance=" +
        // max_distance +
        // "&api_key=6ee9222b20473f36";


        $.ajax({
            url: queryURL1,
            method: "GET",
            //to pass CORS request
            contentType: 'text/plain',
            xhrFields: {
                withCredentials: false
            }
        }).then(function (response) {
            //   console.log("ln 93", response)
            console.log("************");
            lat = response.results[0].geometry.location.lat;
            console.log("This is the lat: ", lat);
            lng = response.results[0].geometry.location.lng;
            console.log("This is the longitude: ", lng);
            console.log("************");
        }).then(
            $.ajax({
                url:
                    "http://api.earth911.com/earth911.searchLocations?latitude=" +
                    lat +
                    "&longitude=" +
                    lng +
                    "&max_distance=" +
                    max_distance +
                    "&api_key=6ee9222b20473f36",
                method: "GET"
            }).then(function (response) {
                console.log(response.data.result);
                var description = [];
                var distance = [];
                var location_id = [];
                for (var i = 0; i < response.data.result.length; i++) {
                    console.log(response.data.result[i]);
                }
            })
        )
    })
});





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



