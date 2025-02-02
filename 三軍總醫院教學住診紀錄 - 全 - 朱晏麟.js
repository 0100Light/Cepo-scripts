// ==UserScript==
// @name        三軍總醫院教學住診紀錄 - 全 - 朱晏麟
// @namespace   Violentmonkey Scripts
// @match       *://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 上午8:28:36
// @require  https://raw.githubusercontent.com/CoeJoder/waitForKeyElements.js/refs/heads/master/waitForKeyElements.js
// ==/UserScript==

(function () {
    'use strict';

    const title = document.querySelector("h3:nth-child(1)")
    if (title) {
        const newElem = document.createElement('h3')
        newElem.style.color = "red"
        newElem.textContent = "(Script activated)"
        title.appendChild(newElem)
    }


    const allInputs = document.querySelectorAll("div.col-sm-6.form-inline input.form-control")

    for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = i
    }

    const patientName = allInputs[0]
    const ward = allInputs[1]
    const chartNumber = allInputs[2]
    const department = allInputs[3]
    const teacher = allInputs[4]
    const studentName = allInputs[5]
    const teachingSite = allInputs[6]

    patientName.value = '朱o麟'
    ward.value = '20-102'
    chartNumber.value = '7035430'
    department.value = 'PSY'
    teacher.value = '葉大全'
    studentName.value = '王翊光'
    teachingSite.value = 'Bedside'

    // Level is resident
    const residentRadio = document.querySelector('#formForm > div:nth-child(29) span:nth-child(4) input[type="radio"]')
    residentRadio.checked = true


    // Sex and age

    // male div

    const maleRadio = document.querySelector('.col-sm-10 .form-inline input[type="radio"]')
    if (maleRadio) {
        maleRadio.checked = true
    }
    const maleAge = document.querySelector('.col-sm-10 .form-inline input[type="text"]')
    if (maleAge) {
        maleAge.value = '47'
    }

    // female div

    // const femaleDiv = document.querySelector('#formForm > div:nth-child(22) > div > div:nth-child(2)')
    // const femaleRadio = femaleDiv.querySelector('input[type="radio"]')
    // const femaleAge = femaleDiv.querySelector('input[type="text"]')
    //
    // femaleRadio.checked = true
    // femaleAge.value = '56'

    // Large text field

    const patientSummary = '<p>個案自小個性外向，交友狀況正常，小學成績很差，最高學歷為國中，自述高中至舞廳時曾用過K+MDMA，否認持續使用。<br>2018/8/1本院初診:個案表示大約四、五年前因為哥哥被槍殺去世後，以及家裡經濟重擔落在身上，加上兒子自國中一年級開始，應該有人拿k他命給他吃，之後就變得怪怪的，時常鬧事，有一些法律糾紛；兒子的脾氣也不好，只要多罵幾句，就會跑去撞牆或消失，開始出現心情煩躁、易怒、情緒起伏不定、入睡困難、疲憊等情形，直至最近四、五個月才至維德醫院就診，診斷為憂鬱、焦慮症，而從此開始自我封閉，用藥:escitalopram 10mg and dalmadrom 30mg, 於維德醫院住院40天，2018-07-23出院。否認過去有持續情緒高昂開闊等症狀、否認有物質濫用及行為問題。<br>2018/09/21-2018/10/31住院:此次因服藥後症狀仍未改善、煩躁感加重、多夢，感到困擾，故於門診診視後收入院治療。<br>2022/4/30-2022/05/16住院:個案與父母及兒子(21歲)同住，自述上一份工作為4.5年前販售包子，目前主要經濟來源為存款。自述近2.3年多在松山總醫院就診，服藥後症狀時好時壞，煩躁感加重、失眠(11點入睡，維持2-3小時)、易怒(會與家人爭吵、摔東西、否認自傷傷人行為)、社交退縮(多與妹妹聯絡)。另自述近期記憶力變差(買東西後會反覆確認錢包餘額和卡片)。平時常待在家中，會看電視轉移注意力。自述有時會聽見有人開門的聲音，但門緊閉也沒有人走進來。經門診醫師評估後，於入院治療。<br>2022/6/10住院:個案目前無業，自述入睡困難兩週，白天易焦慮，整天待在家中，經門診評估後入院治療。<br>2022/8/12住院:個案目前無業(上份工作是賣包子)，經濟來源來自存款，自述近兩周入睡困難、易感焦慮、社交退縮，否認物質使用，經門診評估後入院治療。<br>2022/11/18住院:個案目前無業，自述近兩個月失眠症狀持續(夜眠中斷，幾乎每一天，0100-1200)，有時睡得更差時剛起床會較焦慮，否認持續焦慮、憂鬱等情況，否認自殺意念，大部分待在家中看電視、可維持運動嗜好、偶爾可以到哥哥的包子店裡面幫忙，否認暴力行為，經門診評估後入院治療。<br>2023/2/28住院:個案目前無業，偶爾至舅舅的包子店幫忙賺零工，自述近一個多月入睡困難(至少2小時)、睡眠易中斷。否認有情緒低落、焦慮、物質使用、妄想幻覺、自傷傷人等。本次經門診評估後入院接受rTMS治療至2023/4/20出院。<br>上次住院為0627-0803，出院後可規則返診及服藥，期間多在家休養，白天多至舅舅的饅頭店幫忙(6-12am)，下午去爬山，但上次出院後持續睡眠差(斷斷續續、難入睡、頻做惡夢)，間歇性有憂鬱情緒，門診調藥後僅部份改善，於門診評估後，收住院治療。<br>2025-01-14 近數月，與家人爭吵多，家人車禍壓力大，出現間歇性情緒低落、持續睡眠差(斷斷續續、難入睡、頻做惡夢)，門診調藥後僅部份改善，於門診評估後，收住院治療。<br></p>'

    const patientAnalysis = '<p>Physical Examination:<br>General appearance: moderately developed and nourished without cardiopulmonary embarrassment<br>Head: no traumatic wound<br>Eyes: no ictera sclera, no anemic or congested conjunctiva<br>Ears: no discharge, no external anomaly<br>Nose: no discharge, no congestion<br>Mouth: no ulceration of gingiva or oral mucosa, no bleeding spot<br>Throat: no congestion, no enlargement of tonsils<br>Neck: soft and supple, no enlargement of thyroid or lymph nodes, no JVE<br>Heart: regular heart beats with normal heart sounds, no murmur or thrills<br>Chest and lungs: full and symmetrical expansion, clear breathing sounds, no rales or rhonchi<br>Abdomen: soft and flat, no local tenderness, no rebounding pain, no palpable mass, no superficial vein enlargement<br>Back and spine: no knocking pain over cost-vertebral angle, no deformity<br>Extremities: no limitation of movement</p><p>Neurological examination:<br>Consciousness: alert<br>Pupils: isocoric with normal light reflex, ou<br>Cranial nerves: intact<br>Sensory function: intact<br>Motor function: intact<br>Deep tendon reflexes: intact<br>Coordination: intact<br>Meningeal signs: negative<br>Babinski’s sign: negative, bil<br>Hoffman sign: negative, bil</p><p>Mental status examination:<br>General appearance: well dressed, clear<br>Consciousness: alert<br>Attention: attentive, could maintain and shift<br>Attitude: cooperative<br>Affect: depressed mood, crying<br>Speech: fluent, coherent, relevant<br>Thought: negative thought, worthless, excessive guilty feeling, denied delusion.<br>Perception: denied hallucination or illusion<br>Behavior: social withdrawal<br>JOMAC: grossly intact<br>Insight: partial<br>Somatic complaint: insomnia, low back pain, 走路不穩<br><br></p>'


    const teachingDemo = '<p>住院醫師王翊光:個案診斷為重鬱症,多次鬱症發作合併自殺意念,至急診要求入院,這樣的個案應該要如何開啟會談呢?<br>主治醫師葉大全:鬱症的個案,要開啟會談,要先能夠理解鬱症個案對憂鬱症狀的體驗,你說說看鬱症的個案會有甚麼典型的主觀感覺?<br>住院醫師王翊光:鬱症的個案會在生理、心理、人際、團體,以及意義等五個層面上有主觀感覺。生理系統上會有失眠,動作緩慢,沉重感受等等表現,並且會有動力(如食欲性慾)減低的狀況;同時也會有憂鬱感受的外歸因,因而感到身體與情感失去控制(ossification)。<br>主治醫師葉大全:對的,而在心理系統,個案對於時間和空間的改變會變得遲鈍麻木,因而有"blocking of the future"或行為孤立的表現;同時也會有意念的侷限化,而反覆詢問同樣問題;過度著重在負面現象,並且誇大著重;有時候也會出現「負向觀點=&gt;負面自我觀感=&gt;未來悲觀」的負向循環,讓鬱症症狀愈滾愈大;而邏輯豁免的狀況則是會讓上述的症狀都陷入泥淖,無法自拔.</p><p>住院醫師王翊光:書上也有提到認知內容常常會有四個主題,分別是孤獨感,自我貶抑,無助感,無望感;這些認知內容是不是也跟自殺意念有相關呢?<br>主治醫師葉大全:你說得沒錯,憂鬱個案會過度著重在孤獨,而甚至疏遠自己進而發展出自我貶抑,也無法相信自己可能得到幫助,最後否定所有可能;這些狀況就會以自殺意念或者自殺嘗試做為表現被觀察到.所以第一次會談時,適度的去詢問這些感受,並且利用參考的門徑,來詢問個案關於自殺的想法,其實不失為一個好的方法.<br>住院醫師王翊光:謝謝老師,另外我注意到DSM-5裡面特別註記中,「具有焦慮特質」這樣的註記底下,有提到自殺風險較高這件事,我想問這是不是一個獨立的自殺風險因子呢?或者伴隨憂鬱造成的無助無望感才是?<br>主治醫師葉大全:焦慮本身就是一個自殺風險因子,回顧強迫症個案,其自殺率,就算在無共病情緒疾患的狀況下,也較一般人為高; 所以在會談開啟時,嘗試接觸個案的焦慮也是很好的嘗試,常常可以發現個案的核心痛苦,壓力源,或者相關症狀.</p><p>主治醫師葉大全：你說說看一般治療憂鬱症下，有什麼樣的原則呢？<br>住院醫師王翊光：如果依照NICE guideline主要有下列幾點：<br>1.&nbsp;&nbsp; &nbsp;若憂鬱症狀輕微，抗憂鬱劑不應該做為第一線的治療，而是以一些心理衛教，自助技巧，CBT，運動等作為建議和治療。而中等至嚴重程度的憂鬱症狀，才考慮使用藥物。<br>2.&nbsp;&nbsp; &nbsp;SSRI被建議使用，而且病人都要被衛教自行停藥的話，可能會有戒除的症狀會發生。<br>3.&nbsp;&nbsp; &nbsp;對於治療反應不好的病人，可以考慮augmentation，可以使用lithium, antipsychotic,或第二種antidepressant<br>4.&nbsp;&nbsp; &nbsp;若先前有兩次episode合併功能減退，應該至少治療超過兩年。<br>5.&nbsp;&nbsp; &nbsp;對於嚴重和治療反應不好的憂鬱症，可考慮使用ECT。</p><p>主治醫師葉大全:我們應該要怎麼選擇抗憂鬱藥物呢?<br>住院醫師王翊光: SSRI比較建議作為第一線的使用藥物，主要是來自一篇network metaanalysis報告說雖然有一些藥物整體治療上療效比較好，但是在head-to-head的比較上卻沒有呈現一致的結果。而且不同藥物的副作用會不太一樣。通常SSRI會有頭痛，GI upset的副作用。以及性功能障礙，低血鈉，甚至 GI bleeding的可能性。至於治療的長度，如果只有single episode一般來說建議復原後至少再治療6~9個月。如果超過一次episode，則必須治療超過兩年。<br><br></p>'

    const fiveAll = '<p>在診療過程中，實踐全人照護需要從多層次、多面向的角度出發，結合知識、態度與技能，以實現「五全」與「四面向」的綜合照護目標。首先，在生理層面，醫療人員需掌握專業知識，針對患者的病情提供精準的診斷與治療，同時關注心理層面的需求，透過同理心與尊重態度，減輕患者的焦慮與壓力。此外，靈性關懷應融入診療過程中，支持患者面對生命的挑戰，激發其內在力量。社會層面則強調醫療團隊與患者家庭、社區的合作，運用有效的溝通技巧與協作能力，促進患者的全面康復。在此基礎上，透過全程的連續性照護、全隊的多專業協作，並將患者與其家庭及社區資源整合，才能真正實現全人、全家、全程、全隊與全社區的綜合性照護。</p>'


    // Wait for the page to load completely
    window.addEventListener('load', () => {
        // Use a timeout to ensure CKEditor is fully initialized
        setTimeout(() => {
            // Select the CKEditor iframe
            const allFrames = document.querySelectorAll('.cke_wysiwyg_frame');

            allFrames.forEach((editorIframe, index) => {
                // Check if the iframe is available
                if (editorIframe && editorIframe.contentDocument) {
                    const editorDocument = editorIframe.contentDocument;

                    // Select the body element with contenteditable="true"
                    const editableBody = editorDocument.querySelector('body[contenteditable="true"]');

                    // Update the innerHTML
                    if (editableBody) {
                        editableBody.innerHTML = '<p>This is the new content set by Violentmonkey!</p>' + index;
                        console.log('Content updated successfully!');
                    } else {
                        console.error('Editable body not found.');
                    }
                } else {
                    console.error('CKEditor iframe not found.');
                }

            })

            allFrames[0].contentDocument.querySelector('body[contenteditable="true"]').innerHTML = patientSummary
            allFrames[1].contentDocument.querySelector('body[contenteditable="true"]').innerHTML = patientAnalysis
            allFrames[2].contentDocument.querySelector('body[contenteditable="true"]').innerHTML = teachingDemo
            allFrames[3].contentDocument.querySelector('body[contenteditable="true"]').innerHTML = fiveAll
            allFrames[4].contentDocument.querySelector('body[contenteditable="true"]').innerHTML = '謝謝老師的指導'

        }, 1500); // Adjust timeout as needed
    });



    // feed back scores

    for (let i=51; i<54; i++){

        const feedBackDiv = document.querySelector("#formForm > div:nth-child(" + i + ")")
        if (feedBackDiv){
            const radios = feedBackDiv.querySelectorAll('input[type="radio"][value="5"]')
            radios.forEach((radio) => {
                radio.checked = true
                console.log('checked')
            })
        }
    }


    // consent

    const consentDiv = document.querySelector("#formForm > div:nth-child(32) > div")
    const consentRadio = consentDiv.querySelector('input[type="radio"]')
    if (consentRadio) {
        consentRadio.checked = true;
        console.log('checked')
    }

    // checkboxes

    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true
        console.log('checked')
    })



})();