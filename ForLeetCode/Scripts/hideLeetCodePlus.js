// ==UserScript==
// @name         hideLeetCodePlus
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.1
// @description  Hide Leetcode Plus Problems
// @author       fish-404
// @match        https://leetcode.cn/problemset/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hidePlusProblems() {
        let plusProblems = document.querySelectorAll("div[role='rowgroup'] .text-brand-orange");
        for (let i = 0; i < plusProblems.length; i++) {
            plusProblems[i].parentElement.parentElement.style.display = "none";
        }
        console.log(`Hide ${plusProblems.length} problems`);
    }

    const problemsNode = document.querySelector("div[role='table']");

    const config = {
        subtree: true
        , childList: true
    };

    const observer = new MutationObserver(hidePlusProblems);
    observer.observe(problemsNode, config);
})();
