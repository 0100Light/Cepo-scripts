// ==UserScript==
// @name         改_1-6-意識狀態的評估
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Select the first span and radio input in specific divs
// @author       Light
// @match        *://cts.tsgh.ndmctsgh.edu.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('loaded from local')

    // Select all divs with the specified class
    const divs = document.querySelectorAll('div.p-w-md.form-inline');

    divs.forEach(div => {
        // Select the first <span> in the div
        const firstSpan = div.querySelector('span');
        if (firstSpan) {
            console.log('First <span>: ', firstSpan);
            // Perform any operation you want on the <span>
            const firstRadio = div.querySelector('input[type="radio"]');
            if (firstRadio) {
                console.log('First <input type="radio">: ', firstRadio);
                firstRadio.checked = true;
            }
        }
    });


    // select level
    const levelDiv = document.querySelector('.col-sm-10.form-inline')
    if (levelDiv) {
        console.log('level span caught')
        const levelSpan = levelDiv.querySelector('span:nth-child(5) input[type="radio"]')
        if (levelSpan) {
            levelSpan.checked = true;
        }
    }

    // add comment
    setTimeout(() => {
        const comment_iframe = document.querySelector("iframe.cke_wysiwyg_frame.cke_reset")
        if (comment_iframe) {
            const editableBody = comment_iframe.contentDocument.querySelector("body[contenteditable=true]")
            editableBody.innerHTML = "專注且積極參與，經常提出問題並參與討論，顯示出對學習內容的深入思考和理解能力。"
        }

    }, 1500)

})();
