import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

import store from './storage'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import BottomBar from './components/BottomBar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Practice from './pages/Practice'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 1rem;
  margin-top: 3rem;

  @media (max-width: 767px) {
    padding-bottom: calc(1.5rem + 3.5rem);
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: store.get('darkMode') || false,
    }
  }

  toggleDarkMode = () => {
    this.setState(({ darkMode}) => ({
      darkMode: !darkMode,
    }), () => {
      store.set('darkMode', this.state.darkMode)
    })
  }

  render() {
    const { darkMode } = this.state

    return (
      <Router>
        <ScrollToTop>
          <div>
            <Helmet title="香港CRE基本法測試" titleTemplate="%s | 香港CRE基本法測試">
              <html className={darkMode ? 'is-dark' : ''} />
            </Helmet>
            <Navbar darkMode={darkMode} onToggleDarkMode={this.toggleDarkMode} />

            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/practice" component={Practice} />

              <hr />
              <Footer />
            </Container>

            <BottomBar />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App
