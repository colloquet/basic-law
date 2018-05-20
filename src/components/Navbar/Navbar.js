import React from 'react'
import styled from 'styled-components'

import withResponsive from '../withResponsive'
import TopAppBar from '../TopAppBar'
import NavbarItem from './NavbarItem'

const Wrapper = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #e74c3c;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`

const NavbarRight = styled.div`
  position: relative;
  display: none;
  margin-left: auto;
  overflow: hidden;

  @media (min-width: 768px) {
    display: flex;
  }
`

function Navbar({ isMobile }) {
  return (
    <TopAppBar zIndex={2} disabled={!isMobile}>
      <Wrapper>
        <Container>
          <NavbarItem to="/" logo>
            BasicLaw.hk
          </NavbarItem>

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

export default withResponsive(Navbar)
