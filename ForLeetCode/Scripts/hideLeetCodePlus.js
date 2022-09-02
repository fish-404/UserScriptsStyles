// ==UserScript==
// @name         hideLeetCodePlus
// @namespace    mailto: fish404hsif@gmail.com
// @version      0.4.0
// @description  Hide Leetcode Plus Problems
// @author       fish-404
// @match        https://leetcode.cn/problemset/*
// @match        https://leetcode.cn/tag/*
// @match        https://leetcode.cn/problem-list/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const url = window.location.href;
    let problemsNode, tagFlag, observer;

    const config = {
        subtree: true
        , childList: true
    };

    if (url.includes("tag")) { // problemsets with tags
        console.log("tag: true");
        const container = document.querySelector("div#lc-content");
        observer = new MutationObserver(()=>{
            let tbody = document.querySelector("tbody.ant-table-tbody");
            if (tbody) {
                const innerObserver = new MutationObserver(hidePlusProblemsWithTag);
                innerObserver.observe(container, config);
            }
        });
        observer.observe(container, config);
    }
    else {
        problemsNode = document.querySelector("div[role='table']");
        observer = new MutationObserver(hidePlusProblemsWithoutTag);
        observer.observe(problemsNode, config);
    }
})();

function hidePlusProblemsWithoutTag(mutationList, observer) {
    let preTargetRow;
    mutationList.forEach((mutation) => {
        let target;
        if (mutation.addedNodes.length > 0) {
            target = mutation.addedNodes[0];
        }
        else {
            target = mutation.target;
        }
        let curTargetRow = target.closest("div[role='row']");
        if (curTargetRow !== null && curTargetRow !== preTargetRow) {
            preTargetRow = curTargetRow;
            let searchPlus = curTargetRow.querySelector("svg.text-brand-orange");
            changeElementDisplay(curTargetRow, searchPlus === null);
        }
    });
}

function hidePlusProblemsWithTag(mutationList) {
    mutationList.forEach((mutation) => {
        console.log(mutation);
        if (mutation.addedNodes.length > 0) {
            let curTargetRow = mutation.addedNodes[0];
            let searchPlus = curTargetRow.querySelector("img[alt='plus']");
            console.log(searchPlus);
            if (searchPlus) {
                curTargetRow.style.display = "none";
            }
        }
    });
}

function changeElementDisplay(element, displayOrNot) {
    const SHOW = "flex", HIDE = "none";
    element.style.display = displayOrNot ? SHOW : HIDE;
}
