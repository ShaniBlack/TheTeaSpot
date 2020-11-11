let topic = "home";
// function displayMovieInfo() {
    // var movie = $(this).attr("data-name");

let queryUrl = "https://api.nytimes.com/svc/topstories/v2/"+topic+".json?api-key=PteyFR3MCeNPLqxoT4wRM3TRFVSMhNrx";

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    // console.log(response);
    // console.log(response.results[i].title);
    // console.log(response.results[i].abstract);
    // console.log(response.results[i].multimedia[0].url);
    // console.log(response.results[i].url);
for (let i = 0; i < response.results.length; i++) {
    // const oneNews = response.results[i];

    let newString = `<h1 class = col-7>${response.results[i].title}</h1>
    <div class = col-5>${response.results[i].abstract}</div>
    <img class = col-5 src="${response.results[i].multimedia[0].url}">
    <div class = col-4>${response.results[i].url}</div>`;

    let returnInfo = fragmentFromString(newString);
    document.querySelector(".container2").appendChild(returnInfo);
    }

});

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);

}

