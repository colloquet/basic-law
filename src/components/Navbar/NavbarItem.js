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

  .is-dark & {
    color: rgba(255, 255, 255, 0.88);
  }

  .active &,
  &:hover {
    background: #ea6153;

    .is-dark & {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`

function NavbarItem({ children, logo, ...props }) {
  return (
    <NavLink {...props} activeClassName={logo ? null : 'active'}>
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
