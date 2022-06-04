const content = document.querySelector(".content");
const eventButton = document.querySelector(".eventButton");
const resetButton = document.querySelector(".resetButton");
const closeButton = document.querySelector(".closeButton");
const overlay = document.querySelector(".overlay");

let counter = 0;

if (localStorage.getItem("counterMem") !== null) {
    counter = localStorage.getItem("counterMem");
}

function openPopup() {
    counter++;

    localStorage.setItem("counterMem", counter);

    content.classList.add("active");
    overlay.classList.add("active");

    document.querySelector(".counting").innerHTML = counter + " times";
    if (counter > 5) {
        resetButton.style.visibility = "visible";
    }
}

function closePopup() {
    content.classList.remove("active");
    overlay.classList.remove("active");
}

function resetCount() {
    counter = 0;
    localStorage.setItem("counterMem", 0);

    resetButton.style.visibility = "hidden";

    document.querySelector(".counting").innerText = counter + " times";
}

// Open popup
eventButton.addEventListener("click", openPopup);

// Reset counter
resetButton.addEventListener("click", resetCount);

// Close popup
closeButton.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup)