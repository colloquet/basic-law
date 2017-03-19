<template>
  <div class="practice">
    <h1>香港CRE基本法測試練習試題</h1>

    <hr>

    <div class="uk-flex uk-width-1-1 uk-margin-bottom" data-uk-button-radio>
      <button class="uk-button uk-width-1-2 uk-active" @click="currentView = 'AllQuestions'">全部問題</button>
      <button class="uk-button uk-width-1-2" @click="currentView = 'RandomQuestions'">隨機15條</button>
    </div>

    <div class="uk-alert" data-uk-alert>
      <a href="#" class="uk-alert-close uk-close"></a>
      <p>試題的次序每次都是隨機，未來將陸續加入更多練習題。</p>
    </div>


    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="currentView" :questions="questions"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
/* global ga */
import AllQuestions from '../components/AllQuestions';
import RandomQuestions from '../components/RandomQuestions';
import questions from '../questions';

export default {
  components: {
    AllQuestions,
    RandomQuestions,
  },
  head: {
    title: {
      inner: '香港CRE基本法測試練習試題',
    },
    meta: [
      { name: 'description', content: '提供超過50條模擬香港基本法CRE測試練習試題。', id: 'meta-description' },
    ],
  },
  data() {
    return {
      currentView: 'AllQuestions',
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
