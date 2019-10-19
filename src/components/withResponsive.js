// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { ResponsiveConsumer } from '../ResponsiveContext';

function withResponsive<Config: {}>(Component: React.AbstractComponent<Config>) {
  return function ResponsiveComponent(props: Object) {
    return <ResponsiveConsumer>{context => <Component {...props} isMobile={context} />}</ResponsiveConsumer>;
  };
}

withResponsive.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default withResponsive;
