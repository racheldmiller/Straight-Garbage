// This is where the ajax calls will go for the buttons

$.ajax("/results", {
   type : "POST",
   data : newPostalCode 
}).then (
    function () {
        res.json({newPostalCode: newPostalCode})
    }
)