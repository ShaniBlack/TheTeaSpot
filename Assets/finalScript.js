// NYT API URL and key
let queryUrl =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PteyFR3MCeNPLqxoT4wRM3TRFVSMhNrx";

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (response) {
  for (let i = 0; i < 3; i++) {
    let newString = `<h3>${response.results[i].title}</h3>
    <div>${response.results[i].abstract}</div>
    <img class="col-6" src="${response.results[i].multimedia[0].url}">
    <div>${response.results[i].url}</div>`;

    let returnInfo = fragmentFromString(newString);
    document.querySelector(".container2").appendChild(returnInfo);
  }
});

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
/////////////////

// Currents API URL and key
let latestUrl =
  "https://api.currentsapi.services/v1/search?keywords=&language=en&apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";
// request from the API
let req = new Request(latestUrl);
fetch(req)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // for loop after for each title,description,img, url
    for (let i = 0; i < 3; i++) {
      const oneNews = response.news[i];

      let newString = `<h3>${response.news[i].title}</h3>
    <div>${response.news[i].description}</div>
    <img class = "col-6" src="${
      response.news[i].image === "None"
        ? "./Assets/spillTheTea.PNG"
        : response.news[i].image
    }">
    <div>${response.news[i].url}</div>`;

      let returnInfo = fragmentFromString(newString);
      document.querySelector(".container1").appendChild(returnInfo);
    }
  });

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
