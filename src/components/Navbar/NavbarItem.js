import React from 'react'
import NavLink from 'react-router-dom/NavLink'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Inner = styled.div`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 3rem;
  line-height: 3rem;
  white-space: nowrap;

  &:hover {
    background: #ea6153;
  }

  @media (max-width: 767px) {
    padding: 0 0.5rem;
  }
`

function NavbarItem({ children, logo, ...props }) {
  const activeStyle = {
    background: logo ? 'transparent' : '#ea6153',
  }
  return (
    <NavLink {...props} activeStyle={activeStyle}>
      <Inner>{children}</Inner>
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
