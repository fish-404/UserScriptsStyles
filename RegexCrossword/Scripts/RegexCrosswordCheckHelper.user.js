// ==UserScript==
// @name         RegexCrosswordHelper
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.7.3
// @description  Regex Crossword input check helper
// @author       fish-404
// @match        https://regexcrossword.com/challenges/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=regexcrossword.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("keydown", function(e) {
        e.stopPropagation();
        if (keyCheck(e.key)) {
            handler(e);
        }
    }, true);

})();

function keyCheck(key) {
    return keyLengthCheck(key) || isClearKey(key);
}

function isClearKey(key) {
    return key === 'Backspace' || key === 'Delete';
}

function keyLengthCheck(key) {
    return key.length === 1;
}

function handler(event) {
    rowRuleCheck(event);
    colRuleCheck(event);
}

function rowRuleCheck(event) {
    cluesCheck(
        document.querySelectorAll('tr.highlight th.clue span')
        , document.querySelectorAll('tr.highlight td input')
        , event
    );
}

function colRuleCheck(event) {
    let colIndex = event.target.closest('td').cellIndex;

    cluesCheck(
        document.querySelectorAll('th.highlight div.clue span')
        , document.querySelectorAll(`tbody tr td:nth-child(${colIndex+1}) input`)
        , event
    );
}

function cluesCheck(containers, inputs, event) {
    containers.forEach((container) => {
        changeTextColor(container, inputs, event);
    });
}

function regexCheck(regexExpression, strToCheck) {
    return new RegExp(`^${regexExpression}\$`, 'i').test(strToCheck);
}

function combineInputs(inputArr, event) {
    let inputChars = [];
    inputArr.forEach((singleInput) => {
        if (singleInput === event.target) {
            if (isClearKey(event.key)) {
                inputChars.push('');
            }
            else {
                inputChars.push(event.key);
            }
        }
        else {
            inputChars.push(singleInput.value);
        }
    });
    return inputChars.join('');
}

function changeTextColor(clueContainer, inputs, event) {
    let clue = clueContainer.getAttribute('title');
    if (clue !== null && clue !== "") {
        if (regexCheck(clue, combineInputs(inputs, event))) {
            setTextColor(clueContainer, "green");
        }
        else {
            setTextColor(clueContainer, "red");
        }
    }
}

function setTextColor(container, color) {
    container.style.color = color;
}


