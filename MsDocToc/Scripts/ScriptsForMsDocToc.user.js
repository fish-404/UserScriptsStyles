// ==UserScript==
// @name         ScriptsForMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.6.0
// @license      MIT
// @description  MSDN TOC Enhance
// @description:zh 微软文档目录功能新增
// @author       fish-404
// @updateURL    https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.meta.js
// @downloadURL  https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.user.js
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try { 
        // Sticky TOC 
        document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 3vh");
        document.getElementById("right-rail-in-this-article-list").setAttribute("style", "overflow: auto; max-height: 70vh;");

        // Click Show More Button Default
        document.querySelector("button[data-bi-name='show-more-btn']").click();
        document.querySelector('#right-rail-in-this-article-list .is-expanded a').setAttribute("style", "outline: 0"); // remove dash border

        // Move Add Collection Button to TOC
        document.querySelector('div[data-bi-name="right-column"] article div')
            .insertAdjacentElement('beforeend', document.querySelector('button[data-bi-name="collection"]'));
    }
    catch {} // not all page has right sidebar TOC block
})();
