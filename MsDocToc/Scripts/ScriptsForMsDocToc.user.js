// ==UserScript==
// @name         ScriptsForMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.4.0
// @description  Sticky Microsoft Documents right sidebar TOC block
// @description:zh 固定微软文档右侧的目录栏
// @author       fish-404
// @updateURL    https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/ScriptsForMsDocToc.meta.js
// @downloadURL  https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/ScriptsForMsDocToc.user.js
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try { 
      document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 3vh");
      document.getElementById("right-rail-in-this-article-list").setAttribute("style", "overflow: auto; max-height: 70vh;");
      document.querySelector("button[data-bi-name='show-more-btn']").click();
    }
    catch {} // not all page has right sidebar TOC block
})();
