// @flow
import * as React from 'react';
import store from './storage';

import type { Node } from 'react';

const ThemeContext = React.createContext<{
  darkMode: boolean,
  toggleDarkMode: () => void,
}>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

type Props = {
  children: Node,
};

type State = {
  darkMode: boolean,
  toggleDarkMode: () => void,
};

export class ThemeProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      darkMode: store.get('darkMode') === null ? darkModeMediaQuery.matches : !!store.get('darkMode'),
      toggleDarkMode: this.toggleDarkMode,
    };
  }

  componentDidMount() {
    if (darkModeMediaQuery.addListener) {
      darkModeMediaQuery.addListener(e => {
        if (store.get('darkMode') === null) {
          this.setState({ darkMode: e.matches });
        }
      });
    }
  }

  toggleDarkMode = () => {
    this.setState(
      ({ darkMode }) => ({
        darkMode: !darkMode,
      }),
      () => {
        store.set('darkMode', this.state.darkMode);
      },
    );
  };

  render() {
    return <ThemeContext.Provider value={this.state}>{this.props.children}</ThemeContext.Provider>;
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
