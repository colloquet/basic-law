<template>
  <div class="practice">
    <h1>香港CRE基本法測試練習試題</h1>

    <hr>

    <div class="uk-flex uk-width-1-1 uk-margin-bottom">
      <a
        href="#all"
        class="uk-button uk-width-1-2"
        :class="{ 'uk-active': type === 'all' }"
        @click.prevent="updateType('all')"
      >
        全部問題
      </a>

      <a
        href="#random"
        class="uk-button uk-width-1-2"
        :class="{ 'uk-active': type === 'random' }"
        @click.prevent="updateType('random')"
      >
        隨機15條
      </a>
    </div>

    <div class="uk-alert" data-uk-alert>
      <a href="#" class="uk-alert-close uk-close"></a>
      <p>試題的次序每次都是隨機，未來將陸續加入更多練習題。</p>
    </div>

    <transition name="fade" mode="out-in">
      <quiz :key="type" :type="type"></quiz>
    </transition>
  </div>
</template>

<script>
import Quiz from '../components/Quiz'

export default {
  components: {
    Quiz,
  },
  metaInfo: {
    title: '香港CRE基本法測試練習試題',
    meta: [
      { name: 'description', content: '提供超過50條模擬香港基本法CRE測試練習試題。' },
    ],
  },
  methods: {
    updateType(type) {
      this.type = type
    },
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal.query.type !== oldVal.query.type) {
        this.type = newVal.query.type
      }
    },
  },
  data() {
    return {
      type: 'all',
    }
  },
  beforeMount() {
    if (this.$route.query.type) {
      this.type = this.$route.query.type
    }
  },
}
</script>

<style>
span[class*=uk-icon] {
  opacity: 0;
}

input[type=radio]:checked ~ span[class*=uk-icon] {
  opacity: 1;
}

[data-correct=true]:checked + span {
  color: #27ae60;
}

[data-correct=false]:checked + span {
  color: #e74c3c;
}

label {
  cursor: pointer;
}
</style>
