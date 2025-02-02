// ==UserScript==
// @name        三軍總醫院教學門診紀錄 - 李o弘
// @namespace   Violentmonkey Scripts
// @match       https://cts.tsgh.ndmctsgh.edu.tw/form/prompt/fillForm*
// @grant       none
// @version     1.0
// @author      Light
// @description 2024/12/24 下午1:00:37
// ==/UserScript==



/*
// Set score
const score = 5

// check radios [value=7]
const radioButtons = document.querySelectorAll(`input[type="radio"][data-fillflag="write"][value="${score}"]`);
console.warn(`radio buttons: ${radioButtons.length} found.`)
radioButtons.forEach(radio => {
    radio.checked = true;
});

// add comment
const comment_textarea = document.querySelector('#formForm > div:nth-child(49) > div textarea')
comment_textarea.textContent = '積極關心病人狀況'
*/


const teacher_input = document.querySelector('#formForm > div:nth-child(21) > div > input')
const student_level_is_R = document.querySelector('#formForm > div:nth-child(23) > div > span:nth-child(2) input')
const am_opd = document.querySelector('#formForm > div:nth-child(25) > div > span:nth-child(1) input')

const patient_name= document.querySelector('#formForm > div:nth-child(27) > div input')
const patient_chart_number  = document.querySelector('#formForm > div:nth-child(28) > div input')
const chief_complaint = document.querySelector('#formForm > div:nth-child(30) > div textarea')
const present_illness = document.querySelector('#formForm > div:nth-child(31) > div textarea')
const history = document.querySelector('#formForm > div:nth-child(32) > div textarea')


teacher_input.value = '黃三原'
student_level_is_R.checked = true
am_opd.checked = true

patient_name.value = '李宇弘'
patient_chart_number.value = '1770557'
chief_complaint.value = '自今年六月底開始有頻繁刷卡、買股票、頻繁網路交友以及睡眠需求減少的情形，easy anger and labile mood, 自上周四開始自言自語的狀況變的愈加嚴重而在老婆的陪同下來求診。\n'

present_illness.value = '個案自小個性內向樂於助人，交友狀況正常，中學就讀彰化高工(畢業)，成績普通，最高學歷為中原大學工業工程學系(畢業)，無服兵役(因為小兒麻痺而免役)。第一次出現症狀時為民國92年(個案44歲)，個案當時為裕隆企業企畫案高階主管，底下員工工安意外身亡，個案相當自責。當時個案情緒低落，會因為自責而不停哭泣，而後因為開車在國道上亂繞(個案自述為"迷魂宮")。因為繞到車子爆胎受警方關注而被帶至警局。案妻認為當時個案對話時回復的字句都只有簡短的一兩個字，而個案同事則稱在國道事件前個案就有服儀不當的情形產生(例如:穿著運動服出現在辦公室)，個案向陸汝斌醫師求診，而當時的診斷為憂鬱症。\n' +
    '個案第二次出現症狀時為在民國98年，個案自述當時在台銀上班，因為業務糾紛而和他人起衝突，個案有推對方的衝動行為。案妻稱當時個案的情況和這次相似，都是話題綿延不絕無法停止，整個呈現一種很亢奮的狀態。\n' +
    '此次住院，個案從六月底開始有頻繁刷卡、買賣股票及頻繁交友(網路交友)的行為，個案一天只睡不到三小時但個案自述並無失眠狀況只需要些許睡眠就覺精力充沛。並且認為自己確實有廣泛交友的傾向，很想要認識很多不同的朋友，另外個案也說自己頻繁刷卡及消費是因為常常被不同領域的朋友推銷不同的東西，而個案也會購買那些物品，但不認為自己的購物行為有造成她的困擾因為那些東西都用得到。另外個案也說明最近想選總幹事而會廣泛交友，認為人脈很重要，對於自己能勝任總幹事一職感到勢在必行。案妻則稱個案過去不會這麼想自我推銷。個案提及從上周四開始有件令他煩惱的事:1.家裡收到來自法院的來函(因為家中有土地糾紛事宜)2.有位女網友希望他匯兩萬元給他，並與她相約於遠企相見歡。個案也稱自上周開始可以聽到耳邊有人會和他講話，內容是清楚的(例如幹嘛要去做上述的事情)。但是住進來就沒有那些聲音了，個案近日也會回應那些聲音(例如:不要來煩我啦)，個案否認有視幻覺，另外個案認為常會覺得身邊的人在談論他，最近的這些事讓他相當心煩，常會對老婆說不要來煩他。\n' +
    ' 個案自出生以來無明顯無內外科疾病。\n' +
    '個案表示自己是個乖寶寶，都有按時服藥。\n'

