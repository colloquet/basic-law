// @flow
import React from 'react';

import type { Node } from 'react';

import styles from './TopAppBar.module.scss';

type Props = {
  children: Node,
  zIndex?: number,
  maxHeight: number,
  disabled?: boolean,
};

type State = {
  top: number,
};

class TopAppBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    zIndex: 1,
    maxHeight: 64,
    disabled: false,
  };

  appBar: { current: null | HTMLDivElement };
  lastScrollPosition: number;
  topAppBarHeight: number;
  wasDocked: boolean;
  isDockedShowing: boolean;
  currentAppBarOffsetTop: number;
  isCurrentlyBeingResized: boolean;

  constructor(props: Props) {
    super(props);

    this.state = {
      top: 0,
    };

    this.appBar = React.createRef();
    this.lastScrollPosition = window ? window.scrollY : 0;
    this.topAppBarHeight = 0;
    this.wasDocked = true;
    this.isDockedShowing = true;
    this.currentAppBarOffsetTop = 0;
    this.isCurrentlyBeingResized = false;
  }

  componentDidMount() {
    if (this.appBar.current) {
      this.topAppBarHeight = this.appBar.current.clientHeight;
    }
    if (!this.props.disabled) {
      this.init();
    }
  }

  componentDidUpdate({ disabled }: Props) {
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
    this.setState({ top: 0 });
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

      this.setState({ top: offset });
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
    const { top } = this.state;
    const { children, zIndex } = this.props;

    return (
      <div ref={this.appBar} style={{ zIndex, top: `${top}px` }} className={styles.container}>
        {children}
      </div>
    );
  }
}

export default TopAppBar;
