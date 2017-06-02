<template>
  <div>

    <navbar></navbar>

    <div class="uk-container uk-container-center">

      <router-view></router-view>

      <div class="uk-text-center uk-margin-large-bottom site-footer">
        <hr>
        <p class="uk-text-muted">Made in Hong Kong by <a href="http://colloquet.github.io/" target="_blank">Colloque Tsui</a></p>
        <div class="fb-like" data-href="https://basiclaw.hk/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
      </div>

    </div>

    <drawer></drawer>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'

export default {
  components: {
    Navbar,
    Drawer,
  },
  metaInfo: {
    title: '香港CRE基本法測試',
    titleTemplate: '%s | 香港CRE基本法測試',
  },
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  padding-top: 90px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lantinghei TC", "Microsoft JhengHei", sans-serif;
  letter-spacing: 1px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: inherit;
}

hr {
  border-top: 1px dashed #ddd;
}

/*uikit override*/
@media (min-width: 768px) {
  .uk-grid-divider>[class*=uk-width-medium-]:not(.uk-width-medium-1-1):nth-child(n+2) {
    border-left: 1px dashed #ddd;
  }
}
</style>
