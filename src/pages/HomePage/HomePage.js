import React, { useState, useEffect, useCallback } from 'react';
import Helmet from 'react-helmet';
import { X, Menu } from 'react-feather';
import SmoothScroll from 'smooth-scroll';
import PropTypes from 'prop-types';

import withResponsive from '../../components/withResponsive';
import PageTitle from '../../components/PageTitle/PageTitle';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './HomePage.module.scss';

function HomePage({ isMobile }) {
  const [sidebarVisible, setSidebarVisible] = useState(() => !isMobile);

  useEffect(() => {
    const smoothScroll = new SmoothScroll('a[href*="#"]', {
      speed: 400,
      speedAsDuration: true,
    });

    return () => smoothScroll.destroy();
  }, []);

  useEffect(() => {
    setSidebarVisible(!isMobile);
  }, [isMobile]);

  const handleMenuClick = useCallback(() => {
    setSidebarVisible(prev => !prev);
  }, []);

  const handleSidebarClick = useCallback(() => {
    if (isMobile) {
      setSidebarVisible(false);
    }
  }, [isMobile]);

  return (
    <div>
      <Helmet title="香港CRE基本法測試" titleTemplate="%s | 香港CRE基本法測試" />
      <PageTitle>香港CRE基本法全文</PageTitle>
      <hr />

      <div className={styles.grid}>
        <div className={styles.articleContainer}>
          <h3 className={styles.chapterTitle} id="chapter-1">
            第一章: 總則
          </h3>
          <strong>第一條</strong>
          <p>香港特別行政區是中華人民共和國不可分離的部分。</p>
          <strong>第二條</strong>
          <p>
            全國人民代表大會授權香港特別行政區依照本法的規定實行高度自治，享有行政管理權、立法權、獨立的司法權和終審權。
          </p>
          <strong>第三條</strong>
          <p>香港特別行政區的行政機關和立法機關由香港永久性居民依照本法有關規定組成。</p>
          <strong>第四條</strong>
          <p>香港特別行政區依法保障香港特別行政區居民和其他人的權利和自由。</p>
          <strong>第五條</strong>
          <p>香港特別行政區不實行社會主義制度和政策，保持原有的資本主義制度和生活方式，五十年不變。</p>
          <strong>第六條</strong>
          <p>香港特別行政區依法保護私有財產權。</p>
          <strong>第七條</strong>
          <p>
            香港特別行政區境內的土地和自然資源屬於國家所有，由香港特別行政區政府負責管理、使用、開發、出租或批給個人、法人或團體使用或開發，其收入全歸香港特別行政區政府支配。
          </p>
          <strong>第八條</strong>
          <p>
            香港原有法律，即普通法、衡平法、條例、附屬立法和習慣法，除同本法相抵觸或經香港特別行政區的立法機關作出修改者外，予以保留。
          </p>
          <strong>第九條</strong>
          <p>香港特別行政區的行政機關、立法機關和司法機關，除使用中文外，還可使用英文，英文也是正式語文。</p>
          <strong>第十條</strong>
          <p>香港特別行政區除懸掛中華人民共和國國旗和國徽外，還可使用香港特別行政區區旗和區徽。</p>
          <p>香港特別行政區的區旗是五星花蕊的紫荊花紅旗。</p>
          <p>香港特別行政區的區徽，中間是五星花蕊的紫荊花，周圍寫有“中華人民共和國香港特別行政區”和英文“香港”。</p>
          <strong>第十一條</strong>
          <p>
            根據中華人民共和國憲法第三十一條，香港特別行政區的制度和政策，包括社會、經濟制度，有關保障居民的基本權利和自由的制度，行政管理、立法和司法方面的制度，以及有關政策，均以本法的規定為依據。
          </p>
          <p>香港特別行政區立法機關制定的任何法律，均不得同本法相抵觸。</p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-2">
            第二章: 中央和香港特別行政區的關係
          </h3>
          <strong>第十二條</strong>
          <p>香港特別行政區是中華人民共和國的一個享有高度自治權的地方行政區域，直轄於中央人民政府。</p>
          <strong>第十三條</strong>
          <p>中央人民政府負責管理與香港特別行政區有關的外交事務。</p>
          <p>中華人民共和國外交部在香港設立機構處理外交事務。</p>
          <p>中央人民政府授權香港特別行政區依照本法自行處理有關的對外事務。</p>
          <strong>第十四條</strong>
          <p>中央人民政府負責管理香港特別行政區的防務。</p>
          <p>香港特別行政區政府負責維持香港特別行政區的社會治安。</p>
          <p>
            中央人民政府派駐香港特別行政區負責防務的軍隊不干預香港特別行政區的地方事務。香港特別行政區政府在必要時，可向中央人民政府請求駐軍協助維持社會治安和救助災害。
          </p>
          <p>駐軍人員除須遵守全國性的法律外，還須遵守香港特別行政區的法律。</p>
          <p>駐軍費用由中央人民政府負擔。</p>
          <strong>第十五條</strong>
          <p>中央人民政府依照本法第四章的規定任命香港特別行政區行政長官和行政機關的主要官員。</p>
          <strong>第十六條</strong>
          <p>香港特別行政區享有行政管理權，依照本法的有關規定自行處理香港特別行政區的行政事務。</p>
          <strong>第十七條</strong>
          <p>香港特別行政區享有立法權。</p>
          <p>香港特別行政區的立法機關制定的法律須報全國人民代表大會常務委員會備案。備案不影響該法律的生效。</p>
          <p>
            全國人民代表大會常務委員會在徵詢其所屬的香港特別行政區基本法委員會後，如認為香港特別行政區立法機關制定的任何法律不符合本法關於中央管理的事務及中央和香港特別行政區的關係的條款，可將有關法律發回，但不作修改。經全國人民代表大會常務委員會發回的法律立即失效。該法律的失效，除香港特別行政區的法律另有規定外，無溯及力。
          </p>
          <strong>第十八條</strong>
          <p>在香港特別行政區實行的法律為本法以及本法第八條規定的香港原有法律和香港特別行政區立法機關制定的法律。</p>
          <p>
            全國性法律除列於本法附件三者外，不在香港特別行政區實施。凡列於本法附件三之法律，由香港特別行政區在當地公布或立法實施。
          </p>
          <p>
            全國人民代表大會常務委員會在徵詢其所屬的香港特別行政區基本法委員會和香港特別行政區政府的意見後，可對列於本法附件三的法律作出增減，任何列入附件三的法律，限於有關國防、外交和其他按本法規定不屬於香港特別行政區自治範圍的法律。
          </p>
          <p>
            全國人民代表大會常務委員會決定宣佈戰爭狀態或因香港特別行政區內發生香港特別行政區政府不能控制的危及國家統一或安全的動亂而決定香港特別行政區進入緊急狀態，中央人民政府可發佈命令將有關全國性法律在香港特別行政區實施。
          </p>
          <strong>第十九條</strong>
          <p>香港特別行政區享有獨立的司法權和終審權。</p>
          <p>
            香港特別行政區法院除繼續保持香港原有法律制度和原則對法院審判權所作的限制外，對香港特別行政區所有的案件均有審判權。
          </p>
          <p>
            香港特別行政區法院對國防、外交等國家行為無管轄權。香港特別行政區法院在審理案件中遇有涉及國防、外交等國家行為的事實問題，應取得行政長官就該等問題發出的證明文件，上述文件對法院有約束力。行政長官在發出證明文件前，須取得中央人民政府的證明書。
          </p>
          <strong>第二十條</strong>
          <p>香港特別行政區可享有全國人民代表大會和全國人民代表大會常務委員會及中央人民政府授予的其他權力。</p>
          <strong>第二十一條</strong>
          <p>香港特別行政區居民中的中國公民依法參與國家事務的管理。</p>
          <p>
            根據全國人民代表大會確定的名額和代表產生辦法，由香港特別行政區居民中的中國公民在香港選出香港特別行政區的全國人民代表大會代表，參加最高國家權力機關的工作。
          </p>
          <strong>第二十二條</strong>
          <p>中央人民政府所屬各部門、各省、自治區、直轄市均不得干預香港特別行政區根據本法自行管理的事務。</p>
          <p>
            中央各部門、各省、自治區、直轄市如需在香港特別行政區設立機構，須徵得香港特別行政區政府同意並經中央人民政府批准。
          </p>
          <p>中央各部門、各省、自治區、直轄市在香港特別行政區設立的一切機構及其人員均須遵守香港特別行政區的法律。</p>
          <p>
            *中國其他地區的人進入香港特別行政區須辦理批准手續，其中進入香港特別行政區定居的人數由中央人民政府主管部門徵求香港特別行政區政府的意見後確定。
          </p>
          <p>香港特別行政區可在北京設立辦事機構。</p>
          <strong>第二十三條</strong>
          <p>
            香港特別行政區應自行立法禁止任何叛國、分裂國家、煽動叛亂、顛覆中央人民政府及竊取國家機密的行為，禁止外國的政治性組織或團體在香港特別行政區進行政治活動，禁止香港特別行政區的政治性組織或團體與外國的政治性組織或團體建立聯繫。
          </p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-3">
            第三章: 居民的基本權利和義務
          </h3>
          <strong>第二十四條</strong>
          <p>香港特別行政區居民，簡稱香港居民，包括永久性居民和非永久性居民。</p>
          <p>香港特別行政區永久性居民為：</p>
          <ul className={styles.list}>
            <li> ( 一 ) 在香港特別行政區成立以前或以後在香港出生的中國公民;</li>
            <li> ( 二 ) 在香港特別行政區成立以前或以後在香港通常居住連續七年以上的中國公民;</li>
            <li> ( 三 ) 第( 一 ) 、( 二 ) 兩項所列居民在香港以外所生的中國籍子女;</li>
            <li>
              {' '}
              ( 四 )
              在香港特別行政區成立以前或以後持有效旅行證件進入香港、在香港通常居住連續七年以上並以香港為永久居住地的非中國籍的人；
            </li>
            <li> ( 五 ) 在香港特別行政區成立以前或以後第( 四) 項所列居民在香港所生的未滿二十一周歲的子女；</li>
            <li> ( 六 ) 第( 一 ) 至( 五 ) 項所列居民以外在香港特別行政區成立以前只在香港有居留權的人。</li>
          </ul>
          <p>以上居民在香港特別行政區享有居留權和有資格依照香港特別行政區法律取得載明其居留權的永久性居民身份證。</p>
          <p>香港特別行政區非永久性居民為：有資格依照香港特別行政區法律取得香港居民身份證，但沒有居留權的人。</p>
          <strong>第二十五條</strong>
          <p>香港居民在法律面前一律平等。</p>
          <strong>第二十六條</strong>
          <p>香港特別行政區永久性居民依法享有選舉權和被選舉權。</p>
          <strong>第二十七條</strong>
          <p>香港居民享有言論、新聞、出版的自由，結社、集會、遊行、示威的自由，組織和參加工會、罷工的權利和自由。</p>
          <strong>第二十八條</strong>
          <p>香港居民的人身自由不受侵犯。</p>
          <p>
            香港居民不受任意或非法逮捕、拘留、監禁。禁止任意或非法搜查居民的身體、剝奪或限制居民的人身自由。禁止對居民施行酷刑、任意或非法剝奪居民的生命。
          </p>
          <strong>第二十九條</strong>
          <p>香港居民的住宅和其他房屋不受侵犯。禁止任意或非法搜查、侵入居民的住宅和其他房屋。</p>
          <strong>第三十條</strong>
          <p>
            香港居民的通訊自由和通訊秘密受法律的保護。除因公共安全和追查刑事犯罪的需要，由有關機關依照法律程序對通訊進行檢查外，任何部門或個人不得以任何理由侵犯居民的通訊自由和通訊秘密。
          </p>
          <strong>第三十一條</strong>
          <p>
            香港居民有在香港特別行政區境內遷徙的自由，有移居其他國家和地區的自由。香港居民有旅行和出入境的自由。有效旅行證件的持有人，除非受到法律制止，可自由離開香港特別行政區，無需特別批准。
          </p>
          <strong>第三十二條</strong>
          <p>香港居民有信仰的自由。</p>
          <p>香港居民有宗教信仰的自由，有公開傳教和舉行、參加宗教活動的自由。</p>
          <strong>第三十三條</strong>
          <p>香港居民有選擇職業的自由。</p>
          <strong>第三十四條</strong>
          <p>香港居民有進行學術研究、文學藝術創作和其他文化活動的自由。</p>
          <strong>第三十五條</strong>
          <p>
            香港居民有權得到秘密法律諮詢、向法院提起訴訟、選擇律師及時保護自己的合法權益或在法庭上為其代理和獲得司法補救。
          </p>
          <p>香港居民有權對行政部門和行政人員的行為向法院提起訴訟。</p>
          <strong>第三十六條</strong>
          <p>香港居民有依法享受社會福利的權利。勞工的福利待遇和退休保障受法律保護。</p>
          <strong>第三十七條</strong>
          <p>香港居民的婚姻自由和自願生育的權利受法律保護。</p>
          <strong>第三十八條</strong>
          <p>香港居民享有香港特別行政區法律保障的其他權利和自由。</p>
          <strong>第三十九條</strong>
          <p>
            《公民權利和政治權利國際公約》、《經濟、社會與文化權利的國際公約》和國際勞工公約適用於香港的有關規定繼續有效，通過香港特別行政區的法律予以實施。
          </p>
          <p>香港居民享有的權利和自由，除依法規定外不得限制，此種限制不得與本條第一款規定抵觸。</p>
          <strong>第四十條</strong>
          <p>“新界”原居民的合法傳統權益受香港特別行政區的保護。</p>
          <strong>第四十一條</strong>
          <p>在香港特別行政區境內的香港居民以外的其他人，依法享有本章規定的香港居民的權利和自由。</p>
          <strong>第四十二條</strong>
          <p>香港居民和在香港的其他人有遵守香港特別行政區實行的法律的義務。</p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-4">
            第四章: 政治體制
          </h3>
          <ul className={styles.list}>
            <li>第一節 - 行政長官</li>
            <li>第二節 - 行政機關</li>
            <li>第三節 - 立法機關</li>
            <li>第四節 - 司法機關</li>
            <li>第五節 - 區域組織</li>
            <li>第六節 - 公務人員</li>
          </ul>
          <h3 className={styles.chapterTitle} id="chapter-4-section-1">
            第一節: 行政長官
          </h3>
          <strong>第四十三條</strong>
          <p>香港特別行政區行政長官是香港特別行政區的首長，代表香港特別行政區。</p>
          <p>香港特別行政區行政長官依照本法的規定對中央人民政府和香港特別行政區負責。</p>
          <strong>第四十四條</strong>
          <p>
            香港特別行政區行政長官由年滿四十周歲，在香港通常居住連續滿二十年並在外國無居留權的香港特別行政區永久性居民中的中國公民擔任。
          </p>
          <strong>第四十五條</strong>
          <p>香港特別行政區行政長官在當地通過選舉或協商產生，由中央人民政府任命。</p>
          <p>
            行政長官的產生辦法根據香港特別行政區的實際情況和循序漸進的原則而規定，最終達至由一個有廣泛代表性的提名委員會按民主程序提名後普選產生的目標。
          </p>
          <p>行政長官產生的具體辦法由附件一《香港特別行政區行政長官的產生辦法》規定。</p>
          <strong>第四十六條</strong>
          <p>香港特別行政區行政長官任期五年，可連任一次。</p>
          <strong>第四十七條</strong>
          <p>香港特別行政區行政長官必須廉潔奉公、盡忠職守。</p>
          <p>行政長官就任時應向香港特別行政區終審法院首席法官申報財產，記錄在案。</p>
          <strong>第四十八條</strong>
          <p>香港特別行政區行政長官行使下列職權：</p>
          <ul className={styles.list}>
            <li>( 一 ) 領導香港特別行政區政府；</li>
            <li>( 二 ) 負責執行本法和依照本法適用於香港特別行政區的其他法律；</li>
            <li>( 三 ) 簽署立法會通過的法案，公布法律；</li>
          </ul>
          <p>簽署立法會通過的財政預算案，將財政預算、決算報中央人民政府備案；</p>
          <ul className={styles.list}>
            <li>( 四 ) 決定政府政策和發布行政命令；</li>
            <li>
              ( 五 )
              提名並報請中央人民政府任命下列主要官員：各司司長、副司長，各局局長，廉政專員，審計署署長，警務處處長，入境事務處處長，海關關長；建議中央人民政府免除上述官員職務；
            </li>
            <li>( 六 ) 依照法定程序任免各級法院法官；</li>
            <li>( 七 ) 依照法定程序任免公職人員；</li>
            <li>( 八 ) 執行中央人民政府就本法規定的有關事務發出的指令；</li>
            <li>( 九 ) 代表香港特別行政區政府處理中央授權的對外事務和其他事務；</li>
            <li>( 十 ) 批准向立法會提出有關財政收入或支出的動議；</li>
            <li>
              ( 十一 )
              根據安全和重大公共利益的考慮，決定政府官員或其他負責政府公務的人員是否向立法會或其屬下的委員會作證和提供證據；
            </li>
            <li>( 十二 ) 赦免或減輕刑事罪犯的刑罰；</li>
            <li>( 十三 ) 處理請願、申訴事項。</li>
          </ul>
          <strong>第四十九條</strong>
          <p>
            香港特別行政區行政長官如認為立法會通過的法案不符合香港特別行政區的整體利益，可在三個月內將法案發回立法會重議，立法會如以不少於全體議員三分之二多數再次通過原案，行政長官必須在一個月內簽署公佈或按本法第五十條的規定處理。
          </p>
          <strong>第五十條</strong>
          <p>
            香港特別行政區行政長官如拒絕簽署立法會再次通過的法案或立法會拒絕通過政府提出的財政預算案或其他重要法案，經協商仍不能取得一致意見，行政長官可解散立法會。
          </p>
          <p>行政長官在解散立法會前，須徵詢行政會議的意見。行政長官在其一任任期內只能解散立法會一次。</p>
          <strong>第五十一條</strong>
          <p>
            香港特別行政區立法會如拒絕批准政府提出的財政預算案，行政長官可向立法會申請臨時撥款。如果由於立法會已被解散而不能批准撥款，行政長官可在選出新的立法會前的一段時期內，按上一財政年度的開支標準，批准臨時短期撥款。
          </p>
          <strong>第五十二條</strong>
          <p>香港特別行政區行政長官如有下列情況之一者必須辭職：</p>
          <ul className={styles.list}>
            <li>( 一 ) 因嚴重疾病或其他原因無力履行職務；</li>
            <li>
              ( 二 )
              因兩次拒絕簽署立法會通過的法案而解散立法會，重選的立法會仍以全體議員三分之二多數通過所爭議的原案，而行政長官仍拒絕簽署；
            </li>
            <li>
              ( 三 ) 因立法會拒絕通過財政預算案或其他重要法案而解散立法會，重選的立法會繼續拒絕通過所爭議的原案。
            </li>
          </ul>
          <strong>第五十三條</strong>
          <p>香港特別行政區行政長官短期不能履行職務時，由政務司長、財政司長、律政司長依次臨時代理其職務。</p>
          <p>
            *行政長官缺位時，應在六個月內依本法第四十五條的規定產生新的行政長官。行政長官缺位期間的職務代理，依照上款規定辦理。
          </p>
          <strong>第五十四條</strong>
          <p>香港特別行政區行政會議是協助行政長官決策的機構。</p>
          <strong>第五十五條</strong>
          <p>
            香港特別行政區行政會議的成員由行政長官從行政機關的主要官員、立法會議員和社會人士中委任，其任免由行政長官決定。行政會議成員的任期應不超過委任他的行政長官的任期。
          </p>
          <p>香港特別行政區行政會議成員由在外國無居留權的香港特別行政區永久性居民中的中國公民擔任。</p>
          <p>行政長官認為必要時可邀請有關人士列席會議。</p>
          <strong>第五十六條</strong>
          <p>香港特別行政區行政會議由行政長官主持。</p>
          <p>
            行政長官在作出重要決策、向立法會提交法案、制定附屬法規和解散立法會前，須徵詢行政會議的意見，但人事任免、紀律制裁和緊急情況下採取的措施除外。
          </p>
          <p>行政長官如不採納行政會議多數成員的意見，應將具體理由記錄在案。</p>
          <strong>第五十七條</strong>
          <p>香港特別行政區設立廉政公署，獨立工作，對行政長官負責。</p>
          <strong>第五十八條</strong>
          <p>香港特別行政區設立審計署，獨立工作，對行政長官負責。</p>
          <h3 className={styles.chapterTitle} id="chapter-4-section-2">
            第二節: 行政機關
          </h3>
          <strong>第五十九條</strong>
          <p>香港特別行政區政府是香港特別行政區行政機關。</p>
          <strong>第六十條</strong>
          <p>香港特別行政區政府的首長是香港特別行政區行政長官。</p>
          <p>香港特別行政區政府設政務司、財政司、律政司、和各局、處、署。</p>
          <strong>第六十一條</strong>
          <p>
            香港特別行政區的主要官員由在香港通常居住連續滿十五年並在外國無居留權的香港特別行政區永久性居民中的中國公民擔任。
          </p>
          <strong>第六十二條</strong>
          <p>香港特別行政區政府行使下列職權：</p>
          <ul className={styles.list}>
            <li>( 一 ) 制定並執行政策；</li>
            <li>( 二 ) 管理各項行政事務；</li>
            <li>( 三 ) 辦理本法規定的中央人民政府授權的對外事務；</li>
            <li>( 四 ) 編制並提出財政預算、決算；</li>
            <li>( 五 ) 擬定並提出法案、議案、附屬法規；</li>
            <li>( 六 ) 委派官員列席立法會並代表政府發言。</li>
          </ul>
          <strong>第六十三條</strong>
          <p>香港特別行政區律政司主管刑事檢察工作，不受任何干涉。</p>
          <strong>第六十四條</strong>
          <p>
            香港特別行政區政府必須遵守法律，對香港特別行政區立法會負責：執行立法會通過並已生效的法律；定期向立法會作施政報告；答覆立法會議員的質詢；徵稅和公共開支須經立法會批准。
          </p>
          <strong>第六十五條</strong>
          <p>原由行政機關設立諮詢組織的制度繼續保留。</p>
          <h3 className={styles.chapterTitle} id="chapter-4-section-3">
            第三節: 立法機關
          </h3>
          <strong>第六十六條</strong>
          <p>香港特別行政區立法會是香港特別行政區的立法機關。</p>
          <strong>第六十七條</strong>
          <p>
            香港特別行政區立法會由在外國無居留權的香港特別行政區永久性居民中的中國公民組成。但非中國籍的香港特別行政區永久性居民和在外國有居留權的香港特別行政區永久性居民也可以當選為香港特別行政區立法會議員，其所佔比例不得超過立法會全體議員的百分之二十。
          </p>
          <strong>第六十八條</strong>
          <p>香港特別行政區立法會由選舉產生。</p>
          <p>
            立法會的產生辦法根據香港特別行政區的實際情況和循序漸進的原則而規定，最終達至全部議員由普選產生的目標。
          </p>
          <p>立法會產生的具體辦法和法案、議案的表決程序由附件二《香港特別行政區立法會的產生辦法和表決程序》規定。</p>
          <strong>第六十九條</strong>
          <p>香港特別行政區立法會除第一屆任期為兩年外，每屆任期四年。</p>
          <strong>第七十條</strong>
          <p>香港特別行政區立法會如經行政長官依本法規定解散，須於三個月內依本法第六十八條的規定，重行選舉產生。</p>
          <strong>第七十一條</strong>
          <p>香港特別行政區立法會主席由立法會議員互選產生。</p>
          <p>
            香港特別行政區立法會主席由年滿四十周歲，在香港通常居住連續滿二十年並在外國無居留權的香港特別行政區永久性居民中的中國公民擔任。
          </p>
          <strong>第七十二條</strong>
          <p>香港特別行政區立法會主席行使下列職權：</p>
          <ul className={styles.list}>
            <li>( 一 ) 主持會議；</li>
            <li>( 二 ) 決定議程，政府提出的議案須優先列入議程；</li>
            <li>( 三 ) 決定開會時間；</li>
            <li>( 四 ) 在休會期間可召開特別會議；</li>
            <li>( 五 ) 應行政長官的要求召開緊急會議；</li>
            <li>( 六 ) 立法會議事規則所規定的其他職權。</li>
          </ul>
          <strong>第七十三條</strong>
          <p>香港特別行政區立法會行使下列職權：</p>
          <ul className={styles.list}>
            <li>( 一 ) 根據本法規定並依照法定程序制定、修改和廢除法律；</li>
            <li>( 二 ) 根據政府的提案，審核、通過財政預算；</li>
            <li>( 三 ) 批准稅收和公共開支；</li>
            <li>( 四 ) 聽取行政長官的施政報告並進行辯論；</li>
            <li>( 五 ) 對政府的工作提出質詢；</li>
            <li>( 六 ) 就任何有關公共利益問題進行辯論；</li>
            <li>( 七 ) 同意終審法院法官和高等法院首席法官的任免；</li>
            <li>( 八 ) 接受香港居民申訴並作出處理；</li>
            <li>
              ( 九 )
              如立法會全體議員的四分之一聯合動議，指控行政長官有嚴重違法或瀆職行為而不辭職，經立法會通過進行調查，立法會可委托終審法院首席法官負責組成獨立的調查委員會，並擔任主席。調查委員會負責進行調查，並向立法會提出報告。如該調查委員會認為有足夠證據構成上述指控，立法會以全體議員三分之二多數通過，可提出彈劾案，報請中央人民政府決定；
            </li>
            <li>( 十 ) 在行使上述各項職權時，如有需要，可傳召有關人士出席作證和提供證據。</li>
          </ul>
          <strong>第七十四條</strong>
          <p>
            香港特別行政區立法會議員根據本法規定並依照法定程序提出法律草案，凡不涉及公共開支或政治體制或政府運作者，可由立法會議員個別或聯名提出。凡涉及政府政策者，在提出前必須得到行政長官的書面同意。
          </p>
          <strong>第七十五條</strong>
          <p>香港特別行政區立法會舉行會議的法定人數為不少於全體議員的二分之一。</p>
          <p>立法會議事規則由立法會自行制定，但不得與本法相抵觸。</p>
          <strong>第七十六條</strong>
          <p>香港特別行政區立法會通過的法案，須經行政長官簽署、公佈，方能生效。</p>
          <strong>第七十七條</strong>
          <p>香港特別行政區立法會議員在立法會的會議上發言，不受法律追究。</p>
          <strong>第七十八條</strong>
          <p>香港特別行政區立法會議員出席會議時和赴會途中不受逮捕。</p>
          <strong>第七十九條</strong>
          <p>香港特別行政區立法會議員如有下列情況之一，由立法會主席宣告其喪失立法會議員的資格：</p>
          <ul className={styles.list}>
            <li>( 一 ) 因嚴重疾病或其他情況無力履行職務；</li>
            <li>( 二 ) 未得到立法會主席的同意，連續三個月不出席會議而無合理解釋者；</li>
            <li>( 三 ) 喪失或放棄香港特別行政區永久性居民的身份；</li>
            <li>( 四 ) 接受政府的委任而出任公務人員；</li>
            <li>( 五 ) 破產或經法庭裁定償還債務而不履行；</li>
            <li>
              ( 六 )
              在香港特別行政區區內或區外被判犯有刑事罪行，判處監禁一個月以上，並經立法會出席會議的議員三分之二通過解除其職務；
            </li>
            <li>( 七 ) 行為不檢或違反誓言而經立法會出席會議的議員三分之二通過譴責。</li>
          </ul>
          <h3 className={styles.chapterTitle} id="chapter-4-section-4">
            第四節: 司法機關
          </h3>
          <strong>第八十條</strong>
          <p>香港特別行政區各級法院是香港特別行政區的司法機關，行使香港特別行政區的審判權。</p>
          <strong>第八十一條</strong>
          <p>
            香港特別行政區設立終審法院、高等法院、區域法院、裁判署法庭和其他專門法庭。高等法院設上訴法庭和原訟法庭。
          </p>
          <p>原在香港實行的司法體制，除因設立香港特別行政區終審法院而產生變化外，予以保留。</p>
          <strong>第八十二條</strong>
          <p>
            香港特別行政區的終審權屬於香港特別行政區終審法院。終審法院可根據需要邀請其他普通法適用地區的法官參加審判。
          </p>
          <strong>第八十三條</strong>
          <p>香港特別行政區的各級法院的組織和職權由法律規定。</p>
          <strong>第八十四條</strong>
          <p>
            香港特別行政區法院依照本法第十八條所規定的適用於香港特別行政區的法律審判案件，其他普通法適用地區的司法判例可作參考。
          </p>
          <strong>第八十五條</strong>
          <p>香港特別行政區法院獨立進行審判，不受任何干涉，司法人員履行審判職責的行為不受法律追究。</p>
          <strong>第八十六條</strong>
          <p>原在香港實行的陪審制度的原則予以保留。</p>
          <strong>第八十七條</strong>
          <p>香港特別行政區的刑事訴訟和民事訴訟中保留原在香港適用的原則和當事人享有的權利。</p>
          <p>任何人在被合法拘捕後，享有盡早接受司法機關公正審判的權利，未經司法機關判罪之前均假定無罪。</p>
          <strong>第八十八條</strong>
          <p>
            香港特別行政區法院的法官，根據當地法官和法律界及其他方面知名人士組成的獨立委員會推薦，由行政長官任命。
          </p>
          <strong>第八十九條</strong>
          <p>
            香港特別行政區法院的法官只有在無力履行職責或行為不檢的情況下，行政長官才可根據終審法院首席法官任命的不少於三名當地法官組成的審議庭的建議，予以免職。
          </p>
          <p>
            香港特別行政區終審法院的首席法官只有在無力履行職責或行為不檢的情況下，行政長官才可任命不少於五名當地法官組成的審議庭進行審議，並可根據其建議，依照本法規定的程序，予以免職。
          </p>
          <strong>第九十條</strong>
          <p>
            香港特別行政區終審法院和高等法院的首席法官，應由在外國無居留權的香港特別行政區永久性居民中的中國公民擔任。
          </p>
          <p>
            除本法第八十八條和第八十九條規定的程序外，香港特別行政區終審法院的法官和高等法院首席法官的任命或免職，還須由行政長官徵得立法會同意，並報全國人民代表大會常務委員會備案。
          </p>
          <strong>第九十一條</strong>
          <p>香港特別行政區法官以外的其他司法人員原有的任免制度繼續保持。</p>
          <strong>第九十二條</strong>
          <p>香港特別行政區的法官和其他司法人員，應根據其本人的司法和專業才能選用，並可從其他普通法適用地區聘用。</p>
          <strong>第九十三條</strong>
          <p>
            香港特別行政區成立前在香港任職的法官和其他司法人員均可留用，其年資予以保留，薪金、津貼、福利待遇和服務條件不低於原來的標準。
          </p>
          <p>
            對退休或符合規定離職的法官和其他司法人員，包括香港特別行區成立前已退休或離職者，不論其所屬國籍或居住地點，香港特別行政區政府按不低於原來的標準，向他們或其家屬支付應得的退休金、酬金、津貼和福利費。
          </p>
          <strong>第九十四條</strong>
          <p>
            香港特別行政區政府可參照原在香港實行的辦法，作出有關當地和外來的律師在香港特別行政區工作和執業的規定。
          </p>
          <strong>第九十五條</strong>
          <p>香港特別行政區可與全國其他地區的司法機關通過協商依法進行司法方面的聯繫和相互提供協助。</p>
          <strong>第九十六條</strong>
          <p>在中央人民政府協助或授權下，香港特別行政區政府可與外國就司法互助關係作出適當安排。</p>
          <h3 className={styles.chapterTitle} id="chapter-4-section-5">
            第五節: 區域組織
          </h3>
          <strong>第九十七條</strong>
          <p>
            香港特別行政區可設立非政權性的區域組織，接受香港特別行政區政府就有關地區管理和其他事務的諮詢，或負責提供文化、康樂、環境衛生等服務。
          </p>
          <strong>第九十八條</strong>
          <p>區域組織的職權和組成方法由法律規定。</p>
          <h3 className={styles.chapterTitle} id="chapter-4-section-6">
            第六節: 公務人員
          </h3>
          <strong>第九十九條</strong>
          <p>
            在香港特別行政區政府各部門任職的公務人員必須是香港特別行政區永久性居民。本法第一百零一條對外籍公務人員另有規定者或法律規定某一職級以下者不在此限。
          </p>
          <p>公務人員必須盡忠職守，對香港特別行政區政府負責。</p>
          <strong>第一百條</strong>
          <p>
            香港特別行政區成立前在香港政府各部門，包括警察部門任職的公務人員均可留用，其年資予以保留，薪金、津貼、福利待遇和服務條件不低於原來的標準。
          </p>
          <strong>第一百零一條</strong>
          <p>
            香港特別行政區政府可任用原香港公務人員中的或持有香港特別行政區永久性居民身份證的英籍和其他外籍人士擔任政府部門的各級公務人員，但下列各職級的官員必須由在外國無居留權的香港特別行政區永久性居民中的中國公民擔任：各司司長、副司長，各局局長，廉政專員，審計署署長，警務處處長，入境事務處處長，海關關長。
          </p>
          <p>
            香港特別行政區政府還可聘請英籍和其他外籍人士擔任政府部門的顧問，必要時並可從香港特別行政區以外聘請合格人員擔任政府部門的專門和技術職務。上述外籍人士只能以個人身份受聘，對香港特別行政區政府負責。
          </p>
          <strong>第一百零二條</strong>
          <p>
            對退休或符合規定離職的公務人員，包括香港特別行政區成立前退休或符合規定離職的公務人員，不論其所屬國籍或居住地點，香港特別行政區政府按不低於原來的標準向他們或其家屬支付應得的退休金、酬金、津貼和福利費。
          </p>
          <strong>第一百零三條</strong>
          <p>
            公務人員應根據其本人的資格、經驗和才能予以任用和提升，香港原有關於公務人員的招聘、僱用、考核、紀律、培訓和管理的制度，包括負責公務人員的任用、薪金、服務條件的專門機構，除有關給予外籍人員特權待遇的規定外，予以保留。
          </p>
          <strong>第一百零四條</strong>
          <p>
            香港特別行政區行政長官、主要官員、行政會議成員、立法會議員、各級法院法官和其他司法人員在就職時必須依法宣誓擁護中華人民共和國香港特別行政區基本法，效忠中華人民共和國香港特別行政區。
          </p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-5">
            第五章: 經濟
          </h3>
          <ul className={styles.list}>
            <li>第一節 - 財政、金融、貿易和工商業</li>
            <li>第二節 - 土地契約</li>
            <li>第三節 - 航運</li>
            <li>第四節 - 民用航空</li>
          </ul>
          <h3 className={styles.chapterTitle} id="chapter-5-section-1">
            第一節: 財政、金融、貿易和工商業
          </h3>
          <strong>第一百零五條</strong>
          <p>
            香港特別行政區依法保護私人和法人財產的取得、使用、處置和繼承的權利，以及依法徵用私人和法人財產時被徵用財產的所有人得到補償的權利。
          </p>
          <p>徵用財產的補償應相當於該財產當時的實際價值，可自由兌換，不得無故遲延支付。</p>
          <p>企業所有權和外來投資均受法律保護。</p>
          <strong>第一百零六條</strong>
          <p>香港特別行政區保持財政獨立。</p>
          <p>香港特別行政區的財政收入全部用於自身需要，不上繳中央人民政府。</p>
          <p>中央人民政府不在香港特別行政區徵稅。</p>
          <strong>第一百零七條</strong>
          <p>香港特別行政區的財政預算以量入為出為原則，力求收支平衡，避免赤字，並與本地生產總值的增長率相適應。</p>
          <strong>第一百零八條</strong>
          <p>香港特別行政區實行獨立的稅收制度。</p>
          <p>香港特別行政區參照原在香港實行的低稅政策，自行立法規定稅種、稅率、稅收寬免和其他稅務事項。</p>
          <strong>第一百零九條</strong>
          <p>香港特別行政區政府提供適當的經濟和法律環境，以保持香港的國際金融中心地位。</p>
          <strong>第一百一十條</strong>
          <p>香港特別行政區的貨幣金融制度由法律規定。</p>
          <p>香港特別行政區政府自行制定貨幣金融政策，保障金融企業和金融市場的經營自由，並依法進行管理和監督。</p>
          <strong>第一百一十一條</strong>
          <p>港元為香港特別行政區法定貨幣，繼續流通。</p>
          <p>
            港幣的發行權屬於香港特別行政區政府。港幣的發行須有百分之百的準備金。港幣的發行制度和準備金制度，由法律規定。
          </p>
          <p>
            香港特別行政區政府，在確知港幣的發行基礎健全和發行安排符合保持港幣穩定的目的的條件下，可授權指定銀行根據法定權限發行或繼續發行港幣。
          </p>
          <strong>第一百一十二條</strong>
          <p>香港特別行政區不實行外匯管制政策。港幣自由兌換。繼續開放外匯、黃金、證券、期貨等市場。</p>
          <p>香港特別行政區政府保障資金的流動和進出自由。</p>
          <strong>第一百一十三條</strong>
          <p>香港特別行政區的外匯基金，由香港特別行政區政府管理和支配，主要用於調節港元匯價。</p>
          <strong>第一百一十四條</strong>
          <p>香港特別行政區保持自由港地位，除法律另有規定外，不徵收關稅。</p>
          <strong>第一百一十五條</strong>
          <p>香港特別行政區實行自由貿易政策，保障貨物、無形財產和資本的流動自由。</p>
          <strong>第一百一十六條</strong>
          <p>香港特別行政區為單獨的關稅地區。</p>
          <p>
            香港特別行政區可以" 中國香港"
            的名義參加《關稅和貿易總協定》、關於國際紡織品貿易安排等有關國際組織和國際貿易協定，包括優惠貿易安排。
          </p>
          <p>
            香港特別行政區所取得的和以前取得仍繼續有效的出口配額、關稅優惠和達成的其他類似安排，全由香港特別行政區享有。
          </p>
          <strong>第一百一十七條</strong>
          <p>香港特別行政區根據當時的產地規則，可對產品簽發產地來源證。</p>
          <strong>第一百一十八條</strong>
          <p>香港特別行政區政府提供經濟和法律環境，鼓勵各項投資、技術進步並開發新興產業。</p>
          <strong>第一百一十九條</strong>
          <p>
            香港特別行政區政府制定適當政策，促進和協調製造業、商業、旅遊業、房地產業、運輸業、公用事業、服務性行業、漁農業等各行業的發展，並注意環境保護。
          </p>
          <h3 className={styles.chapterTitle} id="chapter-5-section-2">
            第二節: 土地契約
          </h3>
          <strong>第一百二十條</strong>
          <p>
            香港特別行政區成立以前已批出、決定、或續期的超越一九九七年六月三十日年期的所有土地契約和與土地契約有關的一切權利，均按香港特別行政區的法律繼續予以承認和保護。
          </p>
          <strong>第一百二十一條</strong>
          <p>
            從一九八五年五月二十七日至一九九七年六月三十日期間批出的，或原沒有續期權利而獲得續期的，超出一九九七年六月三十日年期而不超過二○四七年六月三十日的一切土地契約，承租人從一九九七年七月一日起不補地價，但需每年繳納相當於當日該土地應課差餉租值百分之三的租金。此後，隨應課差餉租值的改變而調整租金。
          </p>
          <strong>第一百二十二條</strong>
          <p>
            原舊批約地段、鄉村屋地、丁屋地和類似的農村土地，如該土地在一九八四年六月三十日的承租人，或在該日以後批出的丁屋地承租人，其父系為一八九八年在香港的原有鄉村居民，只要該土地的承租人仍為該人或其合法父系繼承人，原定租金維持不變。
          </p>
          <strong>第一百二十三條</strong>
          <p>香港特別行政區成立以後滿期而沒有續期權利的土地契約，由香港特別行政區自行制定法律和政策處理。</p>
          <h3 className={styles.chapterTitle} id="chapter-5-section-3">
            第三節: 航運
          </h3>
          <strong>第一百二十四條</strong>
          <p>香港特別行政區保持原在香港實行的航運經營和管理體制，包括有關海員的管理制度。</p>
          <p>香港特別行政區政府自行規定在航運方面的具體職能和責任。</p>
          <strong>第一百二十五條</strong>
          <p>
            香港特別行政區經中央人民政府授權繼續進行船舶登記，並根據香港特別行政區的法律以" 中國香港"
            的名義頒發有關證件。
          </p>
          <strong>第一百二十六條</strong>
          <p>
            除外國軍用船隻進入香港特別行政區須經中央人民政府特別許可外，其他船舶可根據香港特別行政區法律進出其港口。
          </p>
          <strong>第一百二十七條</strong>
          <p>香港特別行政區的私營航運及與航運有關的企業和私營集裝箱碼頭，可繼續自由經營。</p>
          <h3 className={styles.chapterTitle} id="chapter-5-section-4">
            第四節: 民用航空
          </h3>
          <strong>第一百二十八條</strong>
          <p>香港特別行政區政府應提供條件和採取措施，以保持香港的國際和區域航空中心的地位。</p>
          <strong>第一百二十九條</strong>
          <p>
            香港特別行政區繼續實行原在香港實行的民用航空管理制度，並按中央人民政府關於飛機國籍標誌和登記標誌的規定，設置自己的飛機登記冊。
          </p>
          <p>外國國家航空器進入香港特別行政區須經中央人民政府特別許可。</p>
          <strong>第一百三十條</strong>
          <p>
            香港特別行政區自行負責民用航空的日常業務和技術管理，包括機場管理，在香港特別行政區飛行情報區內提供空中交通服務，和履行國際民用航空組織的區域性航行規劃程序所規定的其他職責。
          </p>
          <strong>第一百三十一條</strong>
          <p>
            中央人民政府經同香港特別行政區政府磋商作出安排，為在香港特別行政區註冊並以香港為主要營業地的航空公司和中華人民共和國的其他航空公司，提供香港特別行政區和中華人民共和國其他地區之間的往返航班。
          </p>
          <strong>第一百三十二條</strong>
          <p>
            凡涉及中華人民共和國其他地區同其他國家和地區的往返並經停香港特別行政區的航班，和涉及香港特別行政區同其他國家和地區的往返並經停中華人民共和國其他地區航班的民用航空運輸協定，由中央人民政府簽訂。
          </p>
          <p>
            中央人民政府在簽訂本條第一款所指民用航空運輸協定時，應考慮香港特別行政區的特殊情況和經濟利益，並同香港特別行政區政府磋商。
          </p>
          <p>
            中央人民政府在同外國政府商談有關本條第一款所指航班的安排時，香港特別行政區政府的代表可作為中華人民共和國政府代表團的成員參加。
          </p>
          <strong>第一百三十三條</strong>
          <p>香港特別行政區政府經中央人民政府具體授權可：</p>
          <ul className={styles.list}>
            <li>( 一 ) 續簽或修改原有的民用航空運輸協定和協議；</li>
            <li>
              ( 二 )
              談判簽訂新的民用航空運輸協定，為在香港特別行政區註冊並以香港為主要營業地的航空公司提供航線，以及過境和技術停降權利；
            </li>
            <li>( 三 ) 同沒有簽訂民用航空運輸協定的外國或地區談判簽訂臨時協議。</li>
          </ul>
          <p>
            不涉及往返、經停中國內地而只往返、經停香港的定期航班，均由本條所指的民用航空運輸協定或臨時協議予以規定。
          </p>
          <strong>第一百三十四條</strong>
          <p>中央人民政府授權香港特別行政區政府：</p>
          <ul className={styles.list}>
            <li>( 一 ) 同其他當局商談並簽訂有關執行本法第一百三十三條所指民用航空運輸協定和臨時協議的各項安排；</li>
            <li>( 二 ) 對在香港特別行政區註冊並以香港為主要營業地的航空公司簽發執照；</li>
            <li>( 三 ) 依照本法第一百三十三條所指民用航空運輸協定和臨時協議指定航空公司；</li>
            <li>( 四 ) 對外國航空公司除往返、經停中國內地的航班以外的其他航班簽發許可證。</li>
          </ul>
          <strong>第一百三十五條</strong>
          <p>香港特別行政區成立前在香港註冊並以香港為主要營業地的航空公司和與民用航空有關的行業，可繼續經營。</p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-6">
            第六章: 教育、科學、文化、體育、宗教、勞工和社會服務
          </h3>
          <strong>第一百三十六條</strong>
          <p>
            香港特別行政區政府在原有教育制度的基礎上，自行制定有關教育的發展和改進的政策，包括教育體制和管理、教學語言、經費分配、考試制度、學位制度和承認學歷等政策。
          </p>
          <p>社會團體和私人可依法在香港特別行政區興辦各種教育事業。</p>
          <strong>第一百三十七條</strong>
          <p>
            各類院校均可保留其自主性並享有學術自由，可繼續從香港特別行政區以外招聘教職員和選用教材。宗教組織所辦的學校可繼續提供宗教教育，包括開設宗教課程。
          </p>
          <p>學生享有選擇院校和在香港特別行政區以外求學的自由。</p>
          <strong>第一百三十八條</strong>
          <p>
            香港特別行政區政府自行制定發展中西醫藥和促進醫療衛生服務的政策。社會團體和私人可依法提供各種醫療衛生服務。
          </p>
          <strong>第一百三十九條</strong>
          <p>香港特別行政區政府自行制定科學技術政策，以法律保護科學技術的研究成果、專利和發明創造。</p>
          <p>香港特別行政區政府自行確定適用於香港的各類科學、技術標準和規格。</p>
          <strong>第一百四十條</strong>
          <p>香港特別行政區政府自行制定文化政策，以法律保護作者在文學藝術創作中所獲得的成果和合法權益。</p>
          <strong>第一百四十一條</strong>
          <p>
            香港特別行政區政府不限制宗教信仰自由，不干預宗教組織的內部事務，不限制與香港特別行政區法律沒有抵觸的宗教活動。
          </p>
          <p>宗教組織依法享有財產的取得、使用、處置、繼承以及接受資助的權利。財產方面的原有權益仍予保持和保護。</p>
          <p>宗教組織可按原有辦法繼續興辦宗教院校、其他學校、醫院和福利機構以及提供其他社會服務。</p>
          <p>香港特別行政區的宗教組織和教徒可與其他地方的宗教組織和教徒保持和發展關係。</p>
          <strong>第一百四十二條</strong>
          <p>香港特別行政區政府在保留原有的專業制度的基礎上，自行制定有關評審各種專業的執業資格的辦法。</p>
          <p>在香港特別行政區成立前已取得專業和執業資格者，可依據有關規定和專業守則保留原有的資格。</p>
          <p>
            香港特別行政區政府繼續承認在特別行政區成立前已承認的專業和專業團體，所承認的專業團體可自行審核和頒授專業資格。
          </p>
          <p>香港特別行政區政府可根據社會發展需要並諮詢有關方面的意見，承認新的專業和專業團體。</p>
          <strong>第一百四十三條</strong>
          <p>香港特別行政區政府自行制定體育政策。民間體育團體可依法繼續存在和發展。</p>
          <strong>第一百四十四條</strong>
          <p>
            香港特別行政區政府保持原在香港實行的對教育、醫療衛生、文化、藝術、康樂、體育、社會福利、社會工作等方面的民間團體機構的資助政策。原在香港各資助機構任職的人員均可根據原有制度繼續受聘。
          </p>
          <strong>第一百四十五條</strong>
          <p>香港特別行政區政府在原有社會福利制度的基礎上，根據經濟條件和社會需要，自行制定其發展、改進的政策。</p>
          <strong>第一百四十六條</strong>
          <p>香港特別行政區從事社會服務的志願團體在不抵觸法律的情況下可自行決定其服務方式。</p>
          <strong>第一百四十七條</strong>
          <p>香港特別行政區自行制定有關勞工的法律和政策。</p>
          <strong>第一百四十八條</strong>
          <p>
            香港特別行政區的教育、科學、技術、文化、藝術、體育、專業、醫療衛生、勞工、社會福利、社會工作等方面的民間團體和宗教組織同內地相應的團體和組織的關係，應以互不隸屬、互不干涉和互相尊重的原則為基礎。
          </p>
          <strong>第一百四十九條</strong>
          <p>
            香港特別行政區的教育、科學、技術、文化、藝術、體育、專業、醫療衛生、勞工、社會福利、社會工作等方面的民間團體和宗教組織可同世界各國、各地區及國際的有關團體和組織保持和發展關係，各該團體和組織可根據需要冠用"
            中國香港" 的名義，參與有關活動。
          </p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-7">
            第七章: 對外事務
          </h3>
          <strong>第一百五十條</strong>
          <p>
            香港特別行政區政府的代表，可作為中華人民共和國政府代表團的成員，參加由中央人民政府進行的同香港特別行政區直接有關的外交談判。
          </p>
          <strong>第一百五十一條</strong>
          <p>
            香港特別行政區可在經濟、貿易、金融、航運、通訊、旅遊、文化、體育等領域以"中國香港"的名義，單獨地同世界各國、各地區及有關國際組織保持和發展關係，簽訂和履行有關協議。
          </p>
          <strong>第一百五十二條</strong>
          <p>
            對以國家為單位參加的、同香港特別行政區有關的、適當領域的國際組織和國際會議，香港特別行政區政府可派遣代表作為中華人民共和國代表團的成員或以中央人民政府和上述有關國際組織或國際會議允許的身份參加，並以"中國香港"的名義發表意見。
          </p>
          <p>香港特別行政區可以"中國香港"的名義參加不以國家為單位參加的國際組織和國際會議。</p>
          <p>
            對中華人民共和國已參加而香港也以某種形式參加了的國際組織，中央人民政府將採取必要措施使香港特別行政區以適當形式繼續保持在這些組織中的地位。
          </p>
          <p>
            對中華人民共和國尚未參加而香港已以某種形式參加的國際組織，中央人民政府將根據需要使香港特別行政區以適當形式繼續參加這些組織。
          </p>
          <strong>第一百五十三條</strong>
          <p>
            中華人民共和國締結的國際協議，中央人民政府可根據香港特別行政區的情況和需要，在徵詢香港特別行政區政府的意見後，決定是否適用於香港特別行政區。
          </p>
          <p>
            中華人民共和國尚未參加但已適用於香港的國際協議仍可繼續適用。中央人民政府根據需要授權或協助香港特別行政區政府作出適當安排，使其他有關國際協議適用於香港特別行政區。
          </p>
          <strong>第一百五十四條</strong>
          <p>
            中央人民政府授權香港特別行政區政府依照法律給持有香港特別行政區永久性居民身份證的中國公民簽發中華人民共和國香港特別行政區護照，給在香港特別行政區的其他合法居留者簽發中華人民共和國香港特別行政區的其他旅行證件。上述護照和證件，前往各國和各地區有效，並載明持有人有返回香港特別行政區的權利。
          </p>
          <p>對世界各國或各地區的人入境、逗留和離境，香港特別行政區政府可實行出入境管制。</p>
          <strong>第一百五十五條</strong>
          <p>中央人民政府協助或授權香港特別行政區政府與各國或各地區締結互免簽證協議。</p>
          <strong>第一百五十六條</strong>
          <p>香港特別行政區可根據需要在外國設立官方或半官方的經濟和貿易機構，報中央人民政府備案。</p>
          <strong>第一百五十七條</strong>
          <p>外國在香港特別行政區設立領事機構或其他官方、半官方機構，須經中央人民政府批准。</p>
          <p>已同中華人民共和國建立正式外交關係的國家在香港設立的領事機構和其他官方機構，可予保留。</p>
          <p>
            尚未同中華人民共和國建立正式外交關係的國家在香港設立的領事機構和其他官方機構，可根據情況允許保留或改為半官方機構。
          </p>
          <p>尚未為中華人民共和國承認的國家，只能在香港特別行政區設立民間機構。</p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-8">
            第八章: 本法的解釋和修改
          </h3>
          <strong>第一百五十八條</strong>
          <p>本法的解釋權屬於全國人民代表大會常務委員會。</p>
          <p>
            全國人民代表大會常務委員會授權香港特別行政區法院在審理案件時對本法關於香港特別行政區自治範圍內的條款自行解釋。
          </p>
          <p>
            香港特別行政區法院在審理案件時對本法的其他條款也可解釋。但如香港特別行政區法院在審理案件時需要對本法關於中央人民政府管理的事務或中央和香港特別行政區關係的條款進行解釋，而該條款的解釋又影響到案件的判決，在對該案件作出不可上訴的終局判決前，應由香港特別行政區終審法院請全國人民代表大會常務委員會對有關條款作出解釋。如全國人民代表大會常務委員會作出解釋，香港特別行政區法院在引用該條款時，應以全國人民代表大會常務委員會的解釋為準。但在此以前作出的判決不受影響。
          </p>
          <p>全國人民代表大會常務委員會在對本法進行解釋前，徵詢其所屬的香港特別行政區基本法委員會的意見。</p>
          <strong>第一百五十九條</strong>
          <p>本法的修改權屬於全國人民代表大會。</p>
          <p>
            本法的修改提案權屬於全國人民代表大會常務委員會，國務院和香港特別行政區。香港特別行政區的修改議案，須經香港特別行政區的全國人民代表大會代表三分之二多數、香港特別行政區立法會全體議員三分之二多數和香港特別行政區行政長官同意後，交由香港特別行政區出席全國人民代表大會的代表團向全國人民代表大會提出。
          </p>
          <p>本法的修改議案在列入全國人民代表大會的議程前，先由香港特別行政區基本法委員會研究並提出意見。</p>
          <p>本法的任何修改，均不得同中華人民共和國對香港既定的基本方針政策相抵觸。</p>
          <hr />
          <h3 className={styles.chapterTitle} id="chapter-9">
            第九章: 附則
          </h3>
          <strong>第一百六十條</strong>
          <p>
            香港特別行政區成立時，香港原有法律除由全國人民代表大會常務委員會宣佈為同本法抵觸者外，採用為香港特別行政區法律，如以後發現有的法律與本法抵觸，可依照本法規定的程序修改或停止生效。
          </p>
          <p>
            在香港原有法律下有效的文件、證件、契約和權利義務，在不抵觸本法的前提下繼續有效，受香港特別行政區的承認和保護。
          </p>
        </div>

        <div className={`${styles.sidebarContainer} ${sidebarVisible ? styles.visible : ''}`}>
          {isMobile && <PageTitle style={{ padding: '0.4rem .8rem', marginBottom: '0.5rem' }}>目錄</PageTitle>}
          <Sidebar onClick={handleSidebarClick} />
        </div>
      </div>

      {isMobile && (
        <button className={styles.menuButton} aria-label="目錄" onClick={handleMenuClick}>
          {sidebarVisible ? <X /> : <Menu />}
        </button>
      )}
    </div>
  );
}

HomePage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default withResponsive(HomePage);
