const searchButton = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");
 
const mainPara = document.querySelector(".main-para");
const mainImage = document.querySelector(".main-img");
 
 
// function to change image and text
function change() {
    const src = mainImage.src;
 
    if (src.endsWith("op1.png")) {
        const newSrc1 = src.replace("op1.png", "op2.png");
        mainImage.src = newSrc1;
        mainPara.textContent = "music for everyone.";
    } else if (src.endsWith("op2.png")) {
        const newSrc2 = src.replace("op2.png", "op1.png");
        mainImage.src = newSrc2;
        mainPara.textContent = "listen to an experience."
    }
}
setInterval(change, 5000);
 
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