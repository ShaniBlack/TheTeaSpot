let keyWord = " ";
function setValue(event) {
  event.preventDefault();
  keyWord = $(".form-control").val();
  let topicUrl =
    "https://api.currentsapi.services/v1/search?keywords=" +
    keyWord +
    "&language=en&" +
    "apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";

  $(".col-6 strong").text("");

  $(".col-6 p").text("");

  let datNewNew = new Request(topicUrl);
  fetch(datNewNew)
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < 5; i++) {
        const topicNews = response.news[i];

        let searchString = `<a href="${topicNews.url}"><h3>${
          topicNews.title
        }</h3></a>
    <div>${topicNews.description}</div>
    <img class = "col-6" src="${
      topicNews.image === "None" ? "./Assets/spillTheTea.PNG" : topicNews.image
    }">
    
    `;

        let topicReturn = searchFormSting(searchString);
        document.querySelector(".container1").appendChild(topicReturn);
      }
    });

  function searchFormSting(newString) {
    return document.createRange().createContextualFragment(newString);
  }
}

$(".btn").on("click", setValue);
