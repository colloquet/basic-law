// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../ThemeContext';

function withTheme<Config: {}>(Component: React.AbstractComponent<Config>) {
  return function ThemedComponent(props: Object) {
    return (
      <ThemeConsumer>
        {context => <Component {...props} darkMode={context.darkMode} toggleDarkMode={context.toggleDarkMode} />}
      </ThemeConsumer>
    );
  };
}

withTheme.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default withTheme;
