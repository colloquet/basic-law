import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import PropTypes from 'prop-types'

import styles from './NavbarItem.module.scss'

function NavbarItem({ children, logo, ...props }) {
  return (
    <NavLink {...props} className={styles.navLink} activeClassName={logo ? null : styles.active}>
      {children}
    </NavLink>
  )
}

NavbarItem.defaultProps = {
  logo: false,
}

NavbarItem.propTypes = {
  children: PropTypes.string.isRequired,
  logo: PropTypes.bool,
}

export default NavbarItem
