<template>
  <ul :class="`uk-nav uk-nav-${position}`" data-uk-scrollspy-nav="{closest:'li'}">
    <li><a href="#chapter-1" data-uk-smooth-scroll="{offset: 55}">第一章: 總則</a></li>
    <li><a href="#chapter-2" data-uk-smooth-scroll="{offset: 55}">第二章: 中央和香港特別行政區的關係</a></li>
    <li><a href="#chapter-3" data-uk-smooth-scroll="{offset: 55}">第三章: 居民的基本權利和義務</a></li>
    <li>
      <a href="#chapter-4" data-uk-smooth-scroll="{offset: 55}">第四章: 政治體制</a>
      <ul class="uk-nav-sub">
        <li>
          <ul>
            <li><a href="#chapter-4-section-1" data-uk-smooth-scroll="{offset: 55}">第一節 - 行政長官</a></li>
            <li><a href="#chapter-4-section-2" data-uk-smooth-scroll="{offset: 55}">第二節 - 行政機關</a></li>
            <li><a href="#chapter-4-section-3" data-uk-smooth-scroll="{offset: 55}">第三節 - 立法機關</a></li>
            <li><a href="#chapter-4-section-4" data-uk-smooth-scroll="{offset: 55}">第四節 - 司法機關</a></li>
            <li><a href="#chapter-4-section-5" data-uk-smooth-scroll="{offset: 55}">第五節 - 區域組織</a></li>
            <li><a href="#chapter-4-section-6" data-uk-smooth-scroll="{offset: 55}">第六節 - 公務人員</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#chapter-5" data-uk-smooth-scroll="{offset: 55}">第五章: 經濟</a>
      <ul class="uk-nav-sub">
        <li>
          <ul>
            <li><a href="#chapter-5-section-1" data-uk-smooth-scroll="{offset: 55}">第一節 - 財政、金融、貿易和工商業</a></li>
            <li><a href="#chapter-5-section-2" data-uk-smooth-scroll="{offset: 55}">第二節 - 土地契約</a></li>
            <li><a href="#chapter-5-section-3" data-uk-smooth-scroll="{offset: 55}">第三節 - 航運</a></li>
            <li><a href="#chapter-5-section-4" data-uk-smooth-scroll="{offset: 55}">第四節 - 民用航空</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#chapter-6" data-uk-smooth-scroll="{offset: 55}">第六章: 教育、科學、文化、體育、宗教、勞工和社會服務</a></li>
    <li><a href="#chapter-7" data-uk-smooth-scroll="{offset: 55}">第七章: 對外事務</a></li>
    <li><a href="#chapter-8" data-uk-smooth-scroll="{offset: 55}">第八章: 本法的解釋和修改</a></li>
    <li><a href="#chapter-9" data-uk-smooth-scroll="{offset: 55}">第九章: 附則</a></li>
  </ul>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true,
      validator: position => position === 'side' || position === 'offcanvas',
    },
  },
}
</script>

<style>
.uk-nav-side>li>a, .uk-nav-side ul a {
  font-size: 12px;
  line-height: 1.5;
}

.uk-nav-side>li.uk-active>a {
  background: #34495e;
}

.uk-nav-sub .uk-active > a {
  text-decoration: underline;
}
</style>

