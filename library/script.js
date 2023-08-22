const leftArrow = document.querySelector("#arrowLeft");
const rightArrow = document.querySelector("#arrowRight");
const imagesAbout = document.querySelectorAll(".imagesAbout img");
const slider = document.querySelector(".imagesAbout");
const pagination = document.querySelectorAll(".slide");
const paginationCenter = document.querySelectorAll(".slide span");
const winterButton = document.querySelector("#winter");
const springButton = document.querySelector("#spring");
const summerButton = document.querySelector("#summer");
const autumnButton = document.querySelector("#autumn");
const winterBooks = document.querySelector(".winterBooks");
const springBooks = document.querySelector(".springBooks");
const summerBooks = document.querySelector(".summerBooks");
const autumnBooks = document.querySelector(".autumnBooks");
const signUpButton = document.querySelector("#signUp");
const logInButton = document.querySelector("#logIn");
const logInWindow = document.querySelector(".logInWindow");
const registerWindow = document.querySelector(".registerWindow");
const background = document.querySelector(".background");
const logotypeIcon = document.querySelector("#logotype");
const profileWindowLogIn = document.querySelector(".profileWindowLogIn");
const profileWindowNotLogIn = document.querySelector(".profileWindowNotLogIn");
const profileRegisterButton = document.querySelector("#profileRegister");
const profileLogInButton = document.querySelector("#profileLogIn");
const profileLogOutButton = document.querySelector("#profileLogOut");
const profileMyProfileButton = document.querySelector("#profileMyProfile");
const crossIcons = document.querySelectorAll(".cross img");
const hamburgerIcon = document.querySelector("#hamburgerIcon");
const registerLink = document.querySelector("#registerLink");
const logInLink = document.querySelector("#logInLink");
const logoText = document.querySelector("#logoText");

/*const text = function() {
    logoText.textContent = "JD";
}

logoText.addEventListener("mouseover", text);*/

const closeWindowNotLogIn = function() {
    body.classList.remove("scrollBlock");
    profileWindowNotLogIn.classList.remove("profileOpen");
}

const closeWindowLogIn = function() {
    body.classList.remove("scrollBlock");
    profileWindowLogIn.classList.remove("profileOpen");
}

const closeWindow = function() {
    background.classList.remove("open");
    logInWindow.classList.remove("open");
    registerWindow.classList.remove("open");
    background.classList.remove("open");
}

hamburgerIcon.addEventListener("click", closeWindowNotLogIn);

logotypeIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    body.classList.toggle("scrollBlock");
    profileWindowNotLogIn.classList.toggle("profileOpen");
});

profileRegisterButton.addEventListener("click", function() {
    closeWindowNotLogIn();
    registerWindow.classList.add("open");
    background.classList.add("open");
});

registerLink.addEventListener("click", function() {
    closeWindow();
    registerWindow.classList.add("open");
    background.classList.add("open");
});

logInLink.addEventListener("click", function() {
    closeWindow();
    logInWindow.classList.add("open");
    background.classList.add("open");
});

profileLogInButton.addEventListener("click", function() {
    closeWindowNotLogIn();
    logInWindow.classList.add("open");
    background.classList.add("open");
});

background.addEventListener("click", closeWindow);

crossIcons.forEach((crossIcon) => {
    crossIcon.addEventListener("click", closeWindow)
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_profileWindow = target == profileWindowNotLogIn || profileWindowNotLogIn.contains(target);
    const its_logotypeIcon = target == logotypeIcon;
    const profileWindow_is_active = profileWindowNotLogIn.classList.contains("profileOpen");

    if (!its_profileWindow && !its_logotypeIcon && profileWindow_is_active) {
        body.classList.remove("scrollBlock");
        profileWindowNotLogIn.classList.remove("profileOpen");
    }
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_profileWindow = target == profileWindowLogIn || profileWindowLogIn.contains(target);
    const its_logotypeIcon = target == logotypeIcon;
    const profileWindow_is_active = profileWindowLogIn.classList.contains("profileOpen");

    if (!its_profileWindow && !its_logotypeIcon && profileWindow_is_active) {
        body.classList.remove("scrollBlock");
        profileWindowLogIn.classList.remove("profileOpen");
    }
});

let sliderCount = 0;
let sliderWidth;
let itemWidth = document.querySelector(".imagesAbout img").offsetWidth;

window.addEventListener("resize", showSlide);

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

signUpButton.addEventListener("click", function() {

});

let winterTimeOut;

let springTimeOut;

let summerTimeOut;

let autumnTimeOut;

winterButton.addEventListener("click", function() {
    springBooks.classList.remove("activeSeason");
    summerBooks.classList.remove("activeSeason");
    autumnBooks.classList.remove("activeSeason");
    clearTimeout(springTimeOut);
    clearTimeout(summerTimeOut);
    clearTimeout(autumnTimeOut);
    winterTimeOut = setTimeout(() => {
        winterBooks.classList.add("activeSeason")
    }, 1300);
})

springButton.addEventListener("click", function() {
    summerBooks.classList.remove("activeSeason");
    autumnBooks.classList.remove("activeSeason");
    winterBooks.classList.remove("activeSeason");
    clearTimeout(summerTimeOut);
    clearTimeout(autumnTimeOut);
    clearTimeout(winterTimeOut);
    springTimeOut = setTimeout(() => {
        springBooks.classList.add("activeSeason")
    }, 1300);
})

summerButton.addEventListener("click", function() {
    autumnBooks.classList.remove("activeSeason");
    winterBooks.classList.remove("activeSeason");
    springBooks.classList.remove("activeSeason");
    clearTimeout(winterTimeOut);
    clearTimeout(springTimeOut);
    clearTimeout(autumnTimeOut);
    summerTimeOut = setTimeout(() => {
        summerBooks.classList.add("activeSeason")
    }, 1300);
})

autumnButton.addEventListener("click", function() {
    winterBooks.classList.remove("activeSeason");
    springBooks.classList.remove("activeSeason");
    summerBooks.classList.remove("activeSeason");
    clearTimeout(winterTimeOut);
    clearTimeout(springTimeOut);
    clearTimeout(summerTimeOut);
    autumnTimeOut = setTimeout(() => {
        autumnBooks.classList.add("activeSeason")
    }, 1300);
})

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

//Автоперелистывание
/*setInterval(() => {
    nextSlide()
}, 3000);*/

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