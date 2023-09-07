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
const logInLogInInput = document.querySelector("#logInLogInInput");
const logInPasswordInput = document.querySelector("#logInPasswordInput");
const registerFirstNameInput = document.querySelector("#registerFirstNameInput");
const registerLastNameInput = document.querySelector("#registerLastNameInput");
const registerEmailInput = document.querySelector("#registerEmailInput");
const registerPasswordInput = document.querySelector("#registerPasswordInput");
const registerWindowSignUp = document.querySelector("#registerWindowSignUp");
const logInWindowLogIn = document.querySelector("#logInWindowLogIn");
const user = document.querySelector("#user");
const firstName = document.querySelector("#registerFirstNameInput");
const lastName = document.querySelector("#registerLastNameInput");
const profileCardNumber = document.querySelector("#profileCardNumber");
const bookButtons = document.querySelectorAll(".buy");
const myProfileWindow = document.querySelector("div.myProfileWindow");
const crossProfile = document.querySelector(".crossProfile");
const firstLetters = document.querySelector(".firstLetters");
const fullName = document.querySelector(".fullName");
const booksCount = document.querySelector("#booksCount");
const visitsCount = document.querySelector("#visitsCount");
const cardNumberNumber = document.querySelector(".cardNumberNumber");
const cardCopy = document.querySelector(".cardNumberCopy");
const booksList = document.querySelector(".rentedBooks ul");
const buyCardWindow = document.querySelector(".buyCardWindow");
const whiteCross = document.querySelector("#whiteCross");
const buyCardForm = document.querySelector("#buyCardForm");
const buyCardButton = document.querySelector("#buyCardBuy");
const checkCardButton = document.querySelector(".checkCard");
const signUp = document.querySelector("#signUp");
const logInInCard = document.querySelector("#logIn");
const checkLibraryCard = document.querySelector("#passwordInput");
const readerName = document.querySelector("#nameInput");
const checkLibraryCardButton = document.querySelector("#findCardForm button");
const informationBlockInDigitalCard = document.querySelector(".informationBlockDigitalCard");
const visitsCountDigitalCard = document.querySelector("#visitsCountDigitalCard");
const bonusesCountDigitalCard = document.querySelector("#bonusesCountDigitalCard");
const booksCountDigitalCard = document.querySelector("#booksCountDigitalCard");

let values = [];

function register() {
    values[0] = registerPasswordInput.value;
    values[1] = firstName.value;
    values[2] = lastName.value;
    values[4] = 0;
    values[5] = [];
    values[6] = [];
    values[7] = "false";
    let cardNumber = "";
    for(let i = 0; i < 9; i++) {
        cardNumber += (Math.floor(Math.random() * 16)).toString(16);
    }
    values[3] = cardNumber;
    localStorage.setItem((registerEmailInput.value).toLowerCase(), JSON.stringify(values));
    localStorage.setItem(values[3], JSON.stringify(values));
    logIn();
    /*console.log(localStorage.getItem(registerEmailInput.value));
    console.log(logInLogInInput);
    console.log(registerEmailInput.value);
    console.log(registerPasswordInput.value);
    console.log(logInPasswordInput);
    console.log(localStorage.getItem("user"));    
    console.log(localStorage.getItem(logInLogInInput.value));*/
}

registerWindowSignUp.addEventListener("click", register);

function capitalize(str) {
    let capArr = str.split(" ").map(word => {
       return word[0].toUpperCase() + word.slice(1);
    })
    return capArr.join(" ");
}

function checkValid(e) {
    const target = e.target.form;
    const isValid = target.checkValidity();
    if(isValid) {
        target.querySelector("button").disabled = false;
    }
}

buyCardButton.addEventListener("click", function() {
    let values = [];
    if((localStorage.getItem("name")).toLowerCase() != null) {
        values = JSON.parse(localStorage.getItem((localStorage.getItem("name")).toLowerCase()));//
    } else {
        values = JSON.parse(localStorage.getItem((localStorage.getItem("card")).toLowerCase()));
    }
    values[7] = "true";
    localStorage.setItem((localStorage.getItem("name")).toLowerCase(), JSON.stringify(values));//
    localStorage.setItem((localStorage.getItem("card")).toLowerCase(), JSON.stringify(values));//
    console.log(values[7]);
})

buyCardForm.addEventListener("input", checkValid);

function logIn() {
    let values = [];
    if(logInLogInInput.value != "") {
        values = JSON.parse(localStorage.getItem((logInLogInInput.value).toLowerCase()));
    } else {
        values = JSON.parse(localStorage.getItem((registerEmailInput.value).toLowerCase()));
    }
    if(values[0] === null) {
        console.log("E-mail is not register");
    } else {
        if((values[0] === logInPasswordInput.value) || values[0] === registerPasswordInput.value) {
            localStorage.setItem("user", "authorized");
            let text = (values[1])[0] + (values[2])[0];
            let name = `${values[1]} ${values[2]}`;
            let cardNumber = values[3].toUpperCase();
            values[4]++;
            localStorage.setItem(registerEmailInput.value, JSON.stringify(values));//
            localStorage.setItem(logInLogInInput.value, JSON.stringify(values));
            localStorage.setItem(values[3], JSON.stringify(values));
            if(logInLogInInput.value != "") {
                if(logInLogInInput.value != values[3]) {
                    localStorage.setItem("name", logInLogInInput.value);//
                } else {
                    localStorage.remove("name");
                }    
            } else {
                localStorage.setItem("name", registerEmailInput.value);
            }
            localStorage.setItem("logo", text);
            localStorage.setItem("fullName", name);
            localStorage.setItem("card", cardNumber);
            localStorage.setItem("count", values[4]);
            profileCardNumber.textContent = values[3].toUpperCase();
            localStorage.setItem("books", JSON.stringify(values[5]));
            localStorage.setItem("buttons", JSON.stringify(values[6]));
            localStorage.setItem("hasCard", values[7]);
        }    
    }
}

bookButtons.forEach((bookButton) => {
    bookButton.addEventListener("click", function() {
        if(localStorage.getItem("user") === "authorized") {    
            buttonName = this.name;
            let book = bookButton.closest(".bookBorder");
            let bookName = (book.getElementsByClassName("bookName")[0]).textContent.toLowerCase();
            let author = (book.getElementsByClassName("author"))[0].textContent.toLowerCase();
            let bookNameInfo = capitalize(bookName);
            let authorInfo = capitalize(author);
            let bookInfo = `${bookNameInfo}, ${authorInfo}`;
            /*bookButton.classList.remove("buy");
            bookButton.classList.add("own");
            bookButton.textContent = "Own";
            bookButton.disabled = true;*/
            //values[5] = JSON.parse(localStorage.getItem("books"));
            //values[6] = JSON.parse(localStorage.getItem("buttons"));
            let values = [];
            if((localStorage.getItem("name")).toLowerCase() != null) {
                values = JSON.parse(localStorage.getItem((localStorage.getItem("name")).toLowerCase()));//
            } else {
                values = JSON.parse(localStorage.getItem((localStorage.getItem("card")).toLowerCase()));
            }
            if(values[7] === "true") {
                bookButton.classList.remove("buy");
                bookButton.classList.add("own");
                bookButton.textContent = "Own";
                bookButton.disabled = true;
                values[5].push(bookInfo);
                values[6].push(buttonName);
                booksCount.textContent = values[5].length;
                booksCountDigitalCard.textContent = values[5].length;
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(bookInfo));
                console.log(li);
                booksList.appendChild(li);
            } else {
                buyCardWindow.classList.add("open");
                background.classList.add("open");
            }
            console.log(localStorage.getItem("books"));
            console.log(localStorage.getItem("buttons"));
            //localStorage.setItem("books", JSON.stringify(values[5]));
            //localStorage.setItem("buttons", JSON.stringify(values[6]));
            localStorage.setItem((localStorage.getItem("name")).toLowerCase(), JSON.stringify(values));//
            localStorage.setItem((localStorage.getItem("card")).toLowerCase(), JSON.stringify(values));//
            console.log(localStorage.getItem("books"));
            console.log(localStorage.getItem("buttons"));
        } else {
            logInWindow.classList.add("open");
            background.classList.add("open");
        }
    })
})

logInWindowLogIn.addEventListener("click", logIn);

profileLogOutButton.addEventListener("click", function() {
    localStorage.removeItem("user");
    location.reload();
})

