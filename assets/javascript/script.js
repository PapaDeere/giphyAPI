console.log("yo")
 
// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var animals = ["toad", "deer", "elk", "bear", "raccoon", "moose", "eagle", "seal"];
// We chose animals for our theme, but you can make a list to your own liking.
// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
function generateButtons(){
    for (var i = 0; i < animals.length; i++){
        
        var button = $("<button>");
        button.addClass("btn btn-dark")
        button.text(animals[i])
        button.attr("id", "gifBtn")

        $("#buttonHolder").append(button)
    }
}
generateButtons()
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//     person + "&api_key=dc6zaTOxFJmzC&limit=10";
$("#buttonHolder").on("click", "#gifBtn", function(event) {
    console.log($(this).text())
    var animal = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        var data = response.data
        // console.log(response.data[0].images.fixed_height_still.url)
        for(var i = 0; i < data.length; i++){
            console.log(data[i].images.fixed_height_still.url)
            if (data[i].rating == "r" || data[i].rating == "pg-13") 
 {

 }
            else {
                var rating = data[i].rating;
                var p = $('<p>').text("Rating: " + rating);
            var img = $("<img>");
            img.attr("src", data[i].images.fixed_height_still.url)
            img.attr("data-still", data[i].images.fixed_height_still.url);
            img.attr("data-animate", data[i].images.fixed_height.url);
            img.attr("data-state", "still");
            img.addClass("img");

            $("#gifDiv").prepend(p)
            $("#gifDiv").prepend(img)
            // Under every gif, display its rating (PG, G, so on).
        }
}
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
           $(".img").on("click", function() {
                var state = $(this).attr("data-state");
                console.log(state);
            if (state == "still") {
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            } 
            else {
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            }

        });
        });
    });
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.


