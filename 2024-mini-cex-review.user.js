// ==UserScript==
// @name        2024-mini-cex-review
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午1:00:37
// ==/UserScript==


// active problem
setTimeout(() => {
    const activeProblemIframe = document.querySelector('.cke_wysiwyg_frame.cke_reset')
    if (activeProblemIframe && activeProblemIframe.contentDocument) {

        const editableBody = activeProblemIframe.contentDocument.querySelector('body[contenteditable=true]')
        if (editableBody){
            editableBody.innerHTML = '<p>專注且積極參與，經常提出問題並參與討論，顯示出對學習內容的深入思考和理解能力。<br><br></p>'
        }
    }

}, 1500)
const diffcultyRadio = document.querySelector("#formForm > div:nth-child(25) > div span:nth-child(2) > input[type='radio']").checked = true

const isNewPatientRadio = document.querySelector("#formForm > div:nth-child(26) > div span:nth-child(2) > input[type='radio']").checked = true

// scores
document.querySelector("#formForm > div:nth-child(27) > div")
for (let i=27; i<34; i++){
    const scoreRadio = document.querySelector("#formForm > div:nth-child(" + i + ") > div span:nth-child(6) > input[type='radio']").checked = true
}

const finalScore = document.querySelector("#formForm > div:nth-child(35) > div span:nth-child(10) > input[type='radio']").checked = true