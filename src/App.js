// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import BottomBar from './components/BottomBar/BottomBar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PracticePage from './pages/PracticePage/PracticePage';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Helmet title="香港CRE基本法測試" titleTemplate="%s | 香港CRE基本法測試" />
          <Navbar />

          <div className={styles.container}>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/practice" component={PracticePage} />

            <hr />
            <Footer />
          </div>

          <BottomBar />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
