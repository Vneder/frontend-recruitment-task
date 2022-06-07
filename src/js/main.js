const content = document.querySelector(".popupContent");
const eventBtn = document.querySelector(".eventBtn");
const resetBtn = document.querySelector(".resetBtn");
const closeBtn = document.querySelector(".closeBtn");
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

    document.querySelector(".count").innerHTML = counter + " times";
    if (counter > 5) {
        resetBtn.style.visibility = "visible";
    }
}

function closePopup() {
    content.classList.remove("active");
    overlay.classList.remove("active");
}

function resetCount() {
    counter = 0;
    localStorage.setItem("counterMem", 0);

    resetBtn.style.visibility = "hidden";

    document.querySelector(".count").innerText = counter + " times";
}

// Open popup
eventBtn.addEventListener("click", openPopup);

// Reset counter
resetBtn.addEventListener("click", resetCount);

// Close popup
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
document.onkeydown = function (e) {
    if (e.key == "Escape") {
        closePopup();
    }
}