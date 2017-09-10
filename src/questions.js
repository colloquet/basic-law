const questions = [
  {
    text: '香港特別行政區境內的土地和自然資源是屬於 _____ 所有。',
    answers: [
      {
        text: '中華人民共和國',
        correct: true,
      },
      {
        text: '香港特別行政區政府',
        correct: false,
      },
      {
        text: '中華人民共和國和香港特別行政區',
        correct: false,
      },
      {
        text: '中華人民共和國和英國',
        correct: false,
      },
    ],
  },
  {
    text: '以下哪項權利和自由不是《基本法》規定香港居民所享有的？',
    answers: [
      {
        text: '在法律面前一律平等',
        correct: false,
      },
      {
        text: '人身自由不受侵犯',
        correct: false,
      },
      {
        text: '和平發展的權利',
        correct: true,
      },
      {
        text: '信仰的自由',
        correct: false,
      },
    ],
  },
  {
    text: '根據《基本法》第十四條，駐軍的費用由__________ 。',
    answers: [
      {
        text: '香港特別行政區負擔',
        correct: false,
      },
      {
        text: '中央人民政府負擔',
        correct: true,
      },
      {
        text: '中央人民政府及香港特別行政區各分擔一半',
        correct: false,
      },
      {
        text: '中央人民政府負擔百分之九十，其餘由香港特別行政區負擔',
        correct: false,
      },
    ],
  },
  {
    text: '根據《基本法》第一百零八條，香港特別行政區立法規定稅種、稅率、稅收 寬免和其他稅務事項時，是參照原在香港實行的哪一項稅務政策？',
    answers: [
      {
        text: '簡單稅制',
        correct: false,
      },
      {
        text: '公平稅制',
        correct: false,
      },
      {
        text: '低稅政策',
        correct: true,
      },
      {
        text: '高稅政策',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區最高級的法庭是哪一個法庭？',
    answers: [
      {
        text: '香港特別行政區上訴法庭',
        correct: false,
      },
      {
        text: '香港特別行政區終審法院',
        correct: true,
      },
      {
        text: '中華人民共和國最高人民法院',
        correct: false,
      },
      {
        text: '中華人民共和國全國人民代表大會常務委員會',
        correct: false,
      },
    ],
  },
  {
    text: '以下哪項事務不屬中央人民政府負責管理？',
    answers: [
      {
        text: '與香港特別行政區有關的外交事務',
        correct: false,
      },
      {
        text: '香港特別行政區的社會治安',
        correct: true,
      },
      {
        text: '香港特別行政區的防務',
        correct: false,
      },
      {
        text: '任命香港特別行政區行政長官和行政機關的主要官員',
        correct: false,
      },
    ],
  },
  {
    text: '根據《基本法》第十一條，香港特別行政區立法機關制定的任何法律，均不得與__________相抵觸。',
    answers: [
      {
        text: '《中華人民共和國憲法》',
        correct: false,
      },
      {
        text: '《基本法》',
        correct: true,
      },
      {
        text: '《中華人民共和國憲法》及《基本法》',
        correct: false,
      },
      {
        text: '中英兩國政府關於香港問題的聯合聲明',
        correct: false,
      },
    ],
  },
  {
    text: '根據《基本法》第一百五十二條，香港特別行政區可以用甚麼名義參加不以 國家為單位參加的國際組織和國際會議？',
    answers: [
      {
        text: '中國',
        correct: false,
      },
      {
        text: '香港特別行政區',
        correct: false,
      },
      {
        text: '中國香港',
        correct: true,
      },
      {
        text: '香港',
        correct: false,
      },
    ],
  },
  {
    text: '《基本法》是根據國家哪一個方針制定的？',
    answers: [
      {
        text: '一個國家，兩種制度',
        correct: true,
      },
      {
        text: '一個國家，多種制度',
        correct: false,
      },
      {
        text: '一個國家，一種制度',
        correct: false,
      },
      {
        text: '一個國家，兩種思想',
        correct: false,
      },
    ],
  },
  {
    text: '根據《基本法》第一百條，香港特別行政區成立前在香港政府各部門任職的 公務人員均可留用，其年資予以保留，薪金、津貼、福利待遇和服務條件__________。',
    answers: [
      {
        text: '不低於市場標準',
        correct: false,
      },
      {
        text: '不低於國家標準',
        correct: false,
      },
      {
        text: '不低於國際標準',
        correct: false,
      },
      {
        text: '不低於原來的標準',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的設立是根據中華人民共和國憲法的哪一條而定的?',
    answers: [
      {
        text: '第40條',
        correct: false,
      },
      {
        text: '第31條',
        correct: true,
      },
      {
        text: '第33條',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區基本法在甚麼時候開始實施?',
    answers: [
      {
        text: '1990年4月4日',
        correct: false,
      },
      {
        text: '1991年4月4日',
        correct: false,
      },
      {
        text: '1997年7月1日',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的設立是體現了下列哪一條方針?',
    answers: [
      {
        text: '四項堅持',
        correct: false,
      },
      {
        text: '一個國家，兩種制度',
        correct: true,
      },
      {
        text: '對內改革，對外開放',
        correct: false,
      },
    ],
  },
  {
    text: '“一國兩制”內的“兩制”是指哪兩個制度？',
    answers: [
      {
        text: '共產主義、資本主義',
        correct: false,
      },
      {
        text: '民主主義、社會主義',
        correct: false,
      },
      {
        text: '社會主義、資本主義',
        correct: true,
      },
    ],
  },
  {
    text: '基本法規定一九九七年後，香港特別行政區可保持原有的資本主義制度和生活方式多少年不變？',
    answers: [
      {
        text: '100年',
        correct: false,
      },
      {
        text: '75年',
        correct: false,
      },
      {
        text: '50年',
        correct: true,
      },
    ],
  },
  {
    text: '中華人民共和國一貫堅持對香港擁有下列哪項權力？',
    answers: [
      {
        text: '主權',
        correct: true,
      },
      {
        text: '君權',
        correct: false,
      },
      {
        text: '皇權',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區的區旗和區徽上的花朵是下列的哪一種？',
    answers: [
      {
        text: '紫荊花',
        correct: true,
      },
      {
        text: '太陽花',
        correct: false,
      },
      {
        text: '大紅花',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，中國其他地區的人是否可以自由進入香港？',
    answers: [
      {
        text: '可以隨便進入香港',
        correct: false,
      },
      {
        text: '如有親屬在港則可自由進入香港',
        correct: false,
      },
      {
        text: '必須辦理批准手續才可進入',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區有下列哪些事務由中央人民政府管理？',
    answers: [
      {
        text: '外交及財政',
        correct: false,
      },
      {
        text: '財政和防務',
        correct: false,
      },
      {
        text: '外交及防務',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的治安是由哪一個部門負責？',
    answers: [
      {
        text: '中華人民共和國公安部',
        correct: false,
      },
      {
        text: '中國人民解放軍',
        correct: false,
      },
      {
        text: '香港特別行政區政府',
        correct: true,
      },
    ],
  },
  {
    text: '中國人民解放軍駐香港部隊的費用由誰承擔？',
    answers: [
      {
        text: '香港特別行政區政府',
        correct: false,
      },
      {
        text: '中央人民政府',
        correct: true,
      },
      {
        text: '中央人民政府與香港特別行政區政府共同承擔',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港特別行政區的政務司司長，律政司司長等重要官員將由誰任命？',
    answers: [
      {
        text: '由中央政府委派',
        correct: false,
      },
      {
        text: '由行政長官提名，再提請中央政府任命',
        correct: true,
      },
      {
        text: '由特區政府自行委任',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區行政長官由誰任命？',
    answers: [
      {
        text: '香港特別行政區立法會',
        correct: false,
      },
      {
        text: '香港特別行政區籌備委員會',
        correct: false,
      },
      {
        text: '中央人民政府',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區行政長官的任期為多少年？',
    answers: [
      {
        text: '2年',
        correct: false,
      },
      {
        text: '3年',
        correct: false,
      },
      {
        text: '5年',
        correct: true,
      },
    ],
  },
  {
    text: '出任香港特別行政區的行政長官必須年滿多少歲？',
    answers: [
      {
        text: '40歲',
        correct: true,
      },
      {
        text: '50歲',
        correct: false,
      },
      {
        text: '60歲',
        correct: false,
      },
    ],
  },
  {
    text: '當香港特別行政區行政長官的基本條件之一是要在香港通常連續居住滿多少年',
    answers: [
      {
        text: '10年',
        correct: false,
      },
      {
        text: '15年',
        correct: false,
      },
      {
        text: '20年',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的法律由哪一個機構負責制定？',
    answers: [
      {
        text: '全國人民代表大會常務委員會',
        correct: false,
      },
      {
        text: '香港特別行政區行政會議',
        correct: false,
      },
      {
        text: '香港特別行政區立法會',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區立法會中持有非中國護照或外國居留權的議員數目不能超過多少百分比？',
    answers: [
      {
        text: '20%',
        correct: true,
      },
      {
        text: '30%',
        correct: false,
      },
      {
        text: '50%',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，廉政公署將向誰負責？',
    answers: [
      {
        text: '香港特別行政區行政長官',
        correct: true,
      },
      {
        text: '中國政府',
        correct: false,
      },
      {
        text: '香港特別行政區政務司司長',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區終審權屬於下列哪一個機構？',
    answers: [
      {
        text: '中華人民共和國最高人民法院',
        correct: false,
      },
      {
        text: '香港特別行政區高等法院',
        correct: false,
      },
      {
        text: '香港特別行政區終審法院',
        correct: true,
      },
    ],
  },
  {
    text: '1997年7月1日開始，中央人民政府會在香港徵稅嗎？',
    answers: [
      {
        text: '會，與內地各省、市、自治區一樣徵稅',
        correct: false,
      },
      {
        text: '不徵稅',
        correct: true,
      },
      {
        text: '按照實際情況適當徵稅',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，港幣的發行權屬於哪個機構？',
    answers: [
      {
        text: '中國人民銀行',
        correct: false,
      },
      {
        text: '香港匯豐銀行',
        correct: false,
      },
      {
        text: '香港特別行政區政府',
        correct: true,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港的外匯基金由誰管理和支配？',
    answers: [
      {
        text: '香港特別行政區政府',
        correct: true,
      },
      {
        text: '國家外匯管理局',
        correct: false,
      },
      {
        text: '中國人民銀行',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區用甚麼名義參加有關國際貿易協定？',
    answers: [
      {
        text: '香港中國',
        correct: false,
      },
      {
        text: '香港',
        correct: false,
      },
      {
        text: '中國香港',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區基本法的修改權屬於哪一個機構？',
    answers: [
      {
        text: '全國人民代表大會',
        correct: true,
      },
      {
        text: '國務院',
        correct: false,
      },
      {
        text: '香港特別行政區立法會',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，由哪個機構簽發中華人民共和國香港特別行政區護照？',
    answers: [
      {
        text: '中華人民共和國外交部',
        correct: false,
      },
      {
        text: '中華人民共和國公安部',
        correct: false,
      },
      {
        text: '香港特別行政區政府',
        correct: true,
      },
    ],
  },
  {
    text: '基本法的解釋權屬於下列哪一個機構？',
    answers: [
      {
        text: '香港特別行政區政府',
        correct: false,
      },
      {
        text: '全國人民代表大會常務委員會',
        correct: true,
      },
      {
        text: '香港特別行政區立法會',
        correct: false,
      },
    ],
  },
  {
    text: '外國在香港特別行政區設立領事機構或其他官方、半官方機構，須經誰或哪個機構批准？',
    answers: [
      {
        text: '香港特別行政區立法會',
        correct: false,
      },
      {
        text: '行政長官',
        correct: false,
      },
      {
        text: '中央人民政府',
        correct: true,
      },
    ],
  },
  {
    text: '中國和英國在那年簽署《中英聯合聲明》？',
    answers: [
      {
        text: '1983',
        correct: false,
      },
      {
        text: '1984',
        correct: true,
      },
      {
        text: '1986',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港成為中華人民共和國的甚麼地方？',
    answers: [
      {
        text: '特別行政區',
        correct: true,
      },
      {
        text: '省',
        correct: false,
      },
      {
        text: '直轄市',
        correct: false,
      },
    ],
  },
  {
    text: '基本法全部共有多少條條文？',
    answers: [
      {
        text: '160',
        correct: true,
      },
      {
        text: '180',
        correct: false,
      },
      {
        text: '220',
        correct: false,
      },
    ],
  },
  {
    text: '選出第一任香港特別行政區行政長官的推選委員會是由多少名成員組成？',
    answers: [
      {
        text: '200',
        correct: false,
      },
      {
        text: '300',
        correct: false,
      },
      {
        text: '400',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區立法會是由多少名議員組成？',
    answers: [
      {
        text: '50',
        correct: false,
      },
      {
        text: '60',
        correct: false,
      },
      {
        text: '70',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的行政機關、立法機關和司法機關，除可使用中文為正式語文外，還可使用甚麼語文？',
    answers: [
      {
        text: '日文',
        correct: false,
      },
      {
        text: '英文',
        correct: true,
      },
      {
        text: '法文',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日後，中央各部門、各自治區、直轄市如需在香港特別行政區設立機構，應辦理甚麼手續？',
    answers: [
      {
        text: '須徵得香港特別行政區政府同意並經中央人民政府批准',
        correct: true,
      },
      {
        text: '須徵得香港特別行政區政府同意',
        correct: false,
      },
      {
        text: '須徵得香港特別行政區政府同意並經全國人民代表大會批准',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區的外交事務是由甚麼機構負責？',
    answers: [
      {
        text: '中央人民政府',
        correct: true,
      },
      {
        text: '國務院',
        correct: false,
      },
      {
        text: '香港特別行政區政府',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區是中華人民共和國的一個享有高度自治權的地方，直轄於甚麼機構？',
    answers: [
      {
        text: '全國人民代表大會',
        correct: false,
      },
      {
        text: '中央人民政府',
        correct: true,
      },
      {
        text: '國務院',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區立法會是由甚麼途徑產生的？',
    answers: [
      {
        text: '中央委任',
        correct: false,
      },
      {
        text: '行政長官委任',
        correct: false,
      },
      {
        text: '選舉',
        correct: true,
      },
    ],
  },
  {
    text: '甚麼是香港特別行政區的法定貨幣？',
    answers: [
      {
        text: '歐元',
        correct: false,
      },
      {
        text: '港元',
        correct: true,
      },
      {
        text: '人民幣',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區有沒有立法權？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '駐港解放軍部隊會否干預香港特別行政區的地方事務？',
    answers: [
      {
        text: '會',
        correct: false,
      },
      {
        text: '不會',
        correct: true,
      },
    ],
  },
  {
    text: '基本法是否明確訂明香港特別行政區的居民有新聞、集會、結社和遊行的自由？',
    answers: [
      {
        text: '是',
        correct: true,
      },
      {
        text: '否',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港特別行政區政府是否規定香港居民只可生育一個孩子？',
    answers: [
      {
        text: '是',
        correct: false,
      },
      {
        text: '否',
        correct: true,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港居民有沒有信仰自由?',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '1997年7月1日開始，香港居民有沒有選擇職業的自由？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '基本法有否規定香港居民享有旅行和出入境的自由？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '基本法有否規定香港居民享有移居其他國家和地區的自由？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '基本法有否規定香港居民享有文學藝術創作的自由？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '基本法有否規定香港居民享有參加工會、罷工的權利和自由？',
    answers: [
      {
        text: '有',
        correct: true,
      },
      {
        text: '沒有',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區會否實行外匯管制政策？',
    answers: [
      {
        text: '會',
        correct: false,
      },
      {
        text: '不會',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區的財政收益，是否需要上繳給中央人民政府？',
    answers: [
      {
        text: '是',
        correct: false,
      },
      {
        text: '否',
        correct: true,
      },
    ],
  },
  {
    text: '香港特別行政區是否有權批准外國軍用船隻進入香港？',
    answers: [
      {
        text: '是',
        correct: false,
      },
      {
        text: '否',
        correct: true,
      },
    ],
  },
  {
    text: '社會集團和私人是否可依法在香港特別行政區興辦各種教育事業？',
    answers: [
      {
        text: '是',
        correct: true,
      },
      {
        text: '否',
        correct: false,
      },
    ],
  },
  {
    text: '宗教組織是否可按原有辦法繼續辦學？',
    answers: [
      {
        text: '是',
        correct: true,
      },
      {
        text: '否',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區可否自行制定各種文化政策？',
    answers: [
      {
        text: '可',
        correct: true,
      },
      {
        text: '不可',
        correct: false,
      },
    ],
  },
  {
    text: '香港特別行政區可否自行制定有關勞工的法律和政策？',
    answers: [
      {
        text: '可',
        correct: true,
      },
      {
        text: '不可',
        correct: false,
      },
    ],
  },
]

export default questions
