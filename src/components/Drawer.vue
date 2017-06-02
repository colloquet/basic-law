<template>
  <div id="offcanvas-nav" class="uk-offcanvas">
    <div class="uk-offcanvas-bar">
      <nav-links class-name="uk-nav uk-nav-offcanvas"></nav-links>
    </div>
  </div>
</template>

<script>
import NavLinks from './NavLinks'

export default {
  components: {
    NavLinks,
  },
}
</script>

<style>
@media (max-width: 767px) {
  .uk-navbar {
    margin: 0 -25px;
  }
}
</style>
