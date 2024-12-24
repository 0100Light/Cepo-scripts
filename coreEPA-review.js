// ==UserScript==
// @name        Core EPA Review
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/12/24 下午7:58:11
// ==/UserScript==

console.warn('Core EPA Review loaded')

const option = 3

for (let i = 0; i < 13; i++) {

    const radio = document.querySelector("#formForm > div:nth-child(" + (28+i*2) + ") > div div:nth-child(" + option + ") input")
    radio.checked = true
}
// document.querySelector("#formForm > div:nth-child(30) > div")

setTimeout(() => {
    const comment_iframe = document.querySelector("iframe.cke_wysiwyg_frame.cke_reset")
    if (comment_iframe) {
        const editableBody = comment_iframe.contentDocument.querySelector("body[contenteditable=true]")
        editableBody.innerHTML = "專注且積極參與，經常提出問題並參與討論，顯示出對學習內容的深入思考和理解能力。"
    }

}, 1500)

