import React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveConsumer } from '../ResponsiveContext';

function withResponsive(Component) {
  return function ResponsiveComponent(props) {
    return (
      <ResponsiveConsumer>{context => <Component {...props} isMobile={context} />}</ResponsiveConsumer>
    );
  };
}

withResponsive.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default withResponsive;
