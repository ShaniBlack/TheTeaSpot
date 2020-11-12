// Health News JS //
let newsTopic = $("strong").val();
let url =  "https://api.currentsapi.services/v1/search?keywords=" +
newsTopic + "&language=en&" + "apiKey=tG_ULlR7sKGiUfm3iBaH7wvbUVRDpIwqs98FCt11_aI8DFlL";


$.ajax({
    url: url,
    method: "GET",
}).then(function(response){
    console.log(response.news);
    console.log(response.news[0].title);
    console.log(response.news[0].description);
    console.log(response.news[0].image);
    console.log(response.news[0].url);
    
    for (let i = 0; i < 5; i++) {
        const oneNews = response.news[i];
        let newString = `<a href="${oneNews.url}"><h3>${oneNews.title}</h3></a>
      <div>${oneNews.description}</div>
      <img class= "col-6" src="${
        oneNews.image === "None" ? "../Assets/spillTheTea.PNG" : oneNews.image 
    }">`;
        let returnInfo = fragmentFromString(newString);
        document.querySelector(".topicArticles").appendChild(returnInfo);
      }
});

function fragmentFromString(strHTML) {
    return document.createRange().createContextualFragment(strHTML);
  }







// WORLD News JS //
// US News JS //
// Technology News JS //
// Political News JS //
