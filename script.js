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

document.getElementById("warningIcon").addEventListener("onhover", function() {
    alert("hi");
});
