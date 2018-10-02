import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import SunIcon from 'react-feather/dist/icons/sun'
import MoonIcon from 'react-feather/dist/icons/moon'

import store from '../../storage'
import withResponsive from '../withResponsive'
import TopAppBar from '../TopAppBar/TopAppBar'
import NavbarItem from './NavbarItem'
import styles from './Navbar.module.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: store.get('darkMode') || false,
    }
  }

  toggleDarkMode = () => {
    this.setState(({ darkMode}) => ({
      darkMode: !darkMode,
    }), () => {
      store.set('darkMode', this.state.darkMode)
    })
  }

  render() {
    const { darkMode } = this.state
    const { isMobile } = this.props

    return (
      <TopAppBar zIndex={2} disabled={!isMobile}>
        <Helmet>
          {darkMode && <html data-dark-mode />}
        </Helmet>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <NavbarItem to="/" logo>
              BasicLaw.hk
            </NavbarItem>

            <button className={styles.nightModeToggle} onClick={this.toggleDarkMode} title={darkMode ? '開燈' : '熄燈'}>
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
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
    )
  }
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default withResponsive(Navbar)
