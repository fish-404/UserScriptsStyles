// ==UserScript==
// @name         ScriptsForMsDocToc
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.3
// @description  Sticky Microsoft Documents right sidebar TOC block
// @description:zh 固定微软文档右侧的目录栏
// @author       Fish__404
// @updateURL    https://raw.githubusercontent.com/fish-404/UserScripts/main/ScriptsForMsDocToc/ScriptsForMsDocToc.meta.js
// @downloadURL  https://raw.githubusercontent.com/fish-404/UserScripts/main/ScriptsForMsDocToc/ScriptsForMsDocToc.user.js
// @match        *://docs.microsoft.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    try {
      document.getElementById("affixed-right-container").setAttribute("style", "position: sticky; top: 0");
      document.getElementById("right-rail-in-this-article-list").setAttribute("style", "overflow: auto; max-height: 80vh;");
    }
    catch {} // not all page has right sidebar TOC block
})();
