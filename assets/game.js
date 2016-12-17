// Array of superheroes that will generate button

var topic=["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// Function that renders the button

var renderHeroes= function () {
	$("#button").empty();
	for (var i = 0; i<topic.length; i++) {
		$("#button").append($("<button>").addClass("topicButton").text(topic[i]));
	}
}

// function to render gifs

var display = function() {
	$.ajax({url:
    "http://api.giphy.com/v1/gifs/search?" + $.param({
      "api_key": "dc6zaTOxFJmzC",
      "q": $(this).text(),
      "limit": "10"
    }),
    method: "GET"
  }).done(function(response) {

  	console.log(response);
  	$("#gifmain").empty();
  	for (var i = 0; i<10; i++) {
  		$("#gifmain").append(
  			$("<div>").addClass("gifdiv").append($("<p>").text("Rating: "+ response.data[i].rating.toUpperCase()))
  			.append($("<img>")
          .data({
            "still": response.data[i].images.fixed_height_still.url,
            "animated": response.data[i].images.fixed_height.url,
            "state": "still"
            })
          .addClass("gif")
          .attr("src", response.data[i].images.fixed_height_still.url)
          .attr("alt", response.data[i].slug))

  	)}

  })


}


// Function called
renderHeroes();


// displaying the gifs

$(document).on("click", ".topicButton", display);


