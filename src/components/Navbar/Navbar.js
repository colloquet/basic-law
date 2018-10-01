import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SunIcon from 'react-feather/dist/icons/sun'
import MoonIcon from 'react-feather/dist/icons/moon'

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

function Navbar({ isMobile, darkMode, onToggleDarkMode }) {
  return (
    <TopAppBar zIndex={2} disabled={!isMobile}>
      <Wrapper>
        <Container>
          <NavbarItem to="/" logo>
            BasicLaw.hk
          </NavbarItem>

          <NightModeToggle onClick={onToggleDarkMode} title={darkMode ? '開燈' : '熄燈'}>
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

Navbar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
}

export default withResponsive(Navbar)
