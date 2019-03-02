import React from 'react';

const ResponsiveContext = React.createContext();

export class ResponsiveProvider extends React.Component {
  state = {
    isMobile: window.innerWidth < 768,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const isMobile = window.innerWidth < 768;
    this.setState({ isMobile });
  };

  render() {
    return (
      <ResponsiveContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </ResponsiveContext.Provider>
    );
  }
}

export const ResponsiveConsumer = ResponsiveContext.Consumer;
