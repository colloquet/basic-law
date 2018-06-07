import React from 'react'
import styled from 'styled-components'
import shuffle from 'lodash/shuffle'
import take from 'lodash/take'

import AnswerList from './AnswerList'

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
`

class QuestionList extends React.PureComponent {
  state = {
    questions: [],
  }

  componentWillMount() {
    const { list, size } = this.props
    this.setState({ questions: take(shuffle(list), size || list.length) })
  }

  render() {
    const { questions } = this.state
    return questions.map((question, qIndex) => (
      <Question key={question.text}>
        <QuestionLabel>
          {qIndex + 1}. {question.text}
        </QuestionLabel>
        <AnswerList list={question.answers} qIndex={qIndex} />
      </Question>
    ))
  }
}

export default QuestionList
