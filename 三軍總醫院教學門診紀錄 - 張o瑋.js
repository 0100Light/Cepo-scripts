// ==UserScript==
// @name        三軍總醫院教學門診紀錄 - 張o瑋
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

patient_name.value = '張芸瑋'
patient_chart_number.value = '8003041'
chief_complaint.value = 'low mood, anxious, episodic irritable/ depressed mood, suspicious, atypical auditory hallucination, suspicious, hand tremor and URI symptoms in this two weeks\n'

present_illness.value = 'The patient, a 63-year-old man, had relatively good role function and good interpersonal relationship in the past. Binge alcohol drinking developed since young age then quitted on 37 y/o due to marrage. However, recent memory impairment, general tremor and mid-night involuntary movement developed after traffic accident since 48 y/o. No significant abnormality was noted on TRODAT, MRI and EEG examination in Neurology OPD. Exacerbation with PK merz but improved with B.H.L and Madopar tx. He then quitted the job on 2012. Recurrent admission due to UTI with disorganized and agressive behavior, visual and auditory hallucination were noted since 53 y/o on 2015 with impression of suspected Munchausen syndrome(Facticious disorder, 曾兩次於住院時戳破點滴破壞管路、在IV中加東西加尿液) and unspecified psychosis. He visited TSGH psychiatric outpatient for help. Depressive disorder was suggested. However, his depressive symptoms improved a little.\n' +
    '\n' +
    'He had the first depressive episode at the age of 54. The patient had life stress as father\'s death. He then developed depressed mood, loss of interest, insomnia, poor appetite, negative thought, fatigue, poor concentration, auditory and visual hallucination, delusion of being monitor. He kept visiting TSGH psychiatric outpatient for help. However, his depressed mood, insomnia, negative thought, auditory hallucination, visual hallucination, delusion of being monitor progressed for recent two months. Thus, he went to our outpatient and admission for further management diring 2017/04/27 to 2017/06/05.\n' +
    '\n' +
    'After last psychiatric acute ward discharge on 2021/3/16, he he had regular OPD follow up and had good drug compliance. He was hospitalized at chest ward for his wheezzing on 2021/9/8-9/15. He stated his depressed mood, irritability, anhedonia, suicide ideation, auditory hallucination, visual hallucination(聽到看到有人要害他，有很多人吵鬧聲音等), violent thought(表示要不是有終身俸和堅強意志力，就要攻擊他看到的害他的人)for weeks. 個案該次出院後，返家與太太同住，可規則返診服藥，這幾週以來仍有莫名情緒低落、憂鬱、落淚、自我照顧能力減退，幻聽幻覺(聽到看到有人要害他，有很多人吵鬧聲音等)，全身抖很利害，失眠，無助無望感，負面思考，經張傳佳醫師評估後，於2021/10/25收住院治療。最近一次於本院住院為民國110年10月25日至110年11月25日，出院後至國軍北投醫院持續治療至111年1月9日出院，出院後返家與太太同住，可規則返診及服藥，此次入院妻子表示近一周病人開始一直聽到有人叫他名子，還會叫他去死影響其情緒及日常生活，因此於張傳佳醫師評估過後安排於2022/02/06-2022/03/08收療入院。\n' +
    '\n' +
    '2024/10/4-11/10 住院，個案自述出院後可維持規則門診追蹤及服藥，然出院後仍有煩躁、手抖、suspected auditory hallucination.、近五天有上呼吸道症狀，經門診評估後於2024/12/21收療入院治療。\n'

