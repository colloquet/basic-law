import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Check, X } from 'react-feather';

import { shuffle } from '../../utils';
import styles from './AnswerList.module.scss';

function AnswerList({ qIndex, list }) {
  const answers = useMemo(() => shuffle(list), [list])

  return (
    <ul className={styles.list}>
      {answers.map((answer, aIndex) => {
        const id = `question-${qIndex}-answer-${aIndex}`;
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
            {answer.correct ? <Check size={16} /> : <X size={16} />}
          </li>
        );
      })}
    </ul>
  );
}

AnswerList.propTypes = {
  qIndex: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
};

export default React.memo(AnswerList);
