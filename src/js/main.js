const eventButton = document.querySelector(".eventButton");
let countClickButton = 0;
//localStorage dodac


function Popup() {
    countClickButton++;
    document.querySelector(".counting").innerText = countClickButton + " times";
    if (countClickButton > 5) {
        alert("To już ponad 5");
        // Pokazać przycisk w popupie do resetowania licznika
    }
}

eventButton.addEventListener("click", Popup);