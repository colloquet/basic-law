import React from 'react'
import PropTypes from 'prop-types'
import CheckIcon from 'react-feather/dist/icons/check'
import RemoveIcon from 'react-feather/dist/icons/x'

import { shuffle } from '../../utils'
import styles from './AnswerList.module.scss'

class AnswerList extends React.PureComponent {
  static propTypes = {
    qIndex: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
  }

  state = {
    answers: [],
  }

  static getDerivedStateFromProps({ list }) {
    return { answers: shuffle(list) }
  }

  render() {
    const { answers } = this.state
    const { qIndex } = this.props

    return (
      <ul className={styles.list}>
        {answers.map((answer, aIndex) => {
          const id = `question-${qIndex}-answer-${aIndex}`
          return (
            <li key={id} className={styles.listItem}>
              <input
                type="radio"
                id={id}
                className={styles.radio}
                name={`question-${qIndex}`}
                data-correct={answer.correct}
              />
              <label htmlFor={id} className={styles.label}>
                {answer.text}
              </label>
              {answer.correct ? <CheckIcon size={16} /> : <RemoveIcon size={16} />}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default AnswerList
