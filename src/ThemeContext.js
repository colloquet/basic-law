import React from 'react';
import store from './storage';

const ThemeContext = React.createContext();

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: store.get('darkMode') === null ? darkModeMediaQuery.matches : store.get('darkMode'),
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
