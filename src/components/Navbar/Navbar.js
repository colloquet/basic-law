// @flow
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Sun, Moon } from 'react-feather';

import withResponsive from '../withResponsive';
import withTheme from '../withTheme';
import TopAppBar from '../TopAppBar/TopAppBar';
import NavbarItem from './NavbarItem';
import styles from './Navbar.module.scss';

function Navbar({ isMobile, darkMode, toggleDarkMode }) {
  return (
    <TopAppBar zIndex={2} disabled={!isMobile}>
      <Helmet>
        {darkMode && <html data-dark-mode />}
        <meta name="theme-color" content={darkMode ? '#282828' : '#e74c3c'} />
      </Helmet>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <NavbarItem to="/" logo>
            BasicLaw.hk
          </NavbarItem>

          <button className={styles.nightModeToggle} onClick={toggleDarkMode} title={darkMode ? '開燈' : '熄燈'}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className={styles.navbarRight}>
            <NavbarItem to="/" exact>
              基本法全文
            </NavbarItem>
            <NavbarItem to="/practice">CRE基本法測試練習試題</NavbarItem>
            <NavbarItem to="/about">關於</NavbarItem>
          </div>
        </div>
      </div>
    </TopAppBar>
  );
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default withResponsive(withTheme(Navbar));
