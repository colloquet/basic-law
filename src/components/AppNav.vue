<template>
  <div class="site-nav">
    <nav class="uk-navbar uk-navbar-attached">
      <div class="uk-container uk-container-center">
        <router-link to="/" class="uk-navbar-brand uk-link-reset uk-hidden-small">Basiclaw.hk</router-link>
        <div class="uk-navbar-flip">
          <app-nav-links class-name="uk-navbar-nav uk-hidden-small"></app-nav-links>
        </div>
        <a href="#offcanvas-nav" class="uk-navbar-toggle uk-link-reset uk-visible-small" data-uk-offcanvas="{mode: 'slide'}"></a>
        <a href="#offcanvas-table-of-content" class="uk-link-reset uk-float-right uk-link-reset uk-visible-small table-of-content-toggle" data-uk-offcanvas="{mode: 'slide'}" v-show="$route.path == '/'">
          目錄
        </a>
        <div class="uk-navbar-content uk-visible-small">
          {{ $route.name }}
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import AppNavLinks from './AppNavLinks';

export default {
  components: {
    AppNavLinks,
  },
};
</script>

<style>
.site-nav {
  position: fixed;
  /*border-bottom: 1px solid #ddd;*/
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
}

.table-of-content-toggle {
  display: block;
  height: 40px;
  padding: 0 15px;
  font-size: 14px;
  color: #fff;
  line-height: 40px;
  text-decoration: none;
}

/*uikit override*/
.uk-navbar {
  background: #e74c3c;
  color: #fff;
}

.uk-navbar-nav > li > a {
  color: #fff;
}

.uk-navbar-nav>li.uk-open>a, .uk-navbar-nav>li:hover>a, .uk-navbar-nav>li>a:focus {
  background-color: #ea6153;
  color: #fff;
}

.uk-navbar-nav>li.uk-active>a {
  background-color: #ea6153;
  color: #fff;
}

.uk-navbar-toggle {
  color: #fff;
}

.uk-navbar-nav>li>a {
  font-family: inherit;
}
</style>
