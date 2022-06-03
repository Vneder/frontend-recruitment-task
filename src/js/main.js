const popup = document.querySelector(".popup");
const content = document.querySelector(".content");
const eventButton = document.querySelector(".eventButton");
const resetButton = document.querySelector(".resetButton");
const closeButton = document.querySelector(".closeButton");
const overlay = document.querySelector(".overlay");
let countClickButton = 0;
//localStorage dodac

function closePopup() {
    popup.classList.remove("active");
    content.classList.remove("active");
    overlay.classList.remove("active");
}

function resetCount() {
    countClickButton = 0;
    resetButton.style.visibility = "hidden";
    document.querySelector(".counting").innerText = countClickButton + " times";
}

function Popup() {
    countClickButton++;

    popup.classList.add("active");
    content.classList.add("active");
    overlay.classList.add("active");

    document.querySelector(".counting").innerText = countClickButton + " times";
    if (countClickButton > 5) {
        resetButton.style.visibility = "visible";
    }
}

overlay.addEventListener("click", closePopup)
eventButton.addEventListener("click", Popup);
resetButton.addEventListener("click", resetCount);
closeButton.addEventListener("click", closePopup);