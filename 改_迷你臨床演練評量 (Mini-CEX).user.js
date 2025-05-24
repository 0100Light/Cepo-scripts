// ==UserScript==
// @name        改_迷你臨床演練評量 (Mini-CEX).js
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午1:00:37
// ==/UserScript==


// add comment
setTimeout(() => {
    const activeProblemIframe = document.querySelector('.cke_wysiwyg_frame.cke_reset')
    if (activeProblemIframe && activeProblemIframe.contentDocument) {

        const editableBody = activeProblemIframe.contentDocument.querySelector('body[contenteditable=true]')
        if (editableBody){
            editableBody.innerHTML = '<p>專注且積極參與，經常提出問題並參與討論，顯示出對學習內容的深入思考和理解能力。<br><br></p>'
        }
    }

}, 1500)

// check radios [value=7]
const radioButtons = document.querySelectorAll('input[type="radio"][data-fillflag="write"][value="6"]');
console.warn(`radio buttons: ${radioButtons.length} found.`)
radioButtons.forEach(radio => {
    radio.checked = true;
});


// satisfaction
const satisfactionDiv = document.querySelector("#formForm > div:nth-child(39) > div > span:nth-child(10) input[type='radio']")
satisfactionDiv.checked = true
