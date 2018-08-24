"use strict";
const titleDisplay = document.getElementById("title");
const mainDisplay = document.getElementById("mainDisplay");

document.addEventListener("keypress", function(event) {
    console.log(event.keyCode);
    mainDisplay.innerHTML = event.keyCode;
})