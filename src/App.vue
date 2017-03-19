<template>
  <div>

    <app-nav></app-nav>

    <div class="uk-container uk-container-center">

      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <app-footer></app-footer>

      <app-offcanvas></app-offcanvas>

    </div>

  </div>
</template>

<script>
import AppNav from './components/AppNav';
import AppFooter from './components/AppFooter';
import AppOffcanvas from './components/AppOffcanvas';

export default {
  components: {
    AppNav,
    AppFooter,
    AppOffcanvas,
  },
};
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

/*page transition*/
.fade-enter-active, .fade-leave-active {
  transition: all .2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(5px);
}

/*uikit override*/
@media (min-width: 768px) {
  .uk-grid-divider>[class*=uk-width-medium-]:not(.uk-width-medium-1-1):nth-child(n+2) {
    border-left: 1px dashed #ddd;
  }
}
</style>
