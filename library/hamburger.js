const nav = document.nav;
const icon = document.querySelector("#hamburgerIcon");
const popup = document.querySelector("#popup");
const body = document.body;
const navigation = document.querySelector("#navigation").cloneNode(1);
const logotype = document.querySelector("#logotype").cloneNode(1);
const iconContainer = document.querySelector("#iconContainer");

let flag = false;


icon.addEventListener("click", iconHandler);


function iconHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    icon.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(navigation);
    popup.appendChild(logotype);
}

const links = Array.from(navigation.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick)
});

function closeOnClick() {
    popup.classList.remove("open");
    icon.classList.remove("active");
    body.classList.remove("noscroll");
}
