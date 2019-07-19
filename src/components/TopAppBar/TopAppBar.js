import React from 'react';
import PropTypes from 'prop-types';

import styles from './TopAppBar.module.scss';

class TopAppBar extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    zIndex: PropTypes.number,
    maxHeight: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    zIndex: 1,
    maxHeight: 64,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.lastScrollPosition = window ? window.scrollY : 0;
    this.topAppBarHeight = null;
    this.wasDocked = true;
    this.isDockedShowing = true;
    this.currentAppBarOffsetTop = 0;
    this.isCurrentlyBeingResized = false;
  }

  componentDidMount() {
    this.topAppBarHeight = this.appBar.clientHeight;
    if (!this.props.disabled) {
      this.init();
    }
  }

  componentDidUpdate({ disabled }) {
    if (disabled !== this.props.disabled) {
      if (this.props.disabled) {
        this.destroy();
      } else {
        this.init();
      }
    }
  }

  componentWillUnmount() {
    if (!this.props.disabled) {
      this.destroy();
    }
  }

  init = () => {
    window.addEventListener('scroll', this.scrollHandler);
  };

  destroy = () => {
    window.removeEventListener('scroll', this.scrollHandler);
    this.appBar.style.top = 0;
  };

  checkForUpdate = () => {
    const offscreenBoundaryTop = -this.topAppBarHeight;
    const hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
    const hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
    const partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

    if (partiallyShowing) {
      this.wasDocked = false;
    } else {
      if (!this.wasDocked) {
        this.wasDocked = true;
        return true;
      } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
        this.isDockedShowing = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };

  moveTopAppBar = () => {
    if (this.checkForUpdate()) {
      let offset = this.currentAppBarOffsetTop;
      if (Math.abs(offset) >= this.topAppBarHeight) {
        offset = -this.props.maxHeight;
      }

      this.appBar.style.top = `${offset}px`;
    }
  };

  scrollHandler = () => {
    const currentScrollPosition = Math.max(window.scrollY, 0);
    const diff = currentScrollPosition - this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;

    if (!this.isCurrentlyBeingResized) {
      this.currentAppBarOffsetTop -= diff;

      if (this.currentAppBarOffsetTop > 0) {
        this.currentAppBarOffsetTop = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
        this.currentAppBarOffsetTop = -this.topAppBarHeight;
      }

      this.moveTopAppBar();
    }
  };

  render() {
    const { children, zIndex } = this.props;

    return (
      <div ref={ref => (this.appBar = ref)} style={{ zIndex }} className={styles.container}>
        {children}
      </div>
    );
  }
}

export default TopAppBar;
