import React from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../ThemeContext';

function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeConsumer>
        {context => <Component {...props} darkMode={context.state.darkMode} toggleDarkMode={context.toggleDarkMode} />}
      </ThemeConsumer>
    );
  };
}

withTheme.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default withTheme;