history.value = '*Past history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. Medical History:\n' +
    '*. Carpal tunnel syndrome\n' +
    '*. Microcytic anemia\n' +
    '*. Repeated infection and sepsis syndrome of left upper limb and pyomyositis in the deltoid with E.coli, Stenotroph. altophil, Enterococcus faecium bacteremia in sepsis syndrome s/p CT guide drainage under controlled with antibiotics\n' +
    '*. Chronic obstructive pulmoanry disease\n' +
    '*. Tremor of limbs, suspected Parkinson’s disease or essential tremor\n' +
    '*. Hypoalbuminemia\n' +
    '*. History of urinary tract infection with repeated sepsis, caused by Enterococcus faecium infection.\n' +
    '*. History of repeated bateremia, caused by Enterococcus faecium, Acineto. baumannii, Candida tropicalis, Klebsiella pneumoniae, Escherichia coli, and Klebsiella pneumoniae infection.\n' +
    '*. History of acute epididymoorchitis, right.\n' +
    '*. History of chronic otitis media, bilateral\n' +
    '*.Atrial fibrillation with RVR and atrial flutter\n' +
    '*.Suspect hemangioma or focal fatty deposition in segment 7 of the liver (about 1.1 cm).\n' +
    '*.Chronic otitis media, bilateral, improving.\n' +
    '*.Gastroesophageal reflux disease, Los Angeles Grade A\n' +
    '*.Gastric submucosal lesion, cause to be determined\n' +
    '*.Hepatic cysts in both liver lobes (maximal: 1.8 cm in S6).\n' +
    '*.History of acute epididymoorchitis, right.\n' +
    '*. Gastric ulcer\n' +
    '\n' +
    '2. Surgical History:\n' +
    '*.Abscess formation, left abdomen s/p Debridement on 20170606, 0608, 0615\n' +
    '*.Necrotizing fasciitis with abscess formation over left lower quadrant abdominal wall s/p Fasciotomy + Debridement on 20170718, debridement on 20170720, 20170727\n' +
    '*.Abscess formation over left upper arm s/p debridement 20171023, 1026, 1101,1109,1116,1130,1207.\n' +
    '*.Cellulitis of left leg s/p op with poor healing wound.\n' +
    '*. Pyomyositis over rectus muscle with sepsis, Bacteroides ovatus related, s/p\n' +
    'drainage on 2016/12/12 and debridement on 2017/1/5, 2017/1/12, 2017/1/16, 2017/06/06,\n' +
    '*. Degenerative spondylolisthesis, L4 on L5, Grade I; herniated intervertebral disc, L4-5 with bilateral radiculopathy (L>R), s/p Reopened extended laminofacetectomies, right L4; discectomy and interbody fusion with dual cages (PEEK, Baui), L3-4, L4-5; IF with TPS, L3-4-5 (NOVA, Baui); implantation of IPD (Rocker, Paonan), L3-4 (Microscope-assisted) on 2023/10/04\n' +
    '\n' +
    '3. History of head trauma: recent memory impairment, general tremor and mid-night involuntary movement developed after traffic accident since 48 y/o.\n' +
    '4. History of epilepsy: denied\n' +
    '5. History of substance abuse: denied\n' +
    '6. Allergy history: No known drug or food allergy\n' +
    '7. Traveling history: nil\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Personal history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. Perinatal: Normal Spontaneous Delivery without birth trauma, any complications\n' +
    '2. Childhood: no developmental delay or defects\n' +
    '3. School: fair performance\n' +
    '4. Social: fair interpersonal relationship\n' +
    '5. Occupation: fair performance\n' +
    '6. Premorbid personality: extroverted\n' +
    '7. Smoking: Denied\n' +
    '8. Drinking: Denied\n' +
    '9. Marital state: married\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Family history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. History of family psychotic disorder or substance abuse : denied\n' +
    '2. Family relationship: fair\n' +
    '3. Family pedigree sees detail in admission progress note\n'


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
                iframe_in_div.innerHTML = '<p>pending</p>';
                break;
            case 3: // impression
                iframe_in_div.innerHTML = '<p>F331$<br>1. Major depressive disorder with psychotic feature, relapsed episode<br>2. Suspected separation anxiety disorder<br>3. Suspect psychotic disorder due to traumatic brain injury<br>4. Suspect facticious disorder<br>5. Suspect mild neurocognitive disorder due to traumatic brain injury<br>6. Degenerative spondylolisthesis, L4 on L5, Grade I; herniated intervertebral disc, L4-5 with bilateral radiculopathy (L&gt;R)<br></p>';
                break;
            case 4: // plan
                iframe_in_div.innerHTML = '<p lang="en-US">*Diagnostic plans:<br>-------------------------------------------------------------------------------<br>1.Diagnostic interview (45085B): Clarify symptoms presentation and longitudinal clinical course, and daily observe the symptoms progression after therapy in acute ward.<br>2.Collecting side information from the patient’s family.<br>3.Collecting his previous psychiatric and medical records if available.<br>4.Psychophysiological function examination (45046C)<br>5.Family supportive system evaluation<br>6.Safety issue: Suicide / violence risk evaluation<br>------------------------------------------------------------------------------------------<br>*Therapeutic plans:<br>-------------------------------------------------------------------------------<br>1.Psychopharmacological therapy<br>2.Supportive psychotherapy (45010C): listen, empathy, and reassurance.<br>3.Recreational therapy, occupational therapy (45095C, 45031C), and activity therapy (45022C).<br>------------------------------------------------------------------------------------------<br>*Educational plans:<br>-------------------------------------------------------------------------------<br>1.Psychoeducation regarding psychotropic drugs, clinical course and outcome to the patient himself and his family in detail.<br>2.Make the patient’s family appreciate reasonable anticipation.<br>3.Instruction of methods of crisis intervention and management of psychiatric problems of the patient.<br><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span></p>'
                break
            case 5: // discussion
                iframe_in_div.innerHTML = '<p>住院醫師王翊光: 應該要如何開啟和有焦慮、憂鬱個案的會談呢?<br>主治醫師黃三原:鬱症的個案,要開啟會談,要先能夠理解鬱症個案對憂鬱症狀的體驗,你說說看鬱症的個案會有甚麼典型的主觀感覺?<br>住院醫師王翊光:鬱症的個案會在生理、心理、人際、團體,以及意義等五個層面上有主觀感覺。生理系統上會有失眠,動作緩慢,沉重感受等等表現,並且會有動力(如食欲性慾)減低的狀況;同時也會有憂鬱感受的外歸因,因而感到身體與情感失去控制(ossification)。<br>主治醫師黃三原:對的,而在心理系統,個案對於時間和空間的改變會變得遲鈍麻木,因而有"blocking of the future"或行為孤立的表現;同時也會有意念的侷限化,而反覆詢問同樣問題;過度著重在負面現象,並且誇大著重;有時候也會出現「負向觀點=&gt;負面自我觀感=&gt;未來悲觀」的負向循環,讓鬱症症狀愈滾愈大;而邏輯豁免的狀況則是會讓上述的症狀都陷入泥淖,無法自拔.</p><p>住院醫師王翊光:書上也有提到認知內容常常會有四個主題,分別是孤獨感,自我貶抑,無助感,無望感;這些認知內容是不是也跟自殺意念有相關呢?<br>主治醫師黃三原:你說得沒錯,憂鬱個案會過度著重在孤獨,而甚至疏遠自己進而發展出自我貶抑,也無法相信自己可能得到幫助,最後否定所有可能;這些狀況就會以自殺意念或者自殺嘗試做為表現被觀察到.所以第一次會談時,適度的去詢問這些感受,並且利用參考的門徑,來詢問個案關於自殺的想法,其實不失為一個好的方法.<br>住院醫師王翊光:謝謝老師,另外我注意到DSM-5裡面特別註記中,「具有焦慮特質」這樣的註記底下,有提到自殺風險較高這件事,我想問這是不是一個獨立的自殺風險因子呢?或者伴隨憂鬱造成的無助無望感才是?<br>主治醫師黃三原:焦慮本身就是一個自殺風險因子,回顧強迫症個案,其自殺率,就算在無共病情緒疾患的狀況下,也較一般人為高; 所以在會談開啟時,嘗試接觸個案的焦慮也是很好的嘗試,常常可以發現個案的核心痛苦,壓力源,或者相關症狀.</p><p>主治醫師黃三原：你說說看一般治療憂鬱症下，有什麼樣的原則呢？<br>住院醫師王翊光：如果依照NICE guideline主要有下列幾點：<br>1.&nbsp;&nbsp; &nbsp;若憂鬱症狀輕微，抗憂鬱劑不應該做為第一線的治療，而是以一些心理衛教，自助技巧，CBT，運動等作為建議和治療。而中等至嚴重程度的憂鬱症狀，才考慮使用藥物。<br>2.&nbsp;&nbsp; &nbsp;SSRI被建議使用，而且病人都要被衛教自行停藥的話，可能會有戒除的症狀會發生。<br>3.&nbsp;&nbsp; &nbsp;對於治療反應不好的病人，可以考慮augmentation，可以使用lithium, antipsychotic,或第二種antidepressant<br>4.&nbsp;&nbsp; &nbsp;若先前有兩次episode合併功能減退，應該至少治療超過兩年。<br>5.&nbsp;&nbsp; &nbsp;對於嚴重和治療反應不好的憂鬱症，可考慮使用ECT。</p><p>主治醫師黃三原:我們應該要怎麼選擇抗憂鬱藥物呢?<br>住院醫師王翊光: SSRI比較建議作為第一線的使用藥物，主要是來自一篇network metaanalysis報告說雖然有一些藥物整體治療上療效比較好，但是在head-to-head的比較上卻沒有呈現一致的結果。而且不同藥物的副作用會不太一樣。通常SSRI會有頭痛，GI upset的副作用。以及性功能障礙，低血鈉，甚至 GI bleeding的可能性。至於治療的長度，如果只有single episode一般來說建議復原後至少再治療6~9個月。如果超過一次episode，則必須治療超過兩年。<br><br></p>'
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

