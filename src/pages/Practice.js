import React from 'react'
import Route from 'react-router-dom/Route'
import NavLink from 'react-router-dom/NavLink'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PageTitle from '../components/PageTitle'
import QuestionList from '../components/QuestionList'


const ButtonGroup = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`

const Button = styled(NavLink)`
  display: inline-block;
  background: #f5f6f7;
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  text-decoration: none;
  text-align: center;
  color: inherit;

  &:hover {
    background: #eee;
    color: inherit;
  }
`

function Practice({ match }) {
  return (
    <div>
      <Helmet title="香港CRE基本法測試練習試題" titleTemplate="%s | 香港CRE基本法測試" />
      <PageTitle>香港CRE基本法測試練習試題</PageTitle>
      <hr />

      <ButtonGroup>
        <Button exact to={match.url} activeStyle={{ background: '#e6e6e6' }}>
          全部問題
        </Button>
        <Button to={`${match.url}/random`} activeStyle={{ background: '#e6e6e6' }}>
          隨機15條
        </Button>
      </ButtonGroup>

      <Route exact path={match.url} render={() => <QuestionList />} />
      <Route path={`${match.url}/random`} render={() => <QuestionList size={15} />} />
    </div>
  )
}

Practice.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Practice
