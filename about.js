const searchButton = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
 
searchButton.addEventListener("click", () => {
    searchInput.classList.remove("none");
})
 
// function to search the songs
const searchItemContainer = document.querySelector(".search-items");
searchInput.addEventListener("keydown", (e) => {
    if (searchInput.value != "") {
        searchItemContainer.classList.remove("none");
    } else if ( searchInput.value == "") {
        searchItemContainer.classList.add("none");
    }
})