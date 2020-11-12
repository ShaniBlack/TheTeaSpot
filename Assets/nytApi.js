let queryUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PteyFR3MCeNPLqxoT4wRM3TRFVSMhNrx";

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    
for (let i = 0; i < 3; i++) {
    let newString = `<h3 class = col>${response.results[i].title}</h3>
    <div class = col>${response.results[i].abstract}</div>
    <img class = col-5 src="${response.results[i].multimedia[0].url}">
    <div class = col>${response.results[i].url}</div>`;

    let returnInfo = fragmentFromString(newString);
    document.querySelector(".container2").appendChild(returnInfo);
    }
});

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);

}

