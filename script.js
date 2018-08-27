"use strict";
const titleDisplay = document.getElementById("title");
const mainDisplay = document.getElementById("mainDisplay");
const popupWarning = document.getElementById("warning");
const secondaryDisplays = document.getElementsByClassName("codeItemText");
const nSecondaryDisplays = secondaryDisplays.length;

document.addEventListener("keypress", function(event) {
    console.log(event.key);
    titleDisplay.innerHTML = event.key;
    mainDisplay.innerHTML = event.key;
    for (let i = 0; i < nSecondaryDisplays; i++) {
        switch (i) {
            case 0:
                secondaryDisplays[i].innerHTML = event.key;
                break;
            case 1:
                secondaryDisplays[i].innerHTML = event.code;
                break;
            case 2:
                secondaryDisplays[i].innerHTML = event.locale;
                break;
            case 3:
                secondaryDisplays[i].innerHTML = event.keyCode;
        }
    }
});

document.getElementById("warningIcon").addEventListener("mouseover", function() {
    popupWarning.style.display = "inline";
});

document.getElementById("warningIcon").addEventListener("mouseout", function() {
    popupWarning.style.display = "none";
});