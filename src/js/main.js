const popup = document.querySelector(".popup");
const eventButton = document.querySelector(".eventButton");
const resetButton = document.querySelector(".resetButton");
let countClickButton = 0;
//localStorage dodac

function resetCount() {
    countClickButton = 0;
    resetButton.style.visibility = "hidden";
    document.querySelector(".counting").innerText = countClickButton + " times";
}

function Popup() {
    countClickButton++;

    //popup.classList.toggle("active");

    document.querySelector(".counting").innerText = countClickButton + " times";
    if (countClickButton > 5) {
        resetButton.style.visibility = "visible";
    }
}

eventButton.addEventListener("click", Popup);
resetButton.addEventListener("click", resetCount);