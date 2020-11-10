// API URL and key
var url =
  "https://api.currentsapi.services/v1/search?" +
  "keywords=Amazon&language=en&" +
  "apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";
// request from the API
var req = new Request(url);
fetch(req)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // let articalDivEl = document.createElement("div");
    // let titleDivEl = document.createElement("div");
    // titleDivEl.textContent = JSON.stringify(response.news[3].title);
    // aritcalDivEl.appendChild(titleDivEl);

    // let descriptionDivEl = document.createElement("div");
    // descriptionDivEl.textcontent = JSON.stringify(respnse.news[3].description);

    // let imgDivEl = document.createElement("img");
    // imgDivEl.textcontent = JSON.stringify(respnse.news[3].img);

    // for loop after for each title,description,img, url
    // console.log(returnPlaceHolder());
    let newString = `<div>${response.news[3].title}</div>
    <div>${response.news[3].description}</div>
    <img src="${
      response.news[3].image === "None"
        ? "./Assets/spillTheTea.PNG"
        : response.news[3].image
    }">
    <div>${response.news[3].url}</div>`;

    let returnInfo = fragmentFromString(newString);
    document.querySelector(".container1").appendChild(returnInfo);
  });

// function returnPlaceHolder() {
//   return "data:image/jpeg;base64,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";
// }

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
