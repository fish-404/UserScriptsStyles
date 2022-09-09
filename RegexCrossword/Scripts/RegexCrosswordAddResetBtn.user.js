// ==UserScript==
// @name         addResetButton
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.1.1
// @description  Add a reset button for challenges and palyerpuzzles
// @author       fish-404
// @match        https://regexcrossword.com/challenges/*
// @match        https://regexcrossword.com/playerpuzzles/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=regexcrossword.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function(e) {
        e.stopPropagation();
        addResetBtn();
    }, false);
})();

function addResetBtn() {
    console.log("Add Reset Button");
    const validateBtn = document.querySelector('.validate');
    const resetBtn = document.importNode(validateBtn, true);
    console.log(resetBtn);
    resetBtn.type = "reset";
    resetBtn.textContent = "Reset";
    resetBtn.classList.remove("btn-primary");
    resetBtn.classList.add("btn-danger");
    validateBtn.insertAdjacentElement('afterend', resetBtn);
}
