"use strict";
const titleDisplay = document.getElementById("title");
const mainDisplay = document.getElementById("mainDisplay");
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
        }
    }
});