history.value = '*Past history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1.內科病史：大腸癌since 2016、小兒麻痺、高血壓、良性攝護腺增生\n' +
    '2.外科病史：否認\n' +
    '3.藥物過敏：否認\n' +
    '4.藥物濫用：否認\n' +
    '5.癲癇病史：否認\n' +
    '6.重大頭部外傷病史：曾經在浴室跌倒有撞到頭以及造成手骨折。\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Personal history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1.生產及成長過程:自然產、足月產\n' +
    '2.求學經過： 成績普通 最高學歷為 大學(中原大學工業工程學系) \n' +
    '3.個性： 大男人主義、好強、自我要求高、樂於助人\n' +
    '4.人際關係： 普通，朋友不多。與家人互動不多但是少衝突。\n' +
    '5.宗教信仰：無\n' +
    '6.婚姻關係：結婚30年\n' +
    '7.抽煙：40多年。\n' +
    '8.喝酒： 否認。\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Family history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '家族慢性病史:高血壓\n' +
    '家族精神病史:無\n' +
    '家庭互動關係: 與家人互動冷漠。\n' +
    '家族藥物濫用病史: 無\n' +
    'key person為老婆\n'


// Fields with editor
setTimeout(() => {

    const divsWithIframe = document.querySelectorAll('.cke')

    divsWithIframe.forEach((div, index) => {
        const iframe_in_div = div.querySelector('iframe').contentDocument.querySelector('body[contenteditable=true]')

        switch (index) {
            case 0: // review of systems
                iframe_in_div.innerHTML = '<p>There were no chills, fever, headache, night sweating, itching skin, skin rash, chest tightness, cough, sputum, shortness of breath, dyspnea on exertion, paroxysmal nocturnal dyspnea, orthopnea, chest pain, claudication, abdominal pain, nausea, vomiting, diarrhea, melena, edema, constipation, body weight loss and insomnia<br></p>';
                break;
            case 1: // physical examinations
                iframe_in_div.innerHTML = '<p>General appearance: moderately developed and nourished without cardiopulmonary embarrassment<br>Head: no traumatic wound<br>Eyes: no ictera sclera, no anemic or congested conjunctiva<br>Ears: no discharge, no external anomaly<br>Nose: no discharge, no congestion<br>Mouth: no ulceration of gingiva or oral mucosa, no bleeding spot<br>Throat: no congestion, no enlargement of tonsils<br>Neck: soft and supple, no enlargement of thyroid or lymph nodes, no JVE<br>Heart: regular heart beats with normal heart sounds, no murmur or thrills<br>Chest and lungs: full and symmetrical expansion, clear breathing sounds, no rales or rhonchi<br>Abdomen: soft and flat, no local tenderness, no rebounding pain, no superficial vein enlargement<br>Back and spine: no knocking pain over cost-vertebral angle, no deformity<br>Extremities: no limitation of movement</p><p>Neurological examination:<br>Consciousness: alert<br>Pupils: isocoric with normal light reflex, ou<br>Cranial nerves: intact<br>Sensory function: intact<br>Motor function: intact<br>Deep tendon reflexes: intact<br>Coordination: intact<br>Meningeal signs: negative<br>Babinski’s sign: negative, bil<br>Hoffman sign: negative, bil</p><p>Mental status examination:<br>Appearance: clear, nessy, 多針孔注射痕跡<br>Consciousness: alert<br>Attention: could focus, hard to maintain, can shift<br>Attitude: passive cooperate<br>Affect: anxiety, dysphoria<br>Speech: fluent, coherent, relevant, speech with low tone, small volume, slow speed<br>Thought: negative thought, denied suicidal ideation, denied delusion<br>Perception: denied any hallucination<br>Behavior: withdrawal, craving heroin injection<br>Insight: partial<br>Somatic complaint: muscle soreness<br><br></p>';
                break;
            case 2: // lab
                iframe_in_div.innerHTML = '<p>***生化--內分泌/貧血因子***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Vitamin &nbsp;Folate&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B12 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;pg/mL &nbsp; &nbsp;ng/mL &nbsp;<br>&nbsp; 2023/11/21 0738 &nbsp;246 &nbsp; &nbsp; &nbsp;33.8 &nbsp;&nbsp;</p><p>***甲狀腺***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; TSH &nbsp; &nbsp; &nbsp;Free T4<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;uIU/ml &nbsp; ng/dl &nbsp;<br>&nbsp; 2023/11/21 0823 &nbsp;6.48 &nbsp; &nbsp; 1.20 &nbsp;&nbsp;</p><p>***血液生化***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; BUN &nbsp; &nbsp; &nbsp;E8 &nbsp; &nbsp; &nbsp; HbA1c &nbsp; &nbsp;HDL-Cho &nbsp;Creatin &nbsp;GLU(ER) &nbsp;LDL-Cho &nbsp;AST &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; lestero &nbsp;ine &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; lestero &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; l &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;l &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mg/dL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; % &nbsp; &nbsp; &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;U/L &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0739 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 100 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/11/21 0741 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5.3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/11/21 0743 &nbsp;7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0.6 &nbsp; &nbsp; &nbsp;83 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;16 &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/12/01 0740 &nbsp;11 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0.7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8 &nbsp; &nbsp; &nbsp;</p><p>***血液生化***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Total C &nbsp;ALT &nbsp; &nbsp; &nbsp;Triglyc &nbsp;Uric Ac &nbsp;Total C &nbsp;IP &nbsp; &nbsp; &nbsp; Na &nbsp; &nbsp; &nbsp; Alkalin<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;holeste &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; eride &nbsp; &nbsp;id &nbsp; &nbsp; &nbsp; alcium &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; e Phosp<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;rol &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;hatase&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mg/dL &nbsp; &nbsp;U/L &nbsp; &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mg/dL &nbsp; &nbsp;mmol/L &nbsp; U/L &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0739 &nbsp;163 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 202 &nbsp; &nbsp; &nbsp;5.3 &nbsp; &nbsp; &nbsp;9.5 &nbsp; &nbsp; &nbsp;3.6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 39 &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/11/21 0743 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;138 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/12/01 0740 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>***血液生化***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K &nbsp; &nbsp; &nbsp; &nbsp;Cl &nbsp; &nbsp; &nbsp; Total B &nbsp;Total P &nbsp;Albumin &nbsp;A/G Rat<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ilirubi &nbsp;rotein &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;io &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mmol/L &nbsp; mmol/L &nbsp; mg/dL &nbsp; &nbsp;g/dL &nbsp; &nbsp; g/dL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0739 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1.0 &nbsp; &nbsp; &nbsp;6.8 &nbsp; &nbsp; &nbsp;4.4 &nbsp; &nbsp; &nbsp;1.9 &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0743 &nbsp;3.5 &nbsp; &nbsp; &nbsp;101 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>***血液檢查***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CBC (08 &nbsp;WBC &nbsp; &nbsp; &nbsp;RBC &nbsp; &nbsp; &nbsp;Hb &nbsp; &nbsp; &nbsp; HCT &nbsp; &nbsp; &nbsp;MCV &nbsp; &nbsp; &nbsp;MCH &nbsp; &nbsp; &nbsp;MCHC &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;011) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10^3/uL &nbsp;10^6/uL &nbsp;g/dL &nbsp; &nbsp; % &nbsp; &nbsp; &nbsp; &nbsp;fL &nbsp; &nbsp; &nbsp; pg &nbsp; &nbsp; &nbsp; g/dL &nbsp;&nbsp;<br>&nbsp; 2023/11/21 0742 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4.68 &nbsp; &nbsp; 4.66 &nbsp; &nbsp; 15.8 &nbsp; &nbsp; 47.4 &nbsp; &nbsp; 101.7 &nbsp; &nbsp;33.9 &nbsp; &nbsp; 33.3 &nbsp;&nbsp;</p><p>***血液檢查***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PLT &nbsp; &nbsp; &nbsp;RDW-SD &nbsp; RDW-CV &nbsp; Differe &nbsp;Neutrop &nbsp;Lymphoc &nbsp;Monocyt &nbsp;Eosinop<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ntial C &nbsp;hil &nbsp; &nbsp; &nbsp;yte &nbsp; &nbsp; &nbsp;e &nbsp; &nbsp; &nbsp; &nbsp;hil &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10^3/uL &nbsp;fL &nbsp; &nbsp; &nbsp; % &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; % &nbsp; &nbsp; &nbsp; &nbsp;% &nbsp; &nbsp; &nbsp; &nbsp;% &nbsp; &nbsp; &nbsp; &nbsp;% &nbsp; &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0742 &nbsp;205 &nbsp; &nbsp; &nbsp;48.2 &nbsp; &nbsp; 13.0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;38.8 &nbsp; &nbsp; 49.4 &nbsp; &nbsp; 7.5 &nbsp; &nbsp; &nbsp;3.4 &nbsp; &nbsp;</p><p>***血液檢查***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Basophi &nbsp;IG% &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;l &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;% &nbsp; &nbsp; &nbsp; &nbsp;% &nbsp; &nbsp; &nbsp;<br>&nbsp; 2023/11/21 0742 &nbsp;0.9 &nbsp; &nbsp; &nbsp;0.2 &nbsp; &nbsp;</p><p>***毒藥物檢查***<br>&nbsp; 日期 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lithium &nbsp;Valproi &nbsp;Date Ti &nbsp;TDM Dat &nbsp;TDM Tim<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; c Acid &nbsp; me(TDM) &nbsp;e &nbsp; &nbsp; &nbsp; &nbsp;e &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;mmol/L &nbsp; ug/mL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/11/21 0820 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 64.82 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2023112 &nbsp;06:30 &nbsp;<br>&nbsp; 2023/12/01 0735 &nbsp;0.29 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br>&nbsp; 2023/12/01 0736 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 88.35 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2023120 &nbsp;06:30<br><br></p>';
                break;
            case 3: // impression
                iframe_in_div.innerHTML = '<p>F3164 C7A025&nbsp;<br>Bipolar I Disorder, recurrent, current manic episode<br></p>';
                break;
            case 4: // plan
                iframe_in_div.innerHTML = '<p lang="en-US">*Diagnostic plans:<br>-------------------------------------------------------------------------------<br>1.Diagnostic interview (45085B): Clarify symptoms presentation and longitudinal clinical course, and daily observe the symptoms progression after therapy in acute ward.<br>2.Collecting side information from the patient’s family.<br>3.Collecting his previous psychiatric and medical records if available.<br>4.Psychophysiological function examination (45046C)<br>5.Family supportive system evaluation<br>6.Safety issue: Suicide / violence risk evaluation<br>------------------------------------------------------------------------------------------<br>*Therapeutic plans:<br>-------------------------------------------------------------------------------<br>1.Psychopharmacological therapy<br>2.Supportive psychotherapy (45010C): listen, empathy, and reassurance.<br>3.Recreational therapy, occupational therapy (45095C, 45031C), and activity therapy (45022C).<br>------------------------------------------------------------------------------------------<br>*Educational plans:<br>-------------------------------------------------------------------------------<br>1.Psychoeducation regarding psychotropic drugs, clinical course and outcome to the patient himself and his family in detail.<br>2.Make the patient’s family appreciate reasonable anticipation.<br>3.Instruction of methods of crisis intervention and management of psychiatric problems of the patient.<br><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span></p>'
                break
            case 5: // discussion
                iframe_in_div.innerHTML = '<p>住院醫師王翊光:個案診斷為第一型雙相情緒障礙症,反覆有鬱症發作狀況,合併嚴重失眠,請問這樣的個案我們應該要如何使用藥物?<br>主治醫師黃三原:在雙相情感障礙症個案,鬱症的處理要特別小心,不能單純使用抗鬱劑來處理,因為可能會出現反彈性的躁症發作,你知道有哪些藥物可以考慮嗎?<br>住院醫師王翊光:在雙相情感障礙症個案,我們應該要以情緒穩定劑當作優先考慮,才能夠在不造成病情翻轉的前提下來治療病人。<br>主治醫師黃三原:你說得沒有錯,那有沒有情緒穩定劑以外的藥物給予方式呢?<br>住院醫師王翊光:那麼這個病人應該怎麼去調整藥物呢?<br>主治醫師黃三原:這個問題就要回到實證層面了,我們應該要參考已經發表的治療指引.<br>住院醫師王翊光:我們應該要參考哪些治療指引才適合呢?<br>主治醫師黃三原:APA, WSFBP都有相關的治療指引,而台灣精神醫學會也發表過了&lt;雙極性情感疾患 治療共識&gt;，提供我們一些治療時的依據<br>住院醫師王翊光:那我們依照這份治療指引,就可以做出作符合病人需要的決定嗎?<br>主治醫師黃三原:那就不一定了,你應該以病人的臨床需要為主,來做討論才決定;像這個病人就可以考慮要用一些可以幫助睡眠的藥物,譬如說Quetiapine,或者valproate.</p><p><br>主治醫師黃三原: bipolar depression 的病人相較於unipolar depression有什麼不同呢?<br>住院醫師王翊光: 雖然在criteria上和MDD一樣，不過在一些表現的特質上還有不太一樣的地方。相較於MDD，bipolar depression在onset上會比較快速，頻繁，而且更嚴重，病程更短，而且更常出現妄想，或是一些反向的症狀像是:嗜睡hypersomnia，嗜食hyperphagia。大概有15% bipolar depression的病人會自殺身亡，表示他的嚴重程度是比MDD更為嚴重和頻繁。</p><p>住院醫師王翊光: 那這樣請問學長治療bipolar depression相較unipolar depression治療上有什麼需要注意的地方呢?<br>主治醫師黃三原: 在一篇最大型metaanalysis的研究中，有發現幾種藥物是在治療的療效上等級比較高，包括olanzapine+fluoxetine，lurasidone，olanzapine，valproate，quetiapine等。SSRI的使用要非常小心且研究有一些爭議性的結果，若真的使用也必須配合mood stablizer以防情緒翻轉的可能性。</p><p>主治醫師黃三原：何謂躁鬱症？&nbsp;<br>住院醫師王翊光：每個人都會有情緒的起伏，快樂、悲傷、生氣都是正常會有的情緒反應，也是每天生活的一 &nbsp;部分。然而，躁鬱症是一種使人的情緒高低起伏變化失去控制的一種疾病。這些情緒起伏會影響一個人的思考、感覺、行為、身體健康及日常生活功能表現。有些人以為得這種病，是一件相當丟臉的事情，似乎是病人的罪過。但基本上，罹患躁鬱症並不是誰的錯，也不是虛弱或不穩定人格的結果。它就和一般人會得的糖尿病高血壓一樣，是一種生理上的疾病，而且是可以治療的一 &nbsp;種病。&nbsp;<br>主治醫師黃三原問：躁鬱症何時會發生？&nbsp;<br>住院醫師王翊光：躁鬱症通常在青少年或成年早期第一次發作，有時在兒童初期或晚至四、五十歲發生；但是如果一個人超過五十歲才第一次發生躁鬱症的話，則必須考慮是否為其他身體疾病問題造成的， 例如神經科問題或是藥物、酒精所引起的。&nbsp;<br>主治醫師黃三原問：為什麼必須及早診斷躁鬱症？&nbsp;<br>住院醫師王翊光：早期診斷、適當治療可以避免患者出現下列的情況： 自殺：在患病的初期自殺的危險性最高。酒精及藥物濫用：超過半數以上的躁鬱症患者在生病期間會有藥物濫用或酒精濫用的情況。婚姻及工作問題：立即的治療可以改善婚姻的穩定及工作的生產性。治療困難：有證據顯示病人的發作次數愈多，下一次發作的治療愈困難、發作的頻率也會愈高。<br>主治醫師黃三原問：躁鬱症會遺傳嗎？&nbsp;<br>住院醫師王翊光：研究發現有些遺傳基因可能與躁鬱症的發病有關，就好像一些生理疾病如關節炎一樣，與遺傳有關。然而如果你有躁鬱症而你的伴侶沒有，則小孩子得病的機會大約是七分之一；如果家中患躁鬱症或憂鬱症的人愈多，則小孩得病的機會也就愈高。&nbsp;<br>主治醫師黃三原問：什麼原因會引起躁鬱症？&nbsp;<br>住院醫師王翊光：沒有單一的原因造成躁鬱症，但是許多研究顯示它可能是一種體質的問題，它與大腦的神經傳導物質缺乏穩定性有關。這樣的生化異常使得躁鬱症患者很容易受到情緒或外來壓力的影響，如果生活上不如意、使用刺激性藥物、缺乏睡眠或過度刺激，腦部迅速恢復平靜的功能就無法適當的運作。這種先天體質與環境刺激相互作用的理論與許多內科疾病的理論相似。<br><br></p>'
                break
            case 6: // ethics
                iframe_in_div.innerHTML = '<p>主治醫師黃三原：你說說看會談時有什麼可能會影響個案的會談意願，或者會談時需要注意的狀況？<br>住院醫師王翊光：會談時應隨時注意個案陳述時的情緒反應，並適時給予回饋，或者情緒支持。個案關注的議題或者身體狀況，可能代表了其他重要的器質性問題。在會談時應注意個案的隱私及意願，但若可能有激躁或者攻擊行為，應有人作為陪同或戒護。</p><p>主治醫師黃三原：會談過程中，個人的文化背景會有什麼影響呢？<br>住院醫師王翊光：個案的發展過程中獲得的經驗，會成為個案對外在刺激思考以及行為的參考，並形成特定的模式。在診斷過程中，不論是語言、文化背景，或者小時候與父母同儕相處的經驗，都會影響個案的思考及行為。因此在決定診斷的時候，也需要注意上述資訊，避免將在文化脈絡中合宜的行為或思考當作症狀。</p><p>主治醫師黃三原：與治療關係中的被治療者互動時，有什麼要注意的呢？<br>住院醫師王翊光：在治療關係中，須給予個案足夠的同理，以建立治療同盟，以期運用此同盟關係，能達到一定的心理治療效果，或醫囑遵行比例。然而同理的時候也需要注意不應該盲目同意病人的想法，或者武斷地幫病人下定論、給與褒貶，應該掌握一定的界線，並且讓個案在安全的氛圍中認同現實界線。</p><p>主治醫師黃三原：什麼叫做治療的界線呢？<br>住院醫師王翊光：治療界線的定義，是為了在治療關係中的雙方，可以專注在治療關係上而設定的人際關係規範，應儘限於治療者-個案間關係，逾越或併行的關係都可能造成個案的最佳利益損失。治療的界線包括了性與非性(交易、概念、社交)的人際關係、失信(治療資訊洩漏)、不良治療、非法活動(保險、罰款、內線交易)。</p><p>主治醫師黃三原：什麼時候我們可以執行強制住院呢？<br>住院醫師王翊光：依照精神衛生法第41條，嚴重病人(依精神衛生法第3條：四、嚴重病人：指病人呈現出與現實脫節之怪異思想及奇特行為，致不能處理自己事務，經專科醫師診斷認定者)傷害他人或自己，或有傷害之虞，經二位(離島為一位)專科醫師診斷，有全日住院治療之必要者。</p><p>主治醫師黃三原：什麼時候我們可以執行強制社區治療呢？<br>住院醫師王翊光：依照精神衛生法第45條，嚴重病人(依精神衛生法第3條：四、嚴重病人：指病人呈現出與現實脫節之怪異思想及奇特行為，致不能處理自己事務，經專科醫師診斷認定者)不遵醫囑，致其病情不穩，或生活功能有退化之虞，經專科醫師診斷有接受社區治療之必要。<br><br></p>'
                break
            case 7: // 5-all
                iframe_in_div.innerHTML = '<p>在診療過程中以病患為中心，針對其</p><p>[五全]</p><p>全人: 照顧患者住院過程中的不適，以期恢復其生理所能負荷之最佳狀態，並能在住院期間盡量不造成負擔。並且支持病患住院期間的心理狀態。</p><p>全家: 妥善與患者家屬溝通，清楚說明病況，並適時關心其家屬心理狀態。</p><p>全程: 完整制定相關住院診療計畫,預期可能疾病發展,並滾動式調整治療的過程與後續追蹤。</p><p>全隊: 整合醫師(婦產科，新陳代謝科)、護理師、藥師、(社工及志工)一同協助調整住院過程中藥物劑量及選擇, 幫助病患藥物的副作用最小化,另外透過護理師協助衛教(包含按摩,翻身等)減輕住院期間臥床之不適,並且提供新陳代謝相關諮詢,讓病患在各個住院過程中可以理解可能狀況。</p><p>全社區: 妥善安排出院之後的門診追蹤與計畫。</p><p>[四面向]</p><p>生理: 妥善照顧患者住院過程中之身體不適。</p><p>心理: 適時關心病患及家屬心理狀態，並給予適當的協助,幫助其產程進展。</p><p>靈性: 適時關心病患及家屬心靈支持，如有特殊宗教,也安排宗教師前來並給予適切的協助。</p><p>社會: 關心家屬的社福需求，適時連絡相關單位，提供資源與協助。</p><p>[三要素]</p><p>知識: 從患者病情與影像、實驗室數據綜合分析，制定出合適的治療方針。</p><p>態度: 謹慎看待患者病況，並適時調整治療計畫，同時與團隊及家屬完善溝通。</p><p>技能: 培養應具備之臨床技能，以提供改善病情之協助。</p><p>另外提供包括生理、心理、社會及靈性各方面需要的醫療照護</p><p>B生理</p><p>急性病況(說明目前主要或緊急的病情): 住院接受必要性DST檢測</p><p>慢性病況(說明慢性/穩定的疾病且對情緒或身體功能有影響者):檢查皆正常</p><p>認知功能(意識/認知功能狀態；是否可以理解病情；是否可以做決定):認知功能正常,可理解DST檢測之必要性</p><p>身體功能(正常)</p><p>P心理</p><p>情緒(說明病人目前情緒狀態、對於目前病況的因應策略，是否影響治療或預後): 病房護理人員多加關心其心緒,避免引起可能生產風險; 病人情緒穩定可理解住院檢查之必要</p><p>心理支持(說明家人/朋友的支持系統):家人及朋友皆支持病人之心理狀態且支持其決定。</p><p>Sc社會</p><p>家庭關係：主要照護者(丈夫)、病人與其相處融洽，其意見病人也會聽取並討論。</p><p>經濟狀態：經濟狀況小康,願意配合治療。</p><p>Sp靈性</p><p>宗教信仰：佛教</p><p>E病人/家屬期望</p><p>病人希望能減緩待產不適症狀, 對於治療方法的偏好可以接受催生藥物的副作用。</p><p>P團隊治療計畫(目前治療計畫、預期改善、出院時機): 產後狀況穩定。</p><p>D出院規劃<br><br></p>'
                break
            default:
                console.log(`Unhandled iframe at index ${index}`);
        }
    })

}, 1500)

