// ==UserScript==
// @name        三軍總醫院教學門診紀錄 - 鄭o銘
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

patient_name.value = '鄭友銘'
patient_chart_number.value = '1553355'
chief_complaint.value = 'More unstable mood, body weight loss, dysphoria, depression, restlessness, unsatble mood and insomnia for one month'

present_illness.value = '個案為52歲離婚男性，自小個性外向，人際關係佳，與父母兄姊相處佳。國小成績中下，與師長同學相處尚可；國中成績中下，就讀期間曾因打架、抽菸、翹課，被記數個小過大過，尚可順利畢業。16歲國中畢業，因對學業沒興趣未繼續升學，開始從事汽車烤漆工作。18歲與交往半年的女友結婚，婚後育有一女，相處尚可。20~22歲入伍，於陸軍單位服役，與長官同袍相處尚可。退伍後約22歲妻子要求離婚，原因未詢問，女兒由病患、案母、案姊，一同撫養照顧。約22歲時在朋友介紹下開始注射海洛因及使用安非他命。只要有錢就會注射海洛因，每天花費1000元，可注射2~3次；安非他命，用火燒吸飄出來的煙，量及頻次不記得。22歲後因使用海洛因無法繼續工作，情緒低落憂鬱、用美工刀割腕數次、負面思考、罪惡感，未曾至精神科就醫。22歲迄今因使用毒品入監服刑8次，每次約2~3年，每次出獄最久可7個月不使用毒品，每次再用均因朋友誘惑使用，故出獄不到一年就又被抓再入監服刑。入監時會有持續10天戒斷症狀，如打噴嚏、流鼻水、盜汗、全身痠痛不適、難入睡，服刑中所方會提供口服藥治療，不記得藥名，出獄後未再治療。33~34歲西元2006~2007年時，曾自行至松德醫院美沙冬治療十個月，期間仍會持續注射海洛因，故又被抓入監服刑，最後一次使用安非他命及入監服刑為43歲，西元2015年10月6日，於45歲西元2018年6月4日假釋出獄。出獄後與母親同住，從事粗工工作。46歲西元2018年6月時，朋友誘惑下開始注射海洛因。2018年夏天，因對使用毒品感到痛苦，從彩虹橋上往下跳，被哥哥救起，未就醫。此次近五個月情緒焦慮、每日注射海洛因約一到二次(最後一次注射海洛因為2019/4/16早上)、社交退縮、負面思考、無助感、罪惡感，西元2019年3月14日開始至本院美沙冬門診治療，因症狀仍未改善至本院精神科門診，經評估後建議住院治療。\n' +
    '2023/10/12: 個案表示，最近一次入獄服刑兩年10個月，於2022年1月14日出獄，出獄後與哥哥同住，先後從事粗工、淺頓工作約一年，自訴工作能力尚可，現離職無業在家，今年4月因Chronic hepatitis C於本院腸胃科治療，幾個月前因煩躁而開始注射海洛因(自訴時間不清楚、來源為朋友提供)，每天使用注射0.5單位，最近一次使用為昨天早上(10/11)，10/12至黃三原醫師門診希望可以戒除毒癮，故經醫師收入院治療。住院期間有接受rTMS治療，自述對毒品成癮有改善。\n' +
    '2024/07/31-2024/08/28: 個案最後一次住院時間為2023/10/12-2023/10/31，出院後有定期回門診追蹤及服藥。個案與哥哥同住(住上下層樓)，多從事臨時工的工作(工地粗工、油漆等)，自訴工作能力尚可，上個月離職後便無業在家，因煩躁而開始注射海洛因、吸食安非他命，最後一次使用毒品時間為2024/07/31早上(在家注射海洛因)。個案表示在家食慾尚可，但體重下降許多(不確定幾公斤，但哥哥有注意到明顯變瘦)，伴隨情緒低落、煩躁、坐立不安、失眠等症狀，個案擔心自己會猝死，在哥哥陪同下來至黃三原醫師門診，希望可以戒除毒癮，經主治醫師評估後收入院治療。\n' +
    '2024/09/03:個案上次住院期間成癮症狀有些微改善，但出院後不悅、煩躁症狀持續，不停擔心身體狀況(C肝相關)。因症狀持續，經門診評估以自費入院治療。'

