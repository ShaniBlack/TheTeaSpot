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

  $(".searchTopic").text("");

  let datNewNew = new Request(topicUrl);
  fetch(datNewNew)
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < 5; i++) {
        const topicNews = response.news[i];

        let searchString = `<a href="${topicNews.url}" class="titleNews"><h3>${
          topicNews.title
        }</h3></a>
    <div>${topicNews.description}</div>
    <img class = "col-6" src="${
      topicNews.image === "None" ? "./Assets/spillTheTea.PNG" : topicNews.image
    }">`;

        let topicReturn = searchFormSting(searchString);
        document.querySelector(".searchTopic").appendChild(topicReturn);
      }
    });

  function searchFormSting(newString) {
    return document.createRange().createContextualFragment(newString);
  }
}

$(".btn").on("click", setValue);

//////////////
// recentlyViewed 
let container = document.querySelector(".container");
let recentImage = document.querySelector(".newsImage");
let recentDescription = document.querySelector(".description");

let recentLink = [];
let storedNews = JSON.parse(localStorage.getItem("recentLink"));
if (storedNews != null) {
  recentLink = storedNews;
}


// getRecents();

// function addRecents();
// for (let i = 0; i < 9; i++) {
//   const addRecent = addRecents[i];
  
// }



// 
  
// }

function clickedNews() {
  localStorage.setItem("recentLink", JSON.stringify(recentLink));

}

container.addEventListener("click", function(event) {
 if (event.target.matches("h3")) {
  console.log(event.target)
  event.preventDefault();

 let clickedI = (event.target.dataset.i);
 let clickedArray = (event.target.dataset.array);
 let storedHREF = "";

 if (clickedArray === "NYArray") {
 recentLink.push(NYArray[clickedI])
  storedHREF = NYArray[clickedI].url;
 }else{
 recentLink.push(oneNewsArray[clickedI])
 storedHREF = oneNewsArray[clickedI].url;

}
clickedNews()
 
window.location = storedHREF
}
})