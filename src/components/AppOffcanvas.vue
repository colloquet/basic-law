<template>
  <div id="offcanvas-nav" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
      <app-nav-links class-name="uk-nav uk-nav-offcanvas"></app-nav-links>
    </div>
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
@media (max-width: 767px) {
  .uk-navbar {
    margin: 0 -25px;
  }
}
</style>