history.value = '*Past history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. Medical History : Hepatitis C virus carrier\n' +
    '2. Surgical History : denied\n' +
    '3. History of head trauma : denied\n' +
    '4. History of epilepsy : denied\n' +
    '5. History of substance abuse : amphetamine :22~43 year-old; heroin injection:22~ until now, last time 2019/4/16\n' +
    '6. Allergy or adverse reaction to drugs or food: denied\n' +
    '7. Traveling history: nil\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Personal history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. Perinatal: normal spontaneous delivery without birth trauma or any complications.\n' +
    '2. Childhood: no developmental delay or defects.\n' +
    '3. School: poor academic achievement in the elementary school and senior high school (國中畢業).\n' +
    '4. Social: fair\n' +
    '5. Occupation: worker\n' +
    '6. Premorbid personality: extroverted\n' +
    '7. Smoking : 1 pack per day since 16 year-old.\n' +
    '8. Drinking : social drinking beer 330~660 cc/time, since 20 year-old\n' +
    '9. Marital state: divorced\n' +
    '10.Religion: 佛教\n' +
    '------------------------------------------------------------------------------------------\n' +
    '*Family history:\n' +
    '-------------------------------------------------------------------------------\n' +
    '1. History of family psychotic disorder or substance abuse : denied\n' +
    '2. Family relationship: fair\n' +
    '3.Pedigree: see as admission progress note.\n'


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
                iframe_in_div.innerHTML = '<p>pending</p><p>*****檢查日期:20240823    檢查項目:CHEST, P-A VIEW*****\n' +
                    'Imaging findings :\n' +
                    '. Tortuosity and mild atherosclerosis of the aorta. \n' +
                    '. Spondylosis and degenerative joint disease of the lumbar spine \n' +
                    'with marginal osteophytes formation. \n' +
                    '. Increased interstitial markings of bilateral lung fields. \n' +
                    '. Otherwise, there is no significant abnormality of the current \n' +
                    'radiograph. (Note that small occult lesions might be missed on \n' +
                    'plain radiography, please correlate with CT if clinically \n' +
                    'necessary.)</p>';
                break;
            case 3: // impression
                iframe_in_div.innerHTML = '<p>F328&nbsp;<br>. Mood disorder may be due to illicit drug induced&nbsp;<br>. Illegal drug use disorder ( Methamphetamine and heroin)<br>. Highly suspected personality disorder&nbsp;<br>. Chronic HCV infection.<br>. Resolved HBV infection.<br>. Hx of Syphilis infection s/p treatment</p>';
                break;
            case 4: // plan
                iframe_in_div.innerHTML = '<p lang="en-US">*Diagnostic plans:<br>-------------------------------------------------------------------------------<br>1.Diagnostic interview (45085B): Clarify symptoms presentation and longitudinal clinical course, and daily observe the symptoms progression after therapy in acute ward.<br>2.Collecting side information from the patient’s family.<br>3.Collecting his previous psychiatric and medical records if available.<br>4.Psychophysiological function examination (45046C)<br>5.Family supportive system evaluation<br>6.Safety issue: Suicide / violence risk evaluation<br>------------------------------------------------------------------------------------------<br>*Therapeutic plans:<br>-------------------------------------------------------------------------------<br>1.Psychopharmacological therapy<br>2.Supportive psychotherapy (45010C): listen, empathy, and reassurance.<br>3.Recreational therapy, occupational therapy (45095C, 45031C), and activity therapy (45022C).<br>------------------------------------------------------------------------------------------<br>*Educational plans:<br>-------------------------------------------------------------------------------<br>1.Psychoeducation regarding psychotropic drugs, clinical course and outcome to the patient himself and his family in detail.<br>2.Make the patient’s family appreciate reasonable anticipation.<br>3.Instruction of methods of crisis intervention and management of psychiatric problems of the patient.<br><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span><span style="font-size:11.0pt"><span style="font-family:Calibri"></span></span></p>'
                break
            case 5: // discussion
                iframe_in_div.innerHTML = '<p>主治醫師黃三原：什麼是藥物濫用?<br>住院醫師王翊光：依濫用程度的同可區分為以下兩種情形：<br>濫用：爲了滿足自己的需要，明明知道用藥會產生一些不良的反應，而致傷害個人健康、社會功能或職業適應，甚至危害社會，依然過度使用該藥物。<br>成癮：爲了獲取某種藥物帶來的精神效果，或為了避免沒有服藥時產生的不舒服，而必須強迫自己繼續使用該藥物，即使明知到會傷害個人或社會也控制不了。<br>原因<br>（1）生物性因素：包括個人體質和遺傳因素在內，使病人特別容易去使用藥物，或造成藥物成癮。<br>（2）心理因素：憂鬱、焦慮的情緒、不穩定的人格特質，或病人患有某些精神疾病，如反社會人格者及憂鬱症，都可能促成藥物成癮。<br>（3）社會文化因素：暴力或破碎的家庭、好奇心的驅使及朋友的蠱惑、幫派的脅迫或引誘，及毒品的容不容易取得，也間接造成藥物的濫用。<br><br></p><p>主治醫師黃三原：你知道非法藥物或毒物，可以分成哪些種類嘛？而它們各自又有什麼不同的作用呢？<br>住院醫師王翊光：<br>（1）安非他命類<br>為白色無味結晶體的中樞神經興奮劑，使用後會有情緒高昂、欣快、誇大、好辯、不安、過度敏感、血壓上升、心跳加快、瞳孔放大、失眠、多尿、腸胃不適、精神活動激動。長期過量使用而產生幻覺、譫妄及妄想（以被害妄想最常見，症狀類似妄想型精神分裂症）。戒斷的時候感覺疲倦、睡眠障礙、多夢、憂鬱、注意力無法集中、坐立不安、頭痛、嗜睡、有崩潰感，因而會有自殺的行為發生。<br>（2）鴉片製劑：例如嗎啡（Morphine）、海洛英（heroin）<br>此類藥物具耐藥性，成癮性強，易造成生理及心裡上的依賴，使用後會產生耐痛、嗜睡、欣快的反應，中毒時情緒從欣慰感變成表情淡漠，不愉快、思考動作變慢、瞳孔縮小、嗜睡、口齒不清、注意力不集中、記憶力障礙等。.更嚴重時變成昏迷、瞳孔像針孔、呼吸抑制。<br>（3）大麻<br>&nbsp;一般都以抽煙的方式。使用後會有欣慰感、夢境狀態、心理平衡及嗜睡現象。中毒時會出現欣慰感、坐立不安、焦慮、多疑或被害妄想、判斷力差、時間過的很慢的感覺與退縮等。長期使用大麻後，有時會產生無動機症候群，患者不願上學、工作或任何須集中注意力的事，變的面無表情、沒有幹勁、生活懶散、體重增加。有些患者使用大麻煙後出現被害妄想症狀，稱為大麻妄想症。<br>（4）鎮靜劑與安眠藥：包含抗焦慮劑、Valium。<br>此類藥物主要症狀有動作慢且不協調、思考困難、記憶喪失、說話慢、不 安、性衝動、攻擊暴力行為等，偶有被害妄想、自殺。神經系統障礙有眼球震顫、複視、斜視、步態不穩、小腦功能障礙。嚴重時則昏迷、呼吸抑制、死亡。<br><br></p>'
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

