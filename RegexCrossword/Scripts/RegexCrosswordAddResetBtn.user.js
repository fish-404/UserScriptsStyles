// ==UserScript==
// @name         addResetButton
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.1
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
        addResetBtn(document.querySelector('.validate'));
    }, false);
})();

function addResetBtn(btn) {
    console.log("Add Reset Button");
    const resetBtn = document.importNode(btn, true);
    console.log(resetBtn);
    resetBtn.type = "reset";
    resetBtn.textContent = "Reset";
    resetBtn.classList.remove("btn-primary");
    resetBtn.classList.add("btn-danger");
    btn.insertAdjacentElement('afterend', resetBtn);
}
