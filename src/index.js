// @flow
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from './ThemeContext';
import { ResponsiveProvider } from './ResponsiveContext';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <ResponsiveProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ResponsiveProvider>,
    root,
  );
}
registerServiceWorker();
