// ==UserScript==
// @name        三軍總醫院教學住診紀錄 - 萬 - 蘇o華
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

    patientName.value = '蘇o華'
    ward.value = '37-102'
    chartNumber.value = '2540919'
    department.value = 'PSY'
    teacher.value = '萬芳榮'
    studentName.value = '王翊光'
    teachingSite.value = 'Bedside'

    // Level is resident
    const residentRadio = document.querySelector('#formForm > div:nth-child(29) span:nth-child(4) input[type="radio"]')
    residentRadio.checked = true


    // Sex and age

    // male div

    // const maleRadio = document.querySelector('.col-sm-10 .form-inline input[type="radio"]')
    // if (maleRadio) {
    //     maleRadio.checked = true
    // }
    // const maleAge = document.querySelector('.col-sm-10 .form-inline input[type="text"]')
    // if (maleAge) {
    //     maleAge.value = '61'
    // }

    // female div

    const femaleDiv = document.querySelector('#formForm > div:nth-child(22) > div > div:nth-child(2)')
    const femaleRadio = femaleDiv.querySelector('input[type="radio"]')
    const femaleAge = femaleDiv.querySelector('input[type="text"]')

    femaleRadio.checked = true
    femaleAge.value = '56'

    // Large text field

    const patientSummary = '<p>個案為一54歲離婚女性，廣西出生，在當地有第一段婚姻，育有二女，後丈夫車禍過世，因第二段婚姻20多歲搬至台灣居住，有台灣國籍，婚後育有一子，約於42歲與丈夫分居，後辦理離婚。目前獨居汐止(兒子2023/9開始至台中逢甲大學念書)。主要經濟由清潔工作、女兒支柱，每月需付房租、保險。<br>　　據個案及案子所述，個案長期有賭博習慣，經常會透支家用；多次向個案夫家親戚尋求支援。自2018年02月開始，個案前夫中風後開始長期住院，未再能給予經濟支援。2019年個案多接新的工作補助家中經濟支用，同年低收入證明申請未過。個案有向銀行、友人，以及地下錢莊借錢；債務約20萬元左右。據個案同事所述，自2019年初，個案開始有情緒低落，失眠，無助無望感，疲憊感等狀況；並於2019年04月開始，偶爾會有「實在是活不下去了」、「不如去死一死」等等言談。2019年05月開始自殺意念加劇。<br>　　2019/06/01晚間約21:00時案子接到個案來訊，內容為道歉及道別；亦在晚間，個案友人接獲個案來訊，內容為道別。個案友人協同個案鄰居破門，發現個案在自己房間內，手腕一處較深割傷，頸部有兩道撕裂傷，身邊並有水果刀。經報警送至三軍總醫院急診室。個案於急診會談時，情緒激動，無法自制，言談內容貧乏，無邏輯，強烈自殺意念；反覆要求離院，並自述返家後要再自殺。後於2019/6/2 至6/21期間住院接受治療。<br>出院後，固定於三總門診追蹤，但最近一年個案之憂鬱低落情緒持續，且合併不悅、易怒情緒，有食慾下降，失眠，喪失興趣，喜樂不能，且有症狀包括: 睡眠需求減少，易怒不悅，衝動行為等，故過去一年門診期間除使用ZOLOFT 50mg/day以外，於門診期間觀察到強烈之易怒與暴怒情緒，與兒子多有衝突，且有衝動行為與自殺意念等，逐步上調DEPAKINE及ZYPREXA的劑量。自述壓力源包括：經濟狀況持續無法改善，自述無法工作（之前擔任清潔工，但屢次控制不了情緒，跟別人一言不合就會罵髒話、摔東西來發洩情緒，因此而被解雇），靠政府的失業補助金和社工協助度日。另有教養的議題：且兒子時常翹課，熬夜打電玩。個案自述這一年情緒低落的狀態較以前還久(一睜開眼就很憂鬱)。睡眠狀況不佳，需仰賴藥物才能入睡，且平時沒什麼胃口。至於平日的活動包含看電視、出門走走，但時常會想到家中狀況而心神不寧。此外，個案提及每天都有自傷的想法(只有拿刀片，沒有拿刀子)，甚至想過一次食入大量安眠藥物、割腕等自傷行為，是兒子固定打電話回家的關心才讓心情好轉。經萬芳榮醫師評估後予收2021/2/18入院治療，入院會談中，個案提及自傷行為都是一時的情緒而造成，沒有經過事前計畫。2021/3/16出院。出院後返家居住，近一個月情緒激動易怒，多人際衝突，於工作場所持美工刀與同事衝突，情緒激動時表示要一頭撞死，經門診評估於2021/12/21入院治療，並於2022/1/7出院。<br>個案於出院後持續門診追蹤，服藥控制。個案持續有憂鬱低落情緒持續，且合併不悅、易怒情緒，有食慾下降，失眠情形，情緒激動時有會有自傷傷人想法(無coping方式，想打自己、打別人但無實際行為，時間久了就忘了。)。門診追蹤期間個案經濟困難情形持續，目前工作為打工性質的臨時清潔工於台北地區各辦公大樓打掃工作靠政府的失業補助金和社工協助度日。期間若有情緒快失控可能要與人起爭執時。自述服藥可緩解，自上次出院後無與他人衝突。案子目前18歲就讀高中，常翹課回家打電玩。個案近期常煩惱案子及經濟困難的情形，除憂鬱低落情緒外，偶有失眠情形(早醒(2,3點)無法再入眠，一個月7-8天)，經門診評估於2022/7/13入院治療，並於2022/8/16出院。<br>個案於出院後持續門診追蹤，服藥控制。個案持續有憂鬱低落情緒持續，且合併不悅、易怒情緒。門診追蹤期間個案經濟困難情形持續(收入約3萬多但每個月支出4萬多。近一年由於兒子買了機車，要繳機車貸款，壓力更大)，會因為此經濟困難壓力要求就讀高三的兒子去打工，也因此常常跟兒子有爭執。另個案表示期間也常常有自殺念頭。由於有朋友有喝農藥自殺，所以個案也想效仿喝農藥一走了之。個案表示曾經有去購買農藥，但是到店裡卻因為要實名登記而作罷。不過個案表示有聽說花蓮購買農藥很方便，便有想要託人購買的念頭。因為以上自殺意念以及情緒低落情形，經門診評估於2023/3/14日-2023/4/15入院治療。<br>出院後自訴有規則門診及服藥，從事清潔工作(月入二萬六)，生活可以自理，沒事都在家看電視，沒有社交，自述仍有經濟問題(因為沒錢改吃素)，和同事或兒子起口角時也會情緒失控、出現傷人想法(內心想把對方殺了)，因上述原因近三個月持續有憂鬱低落、失眠、自殺意念(保護因子:居住在澳洲的女兒，關係佳，每天都會透過維信聯絡)，故經主治醫師萬芳榮門診評估收住院治療。<br>2024/8/12<br>出院後自訴可規則門診及服藥，此次入院原因為病人表示最近晚上服藥後都沒辦法睡，自行調整安眠藥物後仍無法入睡，導致病人出現情緒易起伏、煩躁等，常跟兒女吵架。<br>2025-01-22<br>三個月前工作上與同事爭吵多，被辭退，之後持續有憂鬱低落、失眠、間歇自殺意念(保護因子:居住在澳洲的女兒，關係佳，每天都會透過維信聯絡)，回門診調藥後改善有限，估評後，收住院治療。<br><br></p>'

    const patientAnalysis = '<p>Physical Examination:<br>General appearance: moderately developed and nourished without cardiopulmonary embarrassment<br>Head: no traumatic wound<br>Eyes: no ictera sclera, no anemic or congested conjunctiva<br>Ears: no discharge, no external anomaly<br>Nose: no discharge, no congestion<br>Mouth: no ulceration of gingiva or oral mucosa, no bleeding spot<br>Throat: no congestion, no enlargement of tonsils<br>Neck: soft and supple, no enlargement of thyroid or lymph nodes, no JVE<br>Heart: regular heart beats with normal heart sounds, no murmur or thrills<br>Chest and lungs: full and symmetrical expansion, clear breathing sounds, no rales or rhonchi<br>Abdomen: soft and flat, no local tenderness, no rebounding pain, no palpable mass, no superficial vein enlargement<br>Back and spine: no knocking pain over cost-vertebral angle, no deformity<br>Extremities: no limitation of movement</p><p>Neurological examination:<br>Consciousness: alert<br>Pupils: isocoric with normal light reflex, ou<br>Cranial nerves: intact<br>Sensory function: intact<br>Motor function: intact<br>Deep tendon reflexes: intact<br>Coordination: intact<br>Meningeal signs: negative<br>Babinski’s sign: negative, bil<br>Hoffman sign: negative, bil</p><p>Mental status examination:<br>General appearance: well dressed, clear<br>Consciousness: alert<br>Attention: attentive, could maintain and shift<br>Attitude: cooperative<br>Affect: depressed mood, crying<br>Speech: fluent, coherent, relevant<br>Thought: negative thought, worthless, excessive guilty feeling, denied delusion.<br>Perception: denied hallucination or illusion<br>Behavior: social withdrawal<br>JOMAC: grossly intact<br>Insight: partial<br>Somatic complaint: insomnia, low back pain, 走路不穩<br><br></p>'


    const teachingDemo = '<p>住院醫師王翊光:個案診斷為第一型雙相情緒障礙症,反覆有鬱症發作狀況,合併嚴重失眠,請問這樣的個案我們應該要如何使用藥物?<br>主治醫師萬芳榮:在雙相情感障礙症個案,鬱症的處理要特別小心,不能單純使用抗鬱劑來處理,因為可能會出現反彈性的躁症發作,你知道有哪些藥物可以考慮嗎?<br>住院醫師王翊光:在雙相情感障礙症個案,我們應該要以情緒穩定劑當作優先考慮,才能夠在不造成病情翻轉的前提下來治療病人。<br>主治醫師萬芳榮:你說得沒有錯,那有沒有情緒穩定劑以外的藥物給予方式呢?<br>住院醫師王翊光:那麼這個病人應該怎麼去調整藥物呢?<br>主治醫師萬芳榮:這個問題就要回到實證層面了,我們應該要參考已經發表的治療指引.<br>住院醫師王翊光:我們應該要參考哪些治療指引才適合呢?<br>主治醫師萬芳榮:APA, WSFBP都有相關的治療指引,而台灣精神醫學會也發表過了&lt;雙極性情感疾患 治療共識&gt;，提供我們一些治療時的依據<br>住院醫師王翊光:那我們依照這份治療指引,就可以做出作符合病人需要的決定嗎?<br>主治醫師萬芳榮:那就不一定了,你應該以病人的臨床需要為主,來做討論才決定;像這個病人就可以考慮要用一些可以幫助睡眠的藥物,譬如說Quetiapine,或者valproate.</p><p><br>主治醫師萬芳榮: bipolar depression 的病人相較於unipolar depression有什麼不同呢?<br>住院醫師王翊光: 雖然在criteria上和MDD一樣，不過在一些表現的特質上還有不太一樣的地方。相較於MDD，bipolar depression在onset上會比較快速，頻繁，而且更嚴重，病程更短，而且更常出現妄想，或是一些反向的症狀像是:嗜睡hypersomnia，嗜食hyperphagia。大概有15% bipolar depression的病人會自殺身亡，表示他的嚴重程度是比MDD更為嚴重和頻繁。</p><p>住院醫師王翊光: 那這樣請問學長治療bipolar depression相較unipolar depression治療上有什麼需要注意的地方呢?<br>主治醫師萬芳榮: 在一篇最大型metaanalysis的研究中，有發現幾種藥物是在治療的療效上等級比較高，包括olanzapine+fluoxetine，lurasidone，olanzapine，valproate，quetiapine等。SSRI的使用要非常小心且研究有一些爭議性的結果，若真的使用也必須配合mood stablizer以防情緒翻轉的可能性。</p><p>主治醫師萬芳榮：何謂躁鬱症？&nbsp;<br>住院醫師王翊光：每個人都會有情緒的起伏，快樂、悲傷、生氣都是正常會有的情緒反應，也是每天生活的一 &nbsp;部分。然而，躁鬱症是一種使人的情緒高低起伏變化失去控制的一種疾病。這些情緒起伏會影響一個人的思考、感覺、行為、身體健康及日常生活功能表現。有些人以為得這種病，是一件相當丟臉的事情，似乎是病人的罪過。但基本上，罹患躁鬱症並不是誰的錯，也不是虛弱或不穩定人格的結果。它就和一般人會得的糖尿病高血壓一樣，是一種生理上的疾病，而且是可以治療的一 &nbsp;種病。&nbsp;<br>主治醫師萬芳榮問：躁鬱症何時會發生？&nbsp;<br>住院醫師王翊光：躁鬱症通常在青少年或成年早期第一次發作，有時在兒童初期或晚至四、五十歲發生；但是如果一個人超過五十歲才第一次發生躁鬱症的話，則必須考慮是否為其他身體疾病問題造成的， 例如神經科問題或是藥物、酒精所引起的。&nbsp;<br>主治醫師萬芳榮問：為什麼必須及早診斷躁鬱症？&nbsp;<br>住院醫師王翊光：早期診斷、適當治療可以避免患者出現下列的情況： 自殺：在患病的初期自殺的危險性最高。酒精及藥物濫用：超過半數以上的躁鬱症患者在生病期間會有藥物濫用或酒精濫用的情況。婚姻及工作問題：立即的治療可以改善婚姻的穩定及工作的生產性。治療困難：有證據顯示病人的發作次數愈多，下一次發作的治療愈困難、發作的頻率也會愈高。<br>主治醫師萬芳榮問：躁鬱症會遺傳嗎？&nbsp;<br>住院醫師王翊光：研究發現有些遺傳基因可能與躁鬱症的發病有關，就好像一些生理疾病如關節炎一樣，與遺傳有關。然而如果你有躁鬱症而你的伴侶沒有，則小孩子得病的機會大約是七分之一；如果家中患躁鬱症或憂鬱症的人愈多，則小孩得病的機會也就愈高。&nbsp;<br>主治醫師萬芳榮問：什麼原因會引起躁鬱症？&nbsp;<br>住院醫師王翊光：沒有單一的原因造成躁鬱症，但是許多研究顯示它可能是一種體質的問題，它與大腦的神經傳導物質缺乏穩定性有關。這樣的生化異常使得躁鬱症患者很容易受到情緒或外來壓力的影響，如果生活上不如意、使用刺激性藥物、缺乏睡眠或過度刺激，腦部迅速恢復平靜的功能就無法適當的運作。這種先天體質與環境刺激相互作用的理論與許多內科疾病的理論相似。<br><br></p>'

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