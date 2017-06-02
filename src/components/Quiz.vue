<template>
  <ul class="uk-grid">
    <li class="uk-width-1-1 uk-margin-large-bottom" v-for="(question, questionIndex) in shuffledQuestions">
      <div class="uk-panel">
        <h3 class="uk-panel-title">{{ questionIndex + 1 }}. {{ question.text }}</h3>
        <div class="uk-margin-small-bottom" v-for="(answer, answerIndex) in shuffleArray(question.answers)">
          <label :for="`question-${questionIndex}-answer-${answerIndex}`">
            <input type="radio" :id="`question-${questionIndex}-answer-${answerIndex}`" :name="`question-${questionIndex}`" :data-correct="answer.correct? 'true' : 'false'">
            <span>{{ answer.text }}</span>
            <span :class="{'uk-icon-check uk-text-success': answer.correct, 'uk-icon-remove uk-text-danger': !answer.correct}"></span>
          </label>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import questions from '../questions'

export default {
  props: ['type'],
  data() {
    return {
      questions,
    }
  },
  computed: {
    shuffledQuestions() {
      const length = this.type === 'all' ? this.questions.length : 15

      return this.shuffleArray(this.questions).slice(0, length)
    },
  },
  methods: {
    shuffleArray(array) {
      const newArray = array
      let counter = newArray.length

      while (counter > 0) {
        const index = Math.floor(Math.random() * counter)

        counter -= 1

        const temp = newArray[counter]
        newArray[counter] = newArray[index]
        newArray[index] = temp
      }

      return newArray
    },
  },
}
</script>
