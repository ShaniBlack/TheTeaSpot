let recentTitle = document.querySelector(".titleNews");
console.log(recentTitle);
let recentDescription = document.querySelector(".description");
console.log(recentDescription);
let recentImage = document.querySelector("col-6");
console.log(recentImage);


let recentlyViewedArray = [];

let clickedTitles;

$(".title").on("click", function(event){
    event.preventDefault();
    recentlyViewedArray.prepend(view);
    console.log(recentlyViewedArray);
    
    getViewed(clickedTitles)
})
     let view = function() {
        localStorage.setItem("views", JSON.stringify(views));
        console.log(view);
     }