// ==UserScript==
// @name        改_三軍總醫院教學門診紀錄
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午1:00:37
// ==/UserScript==



// Set score
const score = 5

// check radios [value=7]
const radioButtons = document.querySelectorAll(`input[type="radio"][data-fillflag="write"][value="${score}"]`);
console.warn(`radio buttons: ${radioButtons.length} found.`)
radioButtons.forEach(radio => {
    radio.checked = true;
});

// add comment
const comment_textarea = document.querySelector('#formForm > div:nth-child(49) > div textarea')
comment_textarea.textContent = '積極關心病人狀況'
