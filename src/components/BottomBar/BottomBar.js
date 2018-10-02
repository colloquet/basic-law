import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import BookIcon from 'react-feather/dist/icons/book-open'
import ListIcon from 'react-feather/dist/icons/list'
import HelpIcon from 'react-feather/dist/icons/help-circle'

import styles from './BottomBar.module.scss'

function BottomBar() {
  return (
    <div className={styles.container}>
      <NavLink to="/" exact  className={styles.navItem} activeClassName={styles.active}>
        <BookIcon size="24" />
        <span>全文</span>
      </NavLink>
      <NavLink to="/practice" className={styles.navItem} activeClassName={styles.active}>
        <ListIcon size="24" />
        <span>試題</span>
      </NavLink>
      <NavLink to="/about" className={styles.navItem} activeClassName={styles.active}>
        <HelpIcon size="24" />
        <span>關於</span>
      </NavLink>
    </div>
  )
}

export default BottomBar
