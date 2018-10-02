import React from 'react'
import PropTypes from 'prop-types'

import { shuffle } from '../../utils'
import AnswerList from '../AnswerList/AnswerList'
import { questions } from '../../questions.json'
import styles from './QuestionList.module.scss'

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
      <div key={qIndex} className={styles.container}>
        <p className={styles.questionLabel}>
          {qIndex + 1}. {question.text}
        </p>
        <AnswerList list={question.answers} qIndex={qIndex} />
      </div>
    ))
  }
}

export default QuestionList
