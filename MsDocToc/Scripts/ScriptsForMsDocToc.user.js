// ==UserScript==
// @name         ScriptsForMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.5.0
// @description  Sticky Microsoft Documents right sidebar TOC block and show more default
// @description:zh 固定微软文档右侧的目录栏并默认展开
// @author       fish-404
// @updateURL    https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.meta.js
// @downloadURL  https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.user.js
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try { 
        document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 3vh");
        document.getElementById("right-rail-in-this-article-list").setAttribute("style", "overflow: auto; max-height: 70vh;");
        document.querySelector("button[data-bi-name='show-more-btn']").click();
        document.querySelector('#right-rail-in-this-article-list .is-expanded a').setAttribute("style", "outline: 0"); // remove dash border
    }
    catch {} // not all page has right sidebar TOC block
})();
