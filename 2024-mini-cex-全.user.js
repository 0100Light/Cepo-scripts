// ==UserScript==
// @name        2024 mini-Cex-全
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午1:00:37
// ==/UserScript==


const teacherName = document.querySelector("#formForm > div:nth-child(22) > div > input")

// teacher is VS
const teacherLevelDiv = document.querySelector("#formForm > div:nth-child(23) > div input[type='radio']").checked = true

const teachingLocation = document.querySelector("#formForm > div:nth-child(25) > div").querySelector('input.form-control')
const chartNumberInput = document.querySelector("#formForm > div:nth-child(26) > div").querySelector('input.form-control')


teacherName.value = "葉大全"
teachingLocation.value = "Bedside"
chartNumberInput.value = "3380107"



const problemContent = '<p>情緒焦慮伴隨認知功能減損持續超過一個月<br></p><p>F0390&nbsp;<br>1. Suspect Drug induced Extrapyramidal side effects, suspect culprit drug: brexipriprazole<br>2. Major neurocognitive disorder due to Alzheimer\'s disease with early onset, with behavioral disturbance<br>3. Major depressive disorder DDx: Bipolar spectrum disorder.<br><br></p>'

// active problem
setTimeout(() => {
    const activeProblemIframe = document.querySelector('.cke_wysiwyg_frame.cke_reset')
    if (activeProblemIframe && activeProblemIframe.contentDocument) {

        const editableBody = activeProblemIframe.contentDocument.querySelector('body[contenteditable=true]')
        if (editableBody){
            editableBody.innerHTML = problemContent
        }
    }

}, 1500)


const difficultyRadio = document.querySelector("#formForm > div:nth-child(28) > div span:nth-child(2) > input[type='radio']")
const isNewPatientRadio = document.querySelector("#formForm > div:nth-child(29) > div span:nth-child(2) > input[type='radio']")

// minor scores
for (let i=30; i<37; i++){
    const scoreRadio = document.querySelector("#formForm > div:nth-child(" + i + ") > div span:nth-child(6) > input[type='radio']").checked = true
}

const finalScore = document.querySelector("#formForm > div:nth-child(40) > div span:nth-child(10) > input[type='radio']")


difficultyRadio.checked = true
isNewPatientRadio.checked = true
finalScore.checked = true