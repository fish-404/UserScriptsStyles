// ==UserScript==
// @name         hideLeetCodePlus
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.2.1
// @description  Hide Leetcode Plus Problems
// @author       fish-404
// @match        https://leetcode.cn/problemset/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const problemsNode = document.querySelector("div[role='table']");

    const config = {
        subtree: true
        , childList: true
    };

    const observer = new MutationObserver(hidePlusProblems);
    observer.observe(problemsNode, config);
})();

function hidePlusProblems(mutationList) {
    let preTargetRow;
    mutationList.forEach((mutation) => {
        let curTargetRow = mutation.target.closest("div[role='row']");
        if (curTargetRow !== null && curTargetRow !== preTargetRow) {
            preTargetRow = curTargetRow;
            let searchPlus = curTargetRow.querySelector("svg.text-brand-orange");
            console.log(mutation);
            console.log(searchPlus);
            changeElementDisplay(curTargetRow, searchPlus === null);
        }
    });
}

function changeElementDisplay(element, displayOrNot) {
    const SHOW = "flex", HIDE = "none";
    element.style.display = displayOrNot ? SHOW : HIDE;
}
