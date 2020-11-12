let queryUrl =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PteyFR3MCeNPLqxoT4wRM3TRFVSMhNrx";

$.ajax({
  url: queryUrl,
  method: "GET",
}).then(function (responseNY) {
  for (let i = 0; i < 3; i++) {
    const newsNY = responseNY.results[i];
    let newString = `<a class="titleNews" href="${newsNY.url}"><h3>${newsNY.title}</h3></a>
    <div>${newsNY.abstract}</div>
    <img class="col-6" src="${newsNY.multimedia[0].url}">
   `;

    let returnInfo = fragmentFromString(newString);
    document.querySelector(".container2").appendChild(returnInfo);
  }
});

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}

let latestUrl =
  "https://api.currentsapi.services/v1/latest-news?language=en&apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";

let req = new Request(latestUrl);
fetch(req)
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < 3; i++) {
      const oneNews = response.news[i];

      let newString = `<a href="${oneNews.url}"><h3>${oneNews.title}</h3></a>
    <div>${oneNews.description}</div>
    <img class = "col-6" src="${
      oneNews.image === "None" ? "./Assets/spillTheTea.PNG" : oneNews.image
    }">`;

      let returnInfo = fragmentFromString(newString);
      document.querySelector(".container1").appendChild(returnInfo);
    }
  });

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
