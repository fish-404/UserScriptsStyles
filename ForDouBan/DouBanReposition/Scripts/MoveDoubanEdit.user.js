// ==UserScript==
// @name         MoveDoubanEdit
// @namespace    mailto:fish404hsif@gmail.com
// @version      0.1.0
// @license      MIT
// @description  move and edit button to the top and sticky
// @description:zh 编辑按钮置于顶部且滚动时固定
// @author       Fish__404
// @match        https://book.douban.com/review/*
// @match        https://movie.douban.com/review/*
// @match        https://music.douban.com/review/*
// @match        https://www.douban.com/review/*
// @match        https://www.douban.com/note/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=douban.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let url = window.location.href;
    let attributes = "position: sticky; top: 0; background: white;"
    if (url.includes("note")) { // 日记
        document.getElementsByClassName("note")[0]
            .insertAdjacentElement(
                'beforebegin'
                , document.getElementsByClassName("note-footer-stat")[0]
            );
        document.getElementsByClassName("note-footer-stat")[0].setAttribute("style", attributes);
    }
    else {
        document.getElementsByClassName("main-bd")[0]
            .insertAdjacentElement(
                'beforebegin'
                , document.getElementsByClassName("main-author")[0]
            );
        document.getElementsByClassName("main-author")[0].setAttribute("style", attributes);
    }
})();
