// ==UserScript==
// @name        三軍總醫院教學住診紀錄 - 曾 - 洪o麗.js
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

    patientName.value = '洪台麗'
    ward.value = '20-112'
    chartNumber.value = '1780595'
    department.value = 'PSY'
    teacher.value = '曾念生'
    studentName.value = '王翊光'
    teachingSite.value = 'Bedside'

    // Level is resident
    const residentRadio = document.querySelector('#formForm > div:nth-child(29) span:nth-child(4) input[type="radio"]')
    residentRadio.checked = true


    // Sex and age

    // const maleRadio = document.querySelector('.col-sm-10 .form-inline input[type="radio"]')
    // if (maleRadio) {
    //     maleRadio.checked = true
    // }
    // const maleAge = document.querySelector('.col-sm-10 .form-inline input[type="text"]')
    // if (maleAge) {
    //     maleAge.value = '64'
    // }

    // female div
    const femaleDiv = document.querySelector('#formForm > div:nth-child(22) > div > div:nth-child(2)')
    const femaleRadio = femaleDiv.querySelector('input[type="radio"]')
    const femaleAge = femaleDiv.querySelector('input[type="text"]')

    femaleRadio.checked = true
    femaleAge.value = '64'

    // Large text field

    const patientSummary = '<p>病人為63歲女性，從小個性外向，朋友多，姊姊表示病人是學校中的風雲人物，民國85年與其丈夫生了一個女兒，病人當時與其丈夫從事砂石事業，民國85年的時候景氣不好先生放棄砂石事業，靠投資運輸業維持家中經濟，生活還可以維持。民國93年其丈夫因心肌梗塞過世、94年岳母過世、95年父親過世，連續三年的親人辭世讓病人大受打擊，情緒持緒低落，失眠，無法工作，民國93年3月及94年2月皆有因為自殺行為而被送至急診。民國95年曾於自家從三樓樓梯摔下到二樓，當時被送至和平醫院，診斷為腦出血並接受手術，術後狀況尚可，無任何併發症。民國96年因情緒持續低落及失眠問題入住松德院治療（詳細住院原因病人無法自述，家人也不知情），但一週後病人覺得藥物無法改善病況後出院，未能規則門診追蹤及服藥，當時病人認為松德出院後自己必須要照顧女兒而開始振作，並找工作維持經濟。但因為工作緣故長期自己獨居在外，女兒交由妹妹照顧。自民國102年8月開始至深坑一簡餐店工作(服務員)，工作及生活機能不錯。至民國102年11月，病人不滿老闆娘顧用一不理解店內狀況的印尼人作店長而開始覺得心情不悅；後病人自述民103年2月後老闆娘對她的態度也變得很差，讓病人覺得心情低落並把工作辭退。陸續病人都在餐飲業工作但工作時間皆不持久，都跟同事間相處問題而離職，最近一次工作擔任清潔人員，於105/02/29病人因為不滿休假制度及福利不公向上反映後遭上級遲退就未再工作，病人家屬表示病人每天喝酒約400cc/day高粱，最後一次喝酒再10/03/03晚上400cc高粱，表示不喝酒不會有不舒服，近兩周夜眠困難情緒不佳，於105/03/02當時病人獨自一人在家，傳了簡訊向女兒告別並聯絡了同事之後，割傷左手腕後自行通知救護車，送至本院急診，其姐姐表示當時急診醫師評估不需縫線但病人堅持要縫線而現左手腕有數道表淺割傷及三針縫線，當時病人情緒穩定後由家人陪同辦理出院返家，此次病人姊姊表示發現家裡垃圾桶內有病人四天份的藥物，懷疑病人將四天份的藥物一次吞下因此將病人送至本院急診，但病人口頭否認觀察也未有意識改變之情形，於急診時曾抽血檢查及驗毒物kentamine(+)，但病人否認有使用K他命，當時安排急性病房住院105/03/04-105/03/12，後續不規則於曾念生主任門診追蹤，家人也都不清楚個案用藥與狀況(個案為老二，家裡有6個兄弟姊妹，一個大哥一個三弟四妹五妹六弟，本次都是聯絡六弟來處理0932263991，其他家人與女兒都不願意理個案)?。<br>本次114/01/03個案朋友於晚上2000接到個案電話，說他吞了很多藥。(疑似eurodin 2mg*10; madopar 200/50mg罐裝數顆) 119送個案至急診後GCS E2M4V3, bil. clear breath sound brain CT 無明顯異常。01/04早上精神較清醒，仍然嗜睡。訴說昨日食欲不佳一整天沒吃東西，最近一周食慾減少，吞藥是吞胃藥。經詢問承認吞藥是想尋死，現在仍然自殺意念強烈。說自己沒有親人沒有朋友，脊椎側彎開過刀都無法工作。詢問"自己的憂鬱還有救嗎？114/1/5 15:00 revisit<br>個案小弟(0932263991)到場，表示個案近幾年皆為獨居在東湖租屋處，案夫已過世(MI)，有一女兒但也少聯繫，有一個姐姐、兩個妹妹、兩個弟弟，平時皆少聯繫。案弟表示個案近年來多飲酒問題，並多次反覆主訴心情不佳喝酒、吞藥，但不清楚個案是否仍有在規律就醫。案弟態度表示希望個案能接受精神科相關治療，若有需要可協助。會談當下個案意識仍嗜睡，問話僅能回應單音節，E3V3M5，disoriented、尚無法會談。<br>"於114/01/06晚上會談後，個案表示目前暫時沒有自殺意念，但自己想要住院接受治療，目前無床位，急診待床?。<br>114/01/07:<br>個案清醒後，於急診及入院會談時言詞多次反覆(包含說自己不曾自殺，又說自己之前自殺過/自己是吞安眠藥物自殺，又向神內醫師說僅吞服一顆madopar/自己未曾看精神科，但又表示自己看過中國醫精神科/自己目前在家可自行煮菜或買三餐，但向急診醫師表示自己已一年多無法正常走路)。個案表示過去約一年以來，長期有脊椎疼痛問題，且與家人疏離，長期有情緒憂鬱低落、失眠、疲憊感、食慾差等症狀，並會藉由酒精入睡(每天喝高粱約120ml., 三天一罐小瓶高粱)，然否認有情緒高昂開闊、激躁易怒、多話、酒精依賴或戒斷(覺得量都差不多，沒喝不會不舒服，只是會睡不著)，否認有其他物質使用。<br>近期因家人向個案表示想送個案去安養院，個案表示出現無助無望感，覺得家人要拋棄自己，自述覺得情緒低落，並於過去數周出現想死及自殺意念，於01/03晚間吞服藥物(說詞反覆，一下子說只吞巴金森藥物，一下子說只吞安眠藥，一下子說只吃一顆madopar，於急診toxic panel BZD Positive, 01/01 alcohol 168mg/dl)後經友人報警後送至本院。<br>目前個案意識及人時地清楚，然下肢無力(muscle power: RUL/LUL/RLL/LLL:4/4/3/3)，表示吞藥後才無力，本來尚可行走。於急診會診神經內科表示藥物過量亦有可能導致個案下肢無力，建議觀察。<br>因前述症狀，經評估後收入本院治療。<br><br></p>'

    const patientAnalysis = '<p>&nbsp;Head: no traumatic wound<br>&nbsp;Eyes: no ictera sclera, no anemic or congested conjunctiva<br>&nbsp;Ears: no discharge, no external anomaly<br>&nbsp;Nose: no discharge, no congestion<br>&nbsp;Mouth: no ulceration of gingiva or oral mucosa, no bleeding spot<br>&nbsp;Throat: no congestion, no enlargement of tonsils<br>&nbsp;Neck: soft and supple, no enlargement of thyroid or lymph nodes, no JVE<br>&nbsp;Heart: regular heart beats with normal heart sounds, no murmur or thrills<br>&nbsp;Chest and lungs: full and symmetrical expansion, clear breathing sounds, no rales or rhonchi<br>&nbsp;Abdomen: soft and flat, no local tenderness, no rebounding pain, no palpable mass, no superficial vein enlargement<br>&nbsp;Back and spine: no knocking pain over cost-vertebral angle, no deformity<br>&nbsp;Extremities: bilateral lower limbs weakness<br>Neurological examination:<br>&nbsp;Consciousness: alert Pupils: isocoric with normal light reflex, ou<br>&nbsp;Cranial nerves: intact Sensory function: intact<br>&nbsp;Motor function: bilateral lower limbs weakness (RUL/LUL/RLL/LLL:4/4/3/3)<br>&nbsp;Coordination: intact Meningeal signs: negative<br>&nbsp;Babinski\'s sign: negative, bil Hoffman sign: negative, bil</p><p>[ Mental status examination ]<br>General appearance: kempt<br>Consciousness: alert<br>Attention: Could focus, could maintain, &nbsp;easily shift.<br>Attitude: passive cooperative<br>Affect: depressed, anxious<br>Speech: coherent, relevant, passive speech with slow rate, normal tone and low volume.<br>Thought:<br>- Form: grossly logical<br>- Content: suicidal ideation at home but denied currently, rumination, negative thinking, denied current homicidal ideation.<br>Perception: denied auditory hallucination<br>Behavior: social withdrawal, psychomotor retardation,suicidal behaviors by drug overdose according to herself this time<br>Insight: 2-3<br>Somatic complaint: insomnia, bilateral lower limbs weakness<br><br></p>'


    const teachingDemo = '<p>住院醫師王翊光:個案為一53歲離婚女性,診斷為重鬱症,多次鬱症發作合併自殺意念,至急診要求入院,這樣的個案應該要如何開啟會談?<br>主治醫師曾念生:鬱症的個案,要開啟會談,要先能夠理解鬱症個案對憂鬱症狀的體驗,你說說看鬱症的個案會有甚麼典型的主觀感覺?<br>住院醫師王翊光:鬱症的個案會在生理、心理、人際、團體,以及意義等五個層面上有主觀感覺。生理系統上會有失眠,動作緩慢,沉重感受等等表現,並且會有動力(如食欲性慾)減低的狀況;同時也會有憂鬱感受的外歸因,因而感到身體與情感失去控制(ossification)。<br>主治醫師曾念生:對的,而在心理系統,個案對於時間和空間的改變會變得遲鈍麻木,因而有"blocking of the future"或行為孤立的表現;同時也會有意念的侷限化,而反覆詢問同樣問題;過度著重在負面現象,並且誇大著重;有時候也會出現「負向觀點=&gt;負面自我觀感=&gt;未來悲觀」的負向循環,讓鬱症症狀愈滾愈大;而邏輯豁免的狀況則是會讓上述的症狀都陷入泥淖,無法自拔.</p><p>住院醫師王翊光:書上也有提到認知內容常常會有四個主題,分別是孤獨感,自我貶抑,無助感,無望感;這些認知內容是不是也跟自殺意念有相關呢?<br>主治醫師曾念生:你說得沒錯,憂鬱個案會過度著重在孤獨,而甚至疏遠自己進而發展出自我貶抑,也無法相信自己可能得到幫助,最後否定所有可能;這些狀況就會以自殺意念或者自殺嘗試做為表現被觀察到.所以第一次會談時,適度的去詢問這些感受,並且利用參考的門徑,來詢問個案關於自殺的想法,其實不失為一個好的方法.<br>住院醫師王翊光:謝謝老師,另外我注意到DSM-5裡面特別註記中,「具有焦慮特質」這樣的註記底下,有提到自殺風險較高這件事,我想問這是不是一個獨立的自殺風險因子呢?或者伴隨憂鬱造成的無助無望感才是?<br>主治醫師曾念生:焦慮本身就是一個自殺風險因子,回顧強迫症個案,其自殺率,就算在無共病情緒疾患的狀況下,也較一般人為高; 所以在會談開啟時,嘗試接觸個案的焦慮也是很好的嘗試,常常可以發現個案的核心痛苦,壓力源,或者相關症狀.</p><p>主治醫師曾念生：你說說看一般治療憂鬱症下，有什麼樣的原則呢？<br>住院醫師王翊光：如果依照NICE guideline主要有下列幾點：<br>1.&nbsp;&nbsp; &nbsp;若憂鬱症狀輕微，抗憂鬱劑不應該做為第一線的治療，而是以一些心理衛教，自助技巧，CBT，運動等作為建議和治療。而中等至嚴重程度的憂鬱症狀，才考慮使用藥物。<br>2.&nbsp;&nbsp; &nbsp;SSRI被建議使用，而且病人都要被衛教自行停藥的話，可能會有戒除的症狀會發生。<br>3.&nbsp;&nbsp; &nbsp;對於治療反應不好的病人，可以考慮augmentation，可以使用lithium, antipsychotic,或第二種antidepressant<br>4.&nbsp;&nbsp; &nbsp;若先前有兩次episode合併功能減退，應該至少治療超過兩年。<br>5.&nbsp;&nbsp; &nbsp;對於嚴重和治療反應不好的憂鬱症，可考慮使用ECT。</p><p>主治醫師曾念生:我們應該要怎麼選擇抗憂鬱藥物呢?<br>住院醫師王翊光: SSRI比較建議作為第一線的使用藥物，主要是來自一篇network metaanalysis報告說雖然有一些藥物整體治療上療效比較好，但是在head-to-head的比較上卻沒有呈現一致的結果。而且不同藥物的副作用會不太一樣。通常SSRI會有頭痛，GI upset的副作用。以及性功能障礙，低血鈉，甚至 GI bleeding的可能性。至於治療的長度，如果只有single episode一般來說建議復原後至少再治療6~9個月。如果超過一次episode，則必須治療超過兩年。<br><br></p>'

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