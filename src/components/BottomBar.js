import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import styled from 'styled-components'
import BookIcon from 'react-feather/dist/icons/book-open'
import ListIcon from 'react-feather/dist/icons/list'
import HelpIcon from 'react-feather/dist/icons/help-circle'

const Container = styled.div`
  position: fixed;
  display: flex;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  bottom: 0;
  left: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  z-index: 3;
  transition: background 0.5s;
  will-change: background;

  .is-dark & {
    background: #000;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 3.5rem;
  text-align: center;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  color: inherit;

  .is-dark & {
    color: #888;
  }

  &:hover,
  &:active {
    color: inherit;
  }

  span {
    margin-top: 2px;
  }

  &.active {
    color: #e74c3c;

    .is-dark & {
      color: rgba(255, 255, 255, 0.78);
    }
  }
`

function BottomBar() {
  return (
    <Container>
      <NavItem to="/" exact>
        <BookIcon size="24" />
        <span>全文</span>
      </NavItem>
      <NavItem to="/practice">
        <ListIcon size="24" />
        <span>試題</span>
      </NavItem>
      <NavItem to="/about">
        <HelpIcon size="24" />
        <span>關於</span>
      </NavItem>
    </Container>
  )
}

export default BottomBar
