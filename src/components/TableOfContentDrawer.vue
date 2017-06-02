<template>
  <div id="offcanvas-table-of-content" class="uk-offcanvas">
    <div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
      <table-of-content position="offcanvas"></table-of-content>
    </div>
  </div>
</template>

<script>
import TableOfContent from './TableOfContent'

export default {
  components: {
    TableOfContent,
  },
}
</script>
