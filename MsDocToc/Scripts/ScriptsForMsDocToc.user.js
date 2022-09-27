// ==UserScript==
// @name         ScriptsForMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.7.0
// @license      MIT
// @description  MSDN TOC Enhance
// @description:zh 微软文档目录功能新增
// @author       fish-404
// @updateURL    https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.meta.js
// @downloadURL  https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.user.js
// @match        *://docs.microsoft.com/*
// @match        *://learn.microsoft.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTocContainerSticky();
    clickShowMoreBtn();
    mvSave2CollectionBtn();
})();

function logError(exception, customMsg) {
    console.error(customMsg);
    console.error(exception.name);
    console.error(exception.message);
}

function setTocContainerSticky() {
    try {
        document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 3vh");
    }
    catch (e) {
        logError(e, "Error: set to ccontainer sticky failed!");
    }
}

function clickShowMoreBtn() {
    try {
        document.querySelector("button[data-bi-name='show-more-btn']").click();
    }
    catch (e) {
        logError(e, "Error: click show more button failed!");
    }

    try {
        document.querySelector('#right-rail-in-this-article-list .is-expanded a').setAttribute("style", "outline: 0");
    }
    catch (e) {
        logError(e, "Error: hide dash outline failed!");
    }
}

function mvSave2CollectionBtn() {
    try {
        document.querySelector('div[data-bi-name="right-column"] article div').insertAdjacentElement('beforeend', document.querySelector('button[data-bi-name="collection"]'));
    }
    catch (e) {
        logError(e, "Error: move save to collection button failed!");
    }
}
