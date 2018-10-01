import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SunIcon from 'react-feather/dist/icons/sun'
import MoonIcon from 'react-feather/dist/icons/moon'

import store from '../../storage'

import withResponsive from '../withResponsive'
import TopAppBar from '../TopAppBar'
import NavbarItem from './NavbarItem'

const Wrapper = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #e74c3c;
  transition: background 0.5s;
  will-change: background;

  .is-dark & {
    background: #282828;
  }
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`

const NavbarRight = styled.div`
  position: relative;
  display: none;
  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NightModeToggle = styled.button`
  background: transparent;
  border: 0;
  padding: 0 1rem;
  margin-left: auto;
  outline: 0;
  color: #fff;
  cursor: pointer;

  .is-dark & {
    color: rgba(255, 255, 255, 0.88);
  }
`

class Navbar extends React.PureComponent {
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
          <html className={darkMode ? 'is-dark' : ''} />
        </Helmet>
        <Wrapper>
          <Container>
            <NavbarItem to="/" logo>
              BasicLaw.hk
            </NavbarItem>

            <NightModeToggle onClick={this.toggleDarkMode} title={darkMode ? '開燈' : '熄燈'}>
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </NightModeToggle>
            <NavbarRight>
              <NavbarItem to="/" exact>
                基本法全文
              </NavbarItem>
              <NavbarItem to="/practice">CRE基本法測試練習試題</NavbarItem>
              <NavbarItem to="/about">關於</NavbarItem>
            </NavbarRight>
          </Container>
        </Wrapper>
      </TopAppBar>
    )
  }
}

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default withResponsive(Navbar)
