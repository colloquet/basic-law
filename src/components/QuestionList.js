import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'

import AnswerList from './AnswerList'
import questions from '../questions'

const Question = styled.div`
  & + & {
    margin-top: 2rem;
  }
`

const QuestionLabel = styled.h3`
  margin: 0 0 0.5rem;
`

class QuestionList extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
  }

  state = {
    questions: [],
  }

  static getDerivedStateFromProps({ size }) {
    return { questions: take(shuffle(questions), size || questions.length) }
  }

  render() {
    return this.state.questions.map((question, qIndex) => (
      <Question key={qIndex}>
        <QuestionLabel>
          {qIndex + 1}. {question.text}
        </QuestionLabel>
        <AnswerList list={question.answers} qIndex={qIndex} />
      </Question>
    ))
  }
}

export default QuestionList
