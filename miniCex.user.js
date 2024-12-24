// ==UserScript==
// @name        mini-Cex-葉大全
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

    patientName.value = '盧o芳'
    ward.value = '20-112'
    chartNumber.value = '3380428'
    department.value = 'PSY'
    teacher.value = '葉大全'
    studentName.value = '王翊光'
    teachingSite.value = 'Bedside'


    // Sex and age

    const maleRadio = document.querySelector('.col-sm-10 .form-inline input[type="radio"]')
    if (maleRadio) {
        maleRadio.checked = true
    }
    const maleAge = document.querySelector('.col-sm-10 .form-inline input[type="text"]')
    if (maleAge) {
        maleAge.value = '54'
    }

    // Large text field

    const patientSummary = '<p>個案為52歲男性，過去自述個性外向，最高學歷為宜東工專企修科畢業，畢業後服完兵役後及從事紡織業，於工作其間因與友人結識後也兼作紡織買賣業務，後於近二十年改作保險業務，自述工作能力良好。個案與前妻育有一女(目前大二)，於2021/12離婚，自述因生育觀念與岳母家不合，使用無法達成共識，個案想多生但岳母說只能生一個。離婚後財產協議需把原本住的房子賣掉換現金對分，但因不熟過程，勿簽專任委託約卻讓其他家賣掉，被原房仲罰了快50萬。個案以前喜歡打高爾夫，但經濟較為困難之後就鮮少參與。<br>個案於離婚後近一年(2022)情緒低落、憂鬱、失去興趣喜樂、社交退縮(拒絕朋友同事邀約)、低動力(整天只想躺床)、失眠、記憶力減退、手抖、食慾差，目前獨居於三重(以前作保險認識的朋友知道他狀況就租給他)，近期無法維持工作，以老本(賣掉房子的錢)過生活，日常自理能力還行。個案自述偶有被監視的感覺，只覺得怪怪的他也不曉得怎麼會這樣，另外有時心情很差一個人的時候會聽到有兩三個人在批評他：「怎麼這麼笨?為什麼都要聽別人的沒有自己想法？」但之後能自行緩解。個案先至神經科求助，曾住院一次接受治療，診斷為憂鬱症，開立WELLBUTRIN，並曾接受rTMS治療但症狀未明顯改善。而後轉診至精神科門診評估後接受治療，做Cerebral perfusion scan SPECT發現cerebral hypoperfusion over the bilateral parietal, occipital, temporal lobes, precuneus, and posterior cingulate cortex，而做Cogmate exmaination評估腦齡已66歲，並給予WITGEN及第二個療程的RTMS治療，但病人淡漠無情感、社交退縮、低動力、失眠、記憶力減退及適應力低下的情形持續，因此安排入院做第三個療程的RTMS，而目前用藥為BRINTELLIX, SYNTAM, WITGEN，故於112/3/8-112/4/15住院治療。<br>2023/10/27 -2023/12/02<br>出院後可規則返診，經濟來源為過去積蓄，獨居於三重未就業，也未去會所，表示自己完全不知道這件事情(上次住院有跟個案說)，日常生活功能可以自理，可以自己外出買三餐，偶爾會被動赴約和上次住院認識的病友唱歌、吃飯，哥哥每周一次會去拜訪個案，表示近一個月發現個案偶爾會忘記吃藥，會重複問話、無法正常寫字、短期記憶力下降；穿衣、穿鞋能力下降，要花很多時間。個案自述獨自在家時會感到情緒低落，低動力、恐慌、社交退縮、精神動作遲緩，有被害感，出門會身體緊繃，東張西望，覺得有人可能會對自己不利，除非必要否則會減少出門，個案多歸咎於賣房時爭議事件。10/27經主治葉大全醫師評估後收入院治療，預計安排rtms*10。<br>2024/02/17<br>據個案所述，自上次出院後，個案開始至三重康復之家居住，自述情緒淡漠伴隨無助無望無價值感(有時候覺得人生這樣活著沒什麼希望，最近這幾個月才會，之前都不會)，精神動力遲緩、社交退縮(完全不會想出門，大部分時間都待在康家無所事事，沒有比較有興趣的活動)，且個案及案兄均表示個案記憶力下降明顯(剛講完話也能馬上忘記)。另個案表示雙手於過去幾個月開始出現手抖(有力氣，但字寫很醜一直抖)。然個案否認有幻聽、妄想、情緒高昂開闊激躁易怒等症狀，亦否認有物質或酒精使用等情形，因前述症狀，經葉大全醫師門診評估後收入院治療。<br>2024/05/14<br>個案出院後轉至重光康復之家全天居住，根據康家紀錄，個案近日出現情緒起伏，與康家人員及其他病友常起口角，半夜只睡(0200-0500)疑似睡眠需求減少，詢問原因時會口氣差，經門診評估入院治療。<br>2024/06/23 ER:<br>據個案二嫂所述，個案自上次出院(2024/06/08)後，過去兩周於康家混亂行為逐漸加劇(會在廁所兩個小時，衣服穿成褲子，同時穿兩件內褲/會半夜脫光到康家櫃台，說不出原因/用飲水機洗手、洗碗筷，被制止會一直說沒關係)、伴隨記憶力減退(會覺得自己沒吃到早餐而兇康家工作人員)，因前述症狀，個案與康家工作人員關係緊張，並表示想離開康家，甚至因此以頭撞牆。<br>因前述混亂行為與症狀，個案曾於2024/06/22回診精神科門診調整藥物。然個案及案前妻表示個案於06/22晚間服用藥物後，於06/23凌晨約一時許，起床時頭暈站不穩，走路會偏，因此跌倒撞到頭，並於06/23早上剛起床(約五六點，不確定確切時間)，個案再度跌倒，前額有表淺撕裂傷，因此經康家送醫至三重聯醫縫合。<br>於急診會談時，個案情緒淡漠，然人事時地物均清楚(知道現在是下午，陪病是嫂嫂及前妻，在三總，因為調藥後頭暈才來)。<br>2024/08/07據個案自述此次是因為手握筆無法寫字，嚴重影響其日常生活以及工作才入院，否認有關於認知功能或其他身體部位症狀，但知道自己有做過rTMS及電療，會談時態度配合，心情穩定，知道自己位在三總，但傍晚前往施測MMSE時回答自己位在康復之家，評估個案INSIGHT LEVEL約2-3，由於離婚個案支持度應該不高，MMSE施測結果為9分。<br>2024/09/22 病人家屬(二嫂)接收到康家的報告說病患自從9/7(回診調藥後)會有肌肉緊繃(雙手抖，變得無法自己吃飯、無法配合洗澡、幫忙穿衣服要1小時、無法好好坐輪椅。會自行緩解。)的這種情況發生，因這2-3天情況加劇送來急診。急診抽血ck:6054，其他抽血無明顯異常無感染跡象。病人因焦慮打完ANXICAM 1 amp較為嗜睡，四肢移動在彎曲時較為緊繃，因9/7更換藥物abilify 5mg HS成rexulti 2mg BID懷疑drug induced eps，施打vena 1AMP IVA。<br>據個案所述，於急診時症狀逐漸緩解，意識清楚，問及個案表示無特別不舒服，但觀察個案雙手還是會不斷抖動、四肢較僵硬，因前述症狀2024/09/23收入院治療。<br>2024/10/26 個案因健保住院期限屆滿，但個案家屬仍需要時間尋找照護機構及動向，因此轉成自費身分住院。<br>2024/11/09 個案自費住院期滿，然認知功能退化仍持續，因前述症狀繼續轉健保身分繼續住院治療。<br>2024-12-15 個案住院期滿，因前述症狀持續，藥物副作用嚴重，步態不穩，未達康家可入住之標準，轉自費身份，繼續住院。</p>'

    const patientAnalysis = '<p>O：&nbsp;&nbsp; &nbsp;<br>精神狀態檢查:(MSE):<br>外觀（Appearance）：整齊 清潔&nbsp;<br>意識（Consciousness）：清楚<br>態度（Attitude）被動配合<br>注意力（Attention）：可集中 可維持 可轉移<br>情感( Affect)：來診時淡漠<br>語言（Speech）：切題連貫 清晰 音量略小，語速略慢<br>行為（Behaviors）：持續手抖、四肢僵硬無法動彈<br>思想（Thoughts）：思考遲緩 否認被害或被控制妄想 否認關係妄想、否認嫉妒妄想<br>知覺（Perception）：否認視聽幻覺<br>病識感（Insight）：3-4<br>身體主訴（Somatic complaint）：持續手抖、四肢僵硬無法動彈、眼皮不斷眨動<br>JOMAC: poor recent memory and calculation function<br></p><p>A：&nbsp;&nbsp; &nbsp;<br>F0390 $1. Suspect Drug induced Extrapyramidal side effects, suspect culprit drug: brexipriprazole<br>2. Major neurocognitive disorder due to Alzheimer\'s disease with early onset, with behavioral disturbance<br>3. Major depressive disorder DDx: Bipolar spectrum disorder.<br></p><p>P：&nbsp;&nbsp; &nbsp;<br>[有效藥囑]</p><p>處 &nbsp; &nbsp; 方 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 劑量 &nbsp;頻率 &nbsp; &nbsp;用法 &nbsp;開始時間 &nbsp; &nbsp; 結束時間 &nbsp; &nbsp;&nbsp;<br>FOLIC ACID TAB 5 MG (人人) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 &nbsp; &nbsp; QD &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>EXMEM FC TAB 10 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 &nbsp; &nbsp; BID &nbsp; &nbsp; PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>SYNTAM GR FOR ORAL SOLN 1200 MG (*) &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; QD &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>LENDORMIN TAB 0.25 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; HSPRN &nbsp; PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>VALDOXAN FC TAB 25 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; HS &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>KENTAMIN CAP &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 &nbsp; &nbsp; QD &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>DAYVIGO TAB 5 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 &nbsp; &nbsp; HS &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>GLYCOPYRODYN TAB 1 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; BID &nbsp; &nbsp; PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>MAGNESIUM OXIDE TAB 250 MG (榮民) &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; QD &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>ULSTOP FC TAB 20 MG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; QD &nbsp; &nbsp; &nbsp;PO &nbsp; &nbsp;12/15 10:30</p>'


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