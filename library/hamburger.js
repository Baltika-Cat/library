/*const nav = document.nav;
const icon = document.querySelector("#hamburgerIcon");
const popup = document.querySelector("#popup");
const body = document.body;
const navigation = document.querySelector("#navigation").cloneNode(1);
const iconContainer = document.querySelector("#iconContainer");
const logotype = document.querySelector("#logotype");

icon.addEventListener("click", iconHandler);


function iconHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    icon.classList.toggle("active");
    logotype.classList.toggle("positionFinal");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(navigation);
}

const links = Array.from(navigation.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick)
});



function closeOnClick() {
    if(popup.classList.contains("open")) {
        popup.classList.remove("open");
        icon.classList.remove("active");
        logotype.classList.remove("positionFinal");
    } else {
        popup.classList.toggle("open");
    }
}*/
const body = document.body;
const navigation = document.querySelector("#navigation").cloneNode(1);
const logotype = document.querySelector("#logotype");
const btnMenu = document.querySelector("#hamburgerIcon");
const menu = document.querySelector("#popup");
const toggleMenu = function () {
    body.classList.toggle("noscroll");
    menu.classList.toggle("open");
    btnMenu.classList.toggle("active");
    logotype.classList.toggle("positionFinal");
    renderPopup();
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

logotype.addEventListener("click", function() {
    menu.classList.remove("open");
    btnMenu.classList.remove("active");
    logotype.classList.remove("positionFinal");
    body.classList.remove("noscroll");
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

function renderPopup() {
    popup.appendChild(navigation);
}

const links = Array.from(navigation.children);

links.forEach((link) => {
    link.addEventListener("click", toggleMenu)
});

