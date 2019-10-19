// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

import type { Node } from 'react';

import styles from './NavbarItem.module.scss';

type Props = { children: Node, logo: boolean, to: string };

function NavbarItem({ children, logo, to, ...props }: Props) {
  return (
    <NavLink
      to={to}
      className={`${styles.navLink} ${logo ? styles.isLogo : ''}`}
      activeClassName={logo ? '' : styles.active}
      {...props}
    >
      {children}
    </NavLink>
  );
}

NavbarItem.defaultProps = {
  logo: false,
};

export default NavbarItem;
