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
const leftArrow = document.querySelector("fa-arrow-left");
const imageContainer = document.getElementById("img-container");
let img = 0;

rightArrow.addEventListener("click", () => {
    let imgC =images[img].src;
    img++;
    imageContainer.src = imgC;
})