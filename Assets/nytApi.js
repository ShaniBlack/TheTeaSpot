let topic = "home";
// function displayMovieInfo() {
    // var movie = $(this).attr("data-name");

let url = "https://api.nytimes.com/svc/topstories/v2/" + topic
".json?api-key=PteyFR3MCeNPLqxoT4wRM3TRFVSMhNrx";

$.ajax({
    url: url,
    method: "GET"
}).then(function(response) {
    console.log(response);
})