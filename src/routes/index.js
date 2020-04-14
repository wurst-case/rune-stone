import React from 'react'
import BandleContainer from '../containers/BandleContainer'
import Header from '../components/molecules/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import EditorContainer from '../containers/EditorContainer'
import Footer from '../components/molecules/Footer'

export const history = createBrowserHistory()

const S = {}
S.Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

function Routes() {
  return (
    <Router history={history}>
      <S.Container>
        <Header />
        <Switch>
          <Route path="/editor" component={EditorContainer} />
          <Route path="/" component={BandleContainer} />
        </Switch>
      </S.Container>
      <Footer />
    </Router>
  )
}

export default Routes
