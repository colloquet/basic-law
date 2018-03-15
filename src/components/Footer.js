import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin: 1rem 1rem 2rem;
  color: #999;
  font-size: 0.75rem;
`

function Footer() {
  return (
    <Container>
      <p>
        Made in Hong Kong by{' '}
        <a href="https://colloque.io/" target="_blank" rel="noopener noreferrer">
          Colloque Tsui
        </a>
        <br />
        Source code available at{' '}
        <a href="https://github.com/colloquet/basic-law" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <div
        className="fb-like"
        data-href="https://basiclaw.hk/"
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-show-faces="true"
        data-share="true"
      />
    </Container>
  )
}

export default Footer
