// @flow
import React from 'react';

import type { Node } from 'react';

import styles from './PageTitle.module.scss';

function PageTitle({ children, ...props }: { children: Node }) {
  return (
    <h2 className={styles.pageTitle} {...props}>
      {children}
    </h2>
  );
}

export default PageTitle;
