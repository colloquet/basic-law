import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.scss';

function PageTitle({ children, ...props }) {
  return (
    <h2 className={styles.pageTitle} {...props}>
      {children}
    </h2>
  );
}

PageTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PageTitle;
