import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { shuffle } from '../utils'
import AnswerList from './AnswerList'
import questions from '../questions'

const Question = styled.div`
  text-align: justify;
  line-height: 24px;
  letter-spacing: 1px;
  font-size: 18px;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;

  & + & {
    margin-top: 2rem;
  }
`

const QuestionLabel = styled.p`
  margin: 0 0 0.5rem;
  font-weight: bold;
`

class QuestionList extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
  }

  static defaultProps = {
    size: null,
  }

  state = {
    questions: [],
  }

  static getDerivedStateFromProps({ size }) {
    return { questions: shuffle(questions).slice(0, size || questions.length) }
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
