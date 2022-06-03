const popup = document.querySelector(".popup");
const content = document.querySelector(".content");
const eventButton = document.querySelector(".eventButton");
const resetButton = document.querySelector(".resetButton");
const closeButton = document.querySelector(".closeButton");
let countClickButton = 0;
//localStorage dodac

function closePopup() {
    popup.classList.remove("active");
    content.classList.remove("active");
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

    document.querySelector(".counting").innerText = countClickButton + " times";
    if (countClickButton > 5) {
        resetButton.style.visibility = "visible";
    }
}

eventButton.addEventListener("click", Popup);
resetButton.addEventListener("click", resetCount);
closeButton.addEventListener("click", closePopup);