const leftArrow = document.querySelector("#arrowLeft");
const rightArrow = document.querySelector("#arrowRight");
const imagesAbout = document.querySelectorAll(".imagesAbout img");
const slider = document.querySelector(".imagesAbout");
const pagination = document.querySelectorAll(".slide");
const paginationCenter = document.querySelectorAll(".slide span");

let sliderCount = 0;
let sliderWidth;
let itemWidth = document.querySelector(".imagesAbout img").offsetWidth;

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

/*leftArrow.addEventListener("click", scrollToPrevItem);
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
}*/
//Найти индекс массива передаваемого элемета пагинации и вписать его сюда как i
//Убрать ссылки из пагинации в html
window.addEventListener("resize", showSlide);

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

function nextSlide() {
    sliderCount++;
    rollSlider();
    thisSlide(sliderCount);
    if(sliderCount === imagesAbout.length - 1) {
        leftArrow.classList.remove("arrowDisabled");
        rightArrow.classList.add("arrowDisabled");
    } else {
        rightArrow.classList.remove("arrowDisabled");
        leftArrow.classList.remove("arrowDisabled");
    }
}


function prevSlide() {
    sliderCount--;
    rollSlider();
    thisSlide(sliderCount);
    if(sliderCount === 0) {
        leftArrow.classList.add("arrowDisabled");
        rightArrow.classList.remove("arrowDisabled");
    } else {
        leftArrow.classList.remove("arrowDisabled");
        rightArrow.classList.remove("arrowDisabled");
    }
}

function showSlide() {
    if(window.innerWidth <= 1024) {
        sliderWidth = document.querySelector(".slider").offsetWidth;
        slider.style.width = sliderWidth * imagesAbout.length + "px";
        imagesAbout.forEach(item => item.style.width = sliderWidth + "px");
        console.log(window.outerWidth);
    } else {
        sliderWidth = document.querySelector(".slider").offsetWidth;
        slider.style.width = sliderWidth * imagesAbout.length + "px";
        imagesAbout.forEach(item => item.style.width = (sliderWidth - 50) / 3 + "px");
        console.log(window.innerWidth);
    }
    rollSlider();
}

showSlide();

function rollSlider() {
    if(window.innerWidth <= 1024) {
        slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
    } else if(window.innerWidth >= 1024.02) {
        slider.style.transform = `translateX(${-sliderCount * (((sliderWidth - 50) / 3) + 25)}px)`
    }
}

function thisSlide(index) {
    paginationCenter.forEach(item => item.classList.remove("activePag"));
    pagination.forEach(item => item.classList.remove("activePag"));
    paginationCenter[index].classList.add("activePag");
    pagination[index].classList.add("activePag");
}

pagination.forEach((point, index) => {
    point.addEventListener("click", () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        console.log(sliderCount);
        if(sliderCount === 0) {
            rightArrow.classList.remove("arrowDisabled");
            leftArrow.classList.add("arrowDisabled");
        } else if(sliderCount === imagesAbout.length - 1) {
            leftArrow.classList.remove("arrowDisabled");
            rightArrow.classList.add("arrowDisabled");
        } else {
            leftArrow.classList.remove("arrowDisabled");
            rightArrow.classList.remove("arrowDisabled");
        }
    })
})