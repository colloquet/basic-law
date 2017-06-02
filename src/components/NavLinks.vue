<template>
  <ul :class="className">
    <router-link to="/" exact tag="li"><a>基本法全文</a></router-link>
    <router-link to="/practice" tag="li"><a>CRE基本法測試練習試題</a></router-link>
    <router-link to="/about" tag="li"><a>關於</a></router-link>
  </ul>
</template>

<script>
export default {
  props: ['class-name'],
}
</script>
