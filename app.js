let images = [
{
    id: 1,
    src: "/img/IMG-20230921-WA0052.jpg"
}, 
{
    id: 2,
    src: "/img/IMG-20230921-WA0056.jpg"
}, 
{
    id: 3,
    src: "/img/IMG-20230921-WA0070.jpg"
}]

const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");
const imageContainer = document.getElementById("img-container");
let img = 0;
imageContainer.src = images[img].src;

rightArrow.addEventListener("click", () => {
    if(img < 2){
        img++;
        imageContainer.src = images[img].src;
        leftArrow.style.display = "block"
        // rightArrow.style.display = "none";
    } else {
        // img++;
        // imageContainer.src = images[img].src;
        rightArrow.style.display = "none";
    }  
})
leftArrow.addEventListener("click", () => {
    if(img > 0){
        img--;
        rightArrow.style.display = "block"
        imageContainer.src = images[img].src;
    } else{
        leftArrow.style.display = "none"
    }  
})