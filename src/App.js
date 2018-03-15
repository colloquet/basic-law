import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Practice from './pages/Practice'
import Footer from './components/Footer'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem 1rem;
  margin-top: 3rem;
`

function App({ children }) {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Helmet title="香港CRE基本法測試" titleTemplate="%s | 香港CRE基本法測試" />
          <Navbar />

          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/practice" component={Practice} />

            <hr />
            <Footer />
          </Container>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
