// @flow
import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <p>
        <span title="Coded">&lt;/&gt;</span> in{' '}
        <span title="Hong Kong" role="img" aria-label="Hong Kong">
          🇭🇰
        </span>{' '}
        by{' '}
        <a href="https://colloque.io/" target="_blank" rel="noopener noreferrer">
          Colloque Tsui
        </a>
        <br />
        Source code available on{' '}
        <a href="https://github.com/colloquet/basic-law" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <div
        className="fb-like"
        data-href="https://basiclaw.hk/"
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-show-faces="true"
        data-share="true"
      />
    </div>
  );
}

export default Footer;
