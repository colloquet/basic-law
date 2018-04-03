import React from 'react'
import styled from 'styled-components'

import NavbarItem from './NavbarItem'

const Wrapper = styled.div`
  position: fixed;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  width: 100%;
  background: #e74c3c;
  z-index: 2;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`

const NavbarRight = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  overflow: hidden;
`

const ScrollContainer = styled.div`
  display: flex;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

const ShadowLeft = styled.div`
  position: absolute;
  background: linear-gradient(to right, rgba(231, 76, 60, 1) 0%, rgba(231, 76, 60, 0) 100%);
  top: 0;
  left: 0;
  bottom: 0;
  width: 1rem;
  pointer-events: none;
`

const ShadowRight = styled.div`
  position: absolute;
  background: linear-gradient(to left, rgba(231, 76, 60, 1) 0%, rgba(231, 76, 60, 0) 100%);
  top: 0;
  right: 0;
  bottom: 0;
  width: 1rem;
  pointer-events: none;
`

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.onNavbarScroll)
    this.onNavbarScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onNavbarScroll)
  }

  onNavbarScroll = () => {
    const { scrollLeft, clientWidth, scrollWidth } = this.scrollContainer

    const shadowLeftOpacity = 1 / 20 * Math.min(scrollLeft, 20)
    this.shadowLeft.style.opacity = shadowLeftOpacity

    const scrollRight = scrollWidth - clientWidth
    const shadowRightOpacity = 1 / 20 * (scrollRight - Math.max(scrollLeft, scrollRight - 20))
    this.shadowRight.style.opacity = shadowRightOpacity
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <NavbarItem to="/" logo>
            BasicLaw.hk
          </NavbarItem>

          <NavbarRight>
            <ScrollContainer innerRef={ref => (this.scrollContainer = ref)} onScroll={this.onNavbarScroll}>
              <NavbarItem to="/" exact>
                基本法全文
              </NavbarItem>
              <NavbarItem to="/practice">CRE基本法測試練習試題</NavbarItem>
              <NavbarItem to="/about">關於</NavbarItem>
            </ScrollContainer>

            <ShadowLeft innerRef={ref => (this.shadowLeft = ref)} />
            <ShadowRight innerRef={ref => (this.shadowRight = ref)} />
          </NavbarRight>
        </Container>
      </Wrapper>
    )
  }
}

export default Navbar
