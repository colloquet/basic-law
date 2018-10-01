import React from 'react'
import Route from 'react-router-dom/Route'
import NavLink from 'react-router-dom/NavLink'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import PageTitle from '../components/PageTitle'
import QuestionList from '../components/QuestionList'


const ButtonGroup = styled.div`
  background: #f5f6f7;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;

  .is-dark & {
    background: #282828;
  }
`

const Button = styled(NavLink)`
  display: inline-block;
  width: 50%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem;
  text-decoration: none;
  text-align: center;
  color: inherit;

  &.active,
  &:hover {
    background: #e6e6e6;
    color: inherit;

    .is-dark & {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`

function Practice({ match }) {
  return (
    <div>
      <Helmet title="香港CRE基本法測試練習試題" titleTemplate="%s | 香港CRE基本法測試" />
      <PageTitle>香港CRE基本法測試練習試題</PageTitle>
      <hr />

      <ButtonGroup>
        <Button exact to={match.url} activeClassName="active">
          全部問題
        </Button>
        <Button to={`${match.url}/random`} activeClassName="active">
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
