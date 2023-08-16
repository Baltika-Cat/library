const leftArrow = document.querySelector("#arrowLeft");
const rightArrow = document.querySelector("#arrowRight");
const imagesAbout = document.querySelectorAll(".imagesAbout img");
const slider = document.querySelector(".imagesAbout");
const itemWidth = document.querySelector(".imagesAbout img").clientWidth;
const pagination = document.querySelectorAll(".carousel span");
const secondPag = document.querySelector("#slideSecond");
const busts = document.querySelector("#busts");

let i = 0;

/*const slideNext = function () {
    imagesAbout[i].style.display = "none";
    i++;
    if(i > imagesAbout.length - 1) {
        i = 0;
    }
    imagesAbout[i].style.display = "block";
}

const slidePrev = function () {
    imagesAbout[i].style.display = "none";
    i--;
    if(i < 0) {
        i = imagesAbout.length - 1;
    }
    imagesAbout[i].style.display = "block";
}

leftArrow.addEventListener("click", slidePrev);
rightArrow.addEventListener("click", slideNext);*/

/*leftArrow.onclick = function (){
    imagesAbout[i].style.display = "none";
    i--;
    if(i < 0) {
        i = imagesAbout.length - 1;
    }
    imagesAbout[i].style.display = "block";
}

rightArrow.onclick = function (){
    imagesAbout[i].style.display = "none";
    i++;
    if(i > imagesAbout.length - 1) {
        i = 0;
    }
    imagesAbout[i].style.display = "block";
}*/

leftArrow.addEventListener("click", scrollToPrevItem);
rightArrow.addEventListener("click", scrollToNextItem);
pagination[i].addEventListener("click", scrollToItem);

function scrollToPrevItem() {
    slider.scrollBy({left: -itemWidth, top: 0, behavior: "smooth"});
}

function scrollToNextItem() {
    slider.scrollBy({left: itemWidth, top: 0, behavior: "smooth"});
}

function scrollToItem() {
    imagesAbout[i].scrollIntoView({behavior: "smooth"});
    pagination[i].classList.toggle("active");
}
//Найти индекс массива передаваемого элемета пагинации и вписать его сюда как i
//Убрать ссылки из пагинации в html