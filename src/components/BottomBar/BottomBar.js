// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, List, HelpCircle } from 'react-feather';

import styles from './BottomBar.module.scss';

function BottomBar() {
  return (
    <div className={styles.container}>
      <NavLink to="/" exact className={styles.navItem} activeClassName={styles.active}>
        <BookOpen size="24" />
        <span>全文</span>
      </NavLink>
      <NavLink to="/practice" className={styles.navItem} activeClassName={styles.active}>
        <List size="24" />
        <span>試題</span>
      </NavLink>
      <NavLink to="/about" className={styles.navItem} activeClassName={styles.active}>
        <HelpCircle size="24" />
        <span>關於</span>
      </NavLink>
    </div>
  );
}

export default BottomBar;
