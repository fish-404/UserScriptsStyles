// ==UserScript==
// @name         RegexCrosswordHelper
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.1
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
        handler(e);
    }, true);

})();

function handler(event) {
    rowRuleCheck(event);
    colRuleCheck(event);
}

function rowRuleCheck(event) {
    let row = event.target.closest('tr');
    let rowClueContainer = row.querySelector('span');
    let rowInputs = row.querySelectorAll('td input');
    changeTextColor(rowClueContainer, rowInputs, event);
}

function colRuleCheck(event) {
    let colIndex = event.target.closest('td').cellIndex;
    console.log("colIndex", colIndex);
    let colClueContainer = event.target.closest('table').querySelectorAll('th div.clue span')[colIndex-1];
    let colInputs = [];
    let rows = event.target.closest('tbody').querySelectorAll('tr');
    rows.forEach((row) => {
        colInputs.push(row.querySelectorAll('td input')[colIndex-1]);
    });
    changeTextColor(colClueContainer, colInputs, event);
}

function regexCheck(regexExpression, strToCheck) {
    let regex = new RegExp(regexExpression, 'i');
    return regex.test(strToCheck);
}

function combineInputs(inputArr, event) {
    let inputChars = [];
    inputArr.forEach((singleInput) => {
        if (singleInput === event.target) {
            inputChars.push(event.key);
        }
        else {
            inputChars.push(singleInput.value);
        }
    });
    return inputChars.join('');
}

function changeTextColor(clueContainer, inputs, event)
{
    if (regexCheck(clueContainer.getAttribute('title'), combineInputs(inputs, event))) {
        clueContainer.style.color = "green";
    }
    else {
        clueContainer.style.color = "red";
    }
}
