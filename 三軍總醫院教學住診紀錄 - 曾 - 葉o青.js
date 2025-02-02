// ==UserScript==
// @name        三軍總醫院教學住診紀錄 - 曾 - 葉o青
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

    patientName.value = '葉o青'
    ward.value = '37-112'
    chartNumber.value = '407552'
    department.value = 'PSY'
    teacher.value = '曾念生'
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
        maleAge.value = '61'
    }

    // female div

    // const femaleDiv = document.querySelector('#formForm > div:nth-child(22) > div > div:nth-child(2)')
    // const femaleRadio = femaleDiv.querySelector('input[type="radio"]')
    // const femaleAge = femaleDiv.querySelector('input[type="text"]')
    //
    // femaleRadio.checked = true
    // femaleAge.value = '64'

    // Large text field

    const patientSummary = '<p>個案為59歲未婚男性，役畢(兩年陸軍)，當兵後就讀淡大國貿系(畢)，父母和哥哥已故，目前和姊姊和外甥同住於文山區木柵附近。約25歲開始從事百貨零售業業務(賣進口衣服、皮鞋)，後升遷為經理，55歲辭職，後從事倉管業務(搬貨、進貨、出貨)直到2020/04新冠役情後被開除，目前無業，經濟來源為自身積蓄。飲酒習慣為高中開始喝啤酒，25歲因應酬和心情不好會飲酒，最多可喝300+mL高粱酒；32歲可一天喝750mL高粱酒；50+歲改喝威士忌一瓶(700mL)，否認曾有戒斷；自述約55歲戒酒。<br>病患於2003年開始有失眠和憂鬱情形，有去長庚門診看過兩次，2004年因欠債開始有酗酒、自我膨脹、情緒高漲和憂鬱情緒交替的情形。2007年因有憂鬱自殺意念(買了美工刀與木炭)，因而收治三總住院(2007/5/17 to 2007/6/13)，之後有在門診追蹤。2009年時開始有情緒高漲、計畫變多、衝動消費大約持續6個月。2010/3月 進行stage one colon cancer。2011/11月 有憂鬱、負面想法和自殺嘗試(上吊)。<br>2012月至2019年期間共18次精神科急性病房住院，多因憂鬱、負面想法、失眠、無價值感、自殺意念、有時轉換為易怒、自我膨脹、衝動購物。<br>2020/02開始，有情緒高亢，睡眠需求減低(晚上11點睡，4點起床)，自大想法(自述在工作上或覺得自己能力比主管好，但也自述過去十年來都這樣覺得，也獲得其他同事認可，惟因考量其低收入身分不願從事薪資更高工作；自大想法自述僅限於工作「其他的方面我也不敢說」)，計畫很多(僅限於工作，在倉貯工作上有不同的計畫)，經常在外面走(自述會去公園，坐在椅子上發呆整天看人走來走去；曾經去過一次西門町，買過一次模型花了一萬多元)，後悔的衝動行為(西門町買過一次模型花了一萬多元，同日坐下來花一整天把模型組完；02/07買了兩大袋蘋果到門診)；同時也有無價值感，疲憊感等情形，早上起床情緒會特別糟糕；自覺躁症發作無法繼續工作，於2020/02/06完成工作後，向老闆(友人)請假，2020/02/07至三軍總醫院汀洲門診就診，並安排於急性精神科病房住院20200207-20200319。<br>個案自述因疫情的關係2020的四月底遭遇公司的資遣，目前沒有經濟收入而感到心裏的壓力很大，在入院前三週大部分時間在家裏呆著，中間也有試著去找其他工作，但因疫情的關係後來都沒有找到。在這三週時間個案出現了負面的情緒，主要為自殺的念頭、情緒低落、憂鬱的情形，並且自覺伴隨幾次輕微的燥症的症狀，有情緒高昂但是沒有衝動購物。目前與外甥及案同住，待業近3個月左右。其表示2020/6/22號出院後症狀穩定，服藥順從性佳。於2020/07/30號左右，個案主訴花了近3萬元買了筆電給剛上大學的外甥，案姐表示預計向社會局申請補助近1萬3千元左右還給個案，然而個案上網查詢發現案姐並無向社會局申請補助，並向案姐爭執，案姐而後給予個案1萬元左右現金。然而後續個案出現易怒交雜憂鬱情緒、煩躁、對案姐產生殺害意念(計畫用繩索勒斃、拿菜刀劃脖子)、自述在案姐家中較優越能掌控一切、無法集中注意力。由於症狀持續，個案於2020/8/7自行前往汀洲門診就診，隨後轉介至內湖急診接受近一步評估。於急診會談過程中個案情緒焦躁、語意連貫、否認飲酒及物質使用、否認聽幻覺及視幻覺情形。<br>上次出院後，個案於109/11診斷plasma cell myeloma，於11/9-11/30於本院骨科住院治療。持續憂鬱情緒，無助無望，失去興趣喜樂。個案否認幻覺幻聽，亦否認睡眠胃口改變，否認飲酒抽菸或其他物質濫用。因持續憂鬱情緒，經評估後住院治療。<br>上次於精神科住院為2020/12/01-2020/12/09，2021/2月後無回精神科門診，改在本院血液腫瘤科拿精神科用藥，自述可規律回診及服藥，2021年3月行椎體移除手術後，下肢無力、步態不穩加重，自述因疫情關係排不到復健，每天都在家自行復健，家務由姐姐負責，近三個月行自述因無法至醫院復健加上下肢無力無改善，出現情緒低落、煩躁、喜樂不能、無助無望感、負面思考、反芻思考、自殺意念(無計劃)，否認失眠、食慾改變、飲酒、近期高昂開闊情緒，經曾念生醫師評估後收住院治療(2022/5/10-2022/6/7)。<br>2022/10/18-11/28住院: 個案自述約三週前因案姊對於洗手台沒有打掃乾淨感到不滿，所以使用言語辱罵個案，導致雙方起爭執。自此事件，個案出現易怒交雜憂鬱情緒。個案先是出現自大且的感覺、睡眠減少(一天睡三次)，對案姊有傷害的意念(想毆打姊姊)，做出帶來痛苦結果的活動(購買慾望高漲上網一直逛國外網站看戒指項鍊，且購買價格高昂的熱水壺4000~5000元，購買超出家人數量的保溫杯4~5個)，在此同時，個案同時感到憂鬱、容易感到疲累(眼皮變得很重)、變得嗜睡(個案自述原本正常都6點起來，現在變7點20才起得來)、覺得有自我無價值感、記憶力下降(個案自述開始東西好像記不起來，記憶力變差)、還有自殺意念(個案自述去太原路買麻繩想上吊)。<br>病患於2022/11月出院後便持續有憂鬱症狀，由於開刀下肢行動不便，目前感到復健過程緩慢，生活圈受限於家中感到憂鬱，12月中因姐姐偷欠病患錢購買化妝品與姊姊爭吵，並感覺有躁鬱症的躁症出現，感到時有衝動(買東西)，情緒激動，並表示有情緒高漲與低落，否認睡眠失調，表示有想自殺的意念，對於自身multiple myeloma病情感到悲觀，並準備於復健康復行動方便後到世界遊走，然後用上吊方式輕身，目前無相關自殺準備。病患自述足底筋膜炎情況加重。於2023/1/12收治住院，2023/2/16轉至松山醫院持續治療，個案因憂鬱低落情緒持續，2023/3/2自松山醫院轉回持續治療，2023/3/20出院。<br>出院後返家與姊姊同住，W124到萬芳醫院復健，但自述因為三總回診次數多不方便，精神科用藥改至本院血液腫瘤科拿，6/7血液腫瘤科返診時得知化療藥物要持續使用，認為跟當初說使用16次就好不同，開始感到情緒低落、無助無望感、食慾下降、自殺意念，否認易怒、失眠、白天疲倦，另個案提及3月開始出現雙側膝蓋後側站立時容易僵硬、緊繃，至復健科門診復健和用藥皆無明顯改善，故6/16返回精神科門診就診，經主治曾念生醫師評估後收住院治療(2023/6/19-7/31)。<br>個案提及3月開始出現雙側膝蓋後側站立時容易僵硬、緊繃，下腰部無特定時間之刺痛，至復健科門診復健和用藥皆無明顯改善，骨科亦無治療方針。近兩週個案自述腳底疼痛(足底筋膜炎)，由於疼痛導致日常生活產生不便(吃飯、洗澡都有影響，但睡眠不受影響)，個案提及與案姊對於洗手台沒有打掃乾淨感到不滿、個案沒有坐著使用馬桶導致尿漬，所以使用言語辱罵個案，導致雙方起爭執。但是憂鬱的感覺卻有加重，個案對於自己腳底疼痛的情形感到擔憂。個案否認幻覺幻聽，亦否認睡眠胃口改變，否認飲酒抽菸或其他物質濫用。經門診評估之後收住院(2023/11/07-12/7)。<br>2024/1/9-4/26 住院: 自述膝蓋疼痛上下樓梯須姐姐攙扶，生活不便，情緒低落多負面思考(覺得自己是個廢人)，時常感到煩躁會搥牆發洩，有自殺意念(想用麻繩去荒野上吊，無計劃)，飲酒狀況疑復發，經門診評估入院治療。<br>2024/06/17 -2024/07/15住院:個案自述因左膝持續疼痛，曾在復健科嘗試使用Lyrica(Pregabalin 75mg) 最高吃到每日四顆，個案吃完會四肢無力，在家有不慎摔倒，與醫師討論減藥後疼痛持續。多情緒低落及負面思考，時感煩躁，近一周自殺意念強烈，曾去買木炭回家，被家人發現後帶來門診，經評估入院治療。<br>2024/08/16-09/12個案自述自上次出院後，雙膝疼痛再度加劇，服用藥物亦無改善(lyrica 3pc)在家中仍持續有情緒憂鬱低落、喜樂不能、疲憊感、社交退縮、無助無望感、自殺意念(但無實際企圖)等症狀，因前述症狀經門診評估收入院治療。<br>2024/09/27<br>個案上次住院時，因症狀持續無緩解，被轉至松山分院治療，又因症狀持續，繼續轉回本院治療，個案持續有情緒低落、無助無望感、食慾下降、自殺意念，否認易怒、失眠、白天疲倦。<br>2024/12/31-<br>據個案所述，自上次出院後返回家中居住，然自述情緒仍有憂鬱低落、喜樂不能、無助無望感、食慾差、失眠、白日疲憊感等症狀，另於例行血液腫瘤科追蹤時發現腎功能變差(creatinine 2.4)，雖有轉介腎臟內科追蹤，然個案表示情緒受到很大影響，覺得低落憂鬱加劇，並有社交退縮情形，因前述症狀，經門診評估後收入院治療。個案否認有情緒高昂開闊、激躁易怒、自傷或自殺意念或企圖、物質或酒精使用。<br><br></p>'

    const patientAnalysis = '<p>Height: 162cm, Weight: 63kg<br>Physical Examination:<br>General appearance: moderately developed and nourished without CP embarrassment<br>Skin: herpetic lesions over the right upper chest skin<br>Head: no traumatic wound<br>Eyes: no icteric sclera, no anemic or congested conjunctiva<br>Ears: no discharge, no external anomaly<br>Nose: no discharge, no congestion<br>Mouth: no ulceration of gingiva or oral mucosa, no bleeding spot<br>Throat: no congestion, no enlargement of tonsils<br>Neck: soft and supple, no enlargement of thyroid or lymph nodes, no JVE<br>Heart: regular heart beats with normal heart sounds, no murmur or thrills<br>Chest and lungs: full and symmetrical expansion, clear breathing sounds, no rales or rhonchi<br>Abdomen: soft and flat, no local tenderness, no rebounding pain, no palpable mass, no superficial vein enlargement<br>Back and spine: no knocking pain over cost-vertebral angle, no deformity<br>Extremities: 走路不穩</p><p>Neurological examination:<br>Consciousness: alert Pupils: isocoric with normal light reflex, ou<br>Cranial nerves: intact Sensory function: intact<br>Motor function: intact Deep tendon reflexes: intact<br>Coordination: intact Meningeal signs: negative<br>Babinski\'s sign: negative, bil<br>Hoffman sign: negative, bil</p><p>Mental status examination:<br>Appearance: well dressed, clear<br>Consciousness: alert<br>Attention: can focus, maintain, shift<br>Attitude: passive cooperative<br>Affect: depressed and anxious mood<br>Speech: fluent, coherent, relevant; spontaneous speech with low tone, small volume, appropriate speed, mild slurred speech<br>Thought: negative thoughts, suicidal ideation, helpless, hopeless, denied any ilusion or delusion.<br>Perception: denied any hallucination<br>Behavior: social withdrawal, low frustration tolerance, denied self-harm behavior<br>Insight: partial<br>Somatic complaint: insomnia<br>JOMAC: grossly intact<br><br></p>'


    const teachingDemo = '<p>住院醫師王翊光:個案為為重鬱症,多次鬱症發作合併自殺意念,至急診要求入院,這樣的個案應該要如何開啟會談?<br>主治醫師曾念生:鬱症的個案,要開啟會談,要先能夠理解鬱症個案對憂鬱症狀的體驗,你說說看鬱症的個案會有甚麼典型的主觀感覺?<br>住院醫師王翊光:鬱症的個案會在生理、心理、人際、團體,以及意義等五個層面上有主觀感覺。生理系統上會有失眠,動作緩慢,沉重感受等等表現,並且會有動力(如食欲性慾)減低的狀況;同時也會有憂鬱感受的外歸因,因而感到身體與情感失去控制(ossification)。<br>主治醫師曾念生:對的,而在心理系統,個案對於時間和空間的改變會變得遲鈍麻木,因而有"blocking of the future"或行為孤立的表現;同時也會有意念的侷限化,而反覆詢問同樣問題;過度著重在負面現象,並且誇大著重;有時候也會出現「負向觀點=&gt;負面自我觀感=&gt;未來悲觀」的負向循環,讓鬱症症狀愈滾愈大;而邏輯豁免的狀況則是會讓上述的症狀都陷入泥淖,無法自拔.</p><p>住院醫師王翊光:書上也有提到認知內容常常會有四個主題,分別是孤獨感,自我貶抑,無助感,無望感;這些認知內容是不是也跟自殺意念有相關呢?<br>主治醫師曾念生:你說得沒錯,憂鬱個案會過度著重在孤獨,而甚至疏遠自己進而發展出自我貶抑,也無法相信自己可能得到幫助,最後否定所有可能;這些狀況就會以自殺意念或者自殺嘗試做為表現被觀察到.所以第一次會談時,適度的去詢問這些感受,並且利用參考的門徑,來詢問個案關於自殺的想法,其實不失為一個好的方法.<br>住院醫師王翊光:謝謝老師,另外我注意到DSM-5裡面特別註記中,「具有焦慮特質」這樣的註記底下,有提到自殺風險較高這件事,我想問這是不是一個獨立的自殺風險因子呢?或者伴隨憂鬱造成的無助無望感才是?<br>主治醫師曾念生:焦慮本身就是一個自殺風險因子,回顧強迫症個案,其自殺率,就算在無共病情緒疾患的狀況下,也較一般人為高; 所以在會談開啟時,嘗試接觸個案的焦慮也是很好的嘗試,常常可以發現個案的核心痛苦,壓力源,或者相關症狀.</p><p>主治醫師曾念生：你說說看一般治療憂鬱症下，有什麼樣的原則呢？<br>住院醫師王翊光：如果依照NICE guideline主要有下列幾點：<br>1.&nbsp;&nbsp; &nbsp;若憂鬱症狀輕微，抗憂鬱劑不應該做為第一線的治療，而是以一些心理衛教，自助技巧，CBT，運動等作為建議和治療。而中等至嚴重程度的憂鬱症狀，才考慮使用藥物。<br>2.&nbsp;&nbsp; &nbsp;SSRI被建議使用，而且病人都要被衛教自行停藥的話，可能會有戒除的症狀會發生。<br>3.&nbsp;&nbsp; &nbsp;對於治療反應不好的病人，可以考慮augmentation，可以使用lithium, antipsychotic,或第二種antidepressant<br>4.&nbsp;&nbsp; &nbsp;若先前有兩次episode合併功能減退，應該至少治療超過兩年。<br>5.&nbsp;&nbsp; &nbsp;對於嚴重和治療反應不好的憂鬱症，可考慮使用ECT。</p><p>主治醫師曾念生:我們應該要怎麼選擇抗憂鬱藥物呢?<br>住院醫師王翊光: SSRI比較建議作為第一線的使用藥物，主要是來自一篇network metaanalysis報告說雖然有一些藥物整體治療上療效比較好，但是在head-to-head的比較上卻沒有呈現一致的結果。而且不同藥物的副作用會不太一樣。通常SSRI會有頭痛，GI upset的副作用。以及性功能障礙，低血鈉，甚至 GI bleeding的可能性。至於治療的長度，如果只有single episode一般來說建議復原後至少再治療6~9個月。如果超過一次episode，則必須治療超過兩年。<br><br></p>'

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