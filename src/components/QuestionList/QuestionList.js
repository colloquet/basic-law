import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { shuffle } from '../../utils';
import AnswerList from '../AnswerList/AnswerList';
import { questions } from '../../questions.json';
import styles from './QuestionList.module.scss';

function QuestionList({ size }) {
  const questionsList = useMemo(() => shuffle(questions).slice(0, size || questions.length), [size]);

  return questionsList.map((question, qIndex) => (
    <div key={qIndex} className={styles.container}>
      <p className={styles.questionLabel}>
        {qIndex + 1}. {question.text}
      </p>
      <AnswerList list={question.answers} qIndex={qIndex} />
    </div>
  ));
}

QuestionList.propTypes = {
  size: PropTypes.number,
};

QuestionList.defaultProps = {
  size: null,
};

export default React.memo(QuestionList);
