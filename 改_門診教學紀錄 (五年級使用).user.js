// ==UserScript==
// @name        改_門診教學紀錄 (五年級使用)
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午11:10:01
// ==/UserScript==


const comment = '學習動機佳，於課餘時間查找相關知識，並於教學活動中有系統地回答'

/* === */

const commentInput = document.querySelector('textarea.form-control')
commentInput.textContent = comment

// scores
for (let i=0; i<3; i++){
    const radio = document.querySelector("#formForm > div:nth-child(" + (28+i) + ") > div span:nth-child(1) input")
    radio.checked = true
}
