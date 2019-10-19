// @flow
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

import type { Match } from 'react-router-dom';

import PageTitle from '../../components/PageTitle/PageTitle';
import QuestionList from '../../components/QuestionList/QuestionList';
import styles from './PracticePage.module.scss';

function PracticePage({ match }: { match: Match }) {
  return (
    <div>
      <Helmet title="香港CRE基本法測試練習試題" titleTemplate="%s | 香港CRE基本法測試" />
      <PageTitle>香港CRE基本法測試練習試題</PageTitle>
      <hr />

      <div className={styles.buttonGroup}>
        <NavLink exact to={match.url} activeClassName={styles.active} className={styles.button}>
          全部問題
        </NavLink>
        <NavLink to={`${match.url}/random`} activeClassName={styles.active} className={styles.button}>
          隨機15條
        </NavLink>
      </div>

      <Route exact path={match.url} render={() => <QuestionList />} />
      <Route path={`${match.url}/random`} render={() => <QuestionList size={15} />} />
    </div>
  );
}

export default PracticePage;
