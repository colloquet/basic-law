<template>
  <div class="practice">
    <h1>香港CRE基本法模擬考試</h1>

    <hr>

    <button class="uk-button" @click="started = !started">Start</button>

    <transition name="fade" mode="out-in">
      <div v-if="started">
        <random-questions :questions="questions"></random-questions>
      </div>
    </transition>

  </div>
</template>

<script>
/* global ga */
import RandomQuestions from '../components/RandomQuestions';
import questions from '../questions';

export default {
  components: {
    RandomQuestions,
  },
  head: {
    title: {
      inner: '香港CRE基本法模擬考試',
    },
    meta: [
      { name: 'description', content: '提供超過50條模擬香港基本法CRE測試練習試題。', id: 'meta-description' },
    ],
  },
  data() {
    return {
      started: false,
      questions,
    };
  },
  mounted() {
    ga('send', 'pageview');
  },
};
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