window.addEventListener("load", function() {
    //localStorage.clear();
    if(localStorage.getItem("user") === "authorized") {
        user.classList.add("authorized");
        logotypeIcon.classList.add("authorized");
        profileWindowNotLogIn.classList.add("profileNonActive");
        console.log("authorized");
        logoText.textContent = (localStorage.getItem("logo")).toUpperCase();
        firstLetters.textContent = (localStorage.getItem("logo")).toUpperCase();
        fullName.textContent = (localStorage.getItem("fullName"));
        profileCardNumber.textContent = localStorage.getItem("card");
        let values = [];
        if((localStorage.getItem("name")).toLowerCase() != null) {
            values = JSON.parse(localStorage.getItem((localStorage.getItem("name")).toLowerCase()));//
        } else {
            values = JSON.parse(localStorage.getItem((localStorage.getItem("card")).toLowerCase()));
        }
        let booksArray = values[5];//JSON.parse(localStorage.getItem("books"));
        booksCount.textContent = booksArray.length;
        visitsCount.textContent = localStorage.getItem("count");
        visitsCountDigitalCard.textContent = localStorage.getItem("count");
        cardNumberNumber.textContent = localStorage.getItem("card");
        let buttons = values[6];//JSON.parse(localStorage.getItem("buttons"));
        bookButtons.forEach((bookButton) => {
            buttons.forEach((button) => {
                if((bookButton === (document.getElementsByName(button)[0]))) {
                    bookButton.classList.remove("buy");
                    bookButton.classList.add("own");
                    bookButton.textContent = "Own";
                    bookButton.disabled = true;
                }
            })
        })
        booksArray.forEach((book) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(book));
            booksList.appendChild(li);
        })
        informationBlockInDigitalCard.classList.add("open");
        checkLibraryCardButton.classList.add("close");
    } else {
        console.log("non-authorized");
    }
})

cardCopy.addEventListener("click", function() {
    navigator.clipboard.writeText(localStorage.getItem("card"));
})
/*const text = function() {
    logoText.textContent = "JD";
}

logoText.addEventListener("mouseover", text);*/

const closeWindowNotLogIn = function() {
    body.classList.remove("scrollBlock");
    profileWindowNotLogIn.classList.remove("profileOpen");
    profileWindowLogIn.classList.remove("profileOpen");
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
    myProfileWindow.classList.remove("open");   
    buyCardWindow.classList.remove("open"); 
}

hamburgerIcon.addEventListener("click", closeWindowNotLogIn);

logotypeIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    body.classList.toggle("scrollBlock");
    if(localStorage.getItem("user") === "authorized") {
        profileWindowLogIn.classList.toggle("profileOpen");
    } else {
        profileWindowNotLogIn.classList.toggle("profileOpen");
    }
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

profileMyProfileButton.addEventListener("click", function() {
    closeWindow();
    myProfileWindow.classList.add("open");
    background.classList.add("open");
})

background.addEventListener("click", closeWindow);

crossIcons.forEach((crossIcon) => {
    crossIcon.addEventListener("click", closeWindow)
});

crossProfile.addEventListener("click", closeWindow);

whiteCross.addEventListener("click", closeWindow);

checkLibraryCardButton.addEventListener("click", function() {
    let values = JSON.parse(localStorage.getItem((checkLibraryCard.value).toLowerCase()));
    booksCountDigitalCard.textContent = values[5].length;
    visitsCountDigitalCard.textContent = values[4];
    if((readerName.value).toLowerCase() === (`${values[1]} ${values[2]}`).toLowerCase()) {
        informationBlockInDigitalCard.classList.add("open");
        checkLibraryCardButton.classList.add("close");
        setTimeout(() => {
            informationBlockInDigitalCard.classList.remove("open");
            checkLibraryCardButton.classList.remove("close");
            checkLibraryCard.value = "";
            readerName.value = "";
        }, 10000)
    }
})

logInInCard.addEventListener("click", function() {
    if((localStorage.getItem("user")) != "authorized") {
        logInWindow.classList.add("open");
        background.classList.add("open");
    }
})

signUp.addEventListener("click", function() {
    if((localStorage.getItem("user")) != "authorized") {
        registerWindow.classList.add("open");
        background.classList.add("open");
    }
})

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_profileWindow = target == profileWindowNotLogIn || profileWindowNotLogIn.contains(target);
    const its_logotypeIcon = target == logotypeIcon;
    const profileWindow_is_active = profileWindowNotLogIn.classList.contains("profileOpen") || profileWindowLogIn.classList.contains("profileOpen");

    if (!its_profileWindow && !its_logotypeIcon && profileWindow_is_active) {
        body.classList.remove("scrollBlock");
        profileWindowNotLogIn.classList.remove("profileOpen");
        profileWindowLogIn.classList.remove("profileOpen");
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