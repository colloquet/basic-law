import React from 'react';
import store from './storage';

const ThemeContext = React.createContext();

export class ThemeProvider extends React.Component {
  state = {
    darkMode: store.get('darkMode') || false,
  };

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
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
