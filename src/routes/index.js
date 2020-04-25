import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'
import Loadable from 'react-loadable'

import Loading from '../containers/Loading'
import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'

const EditorContainer = Loadable({
  loader: () => import('../containers/EditorContainer'),
  loading: Loading,
})
const ComingSoon = Loadable({
  loader: () => import('../containers/ComingSoon'),
  loading: Loading,
})
const Container404 = Loadable({
  loader: () => import('../containers/Container404'),
  loading: Loading,
})
const About = Loadable({
  loader: () => import('../containers/About'),
  loading: Loading,
})
const CompBuilder = Loadable({
  loader: () => {
    return document.documentElement.clientWidth >= 1100
      ? import('../containers/BandleContainer')
      : import('../containers/MobilePathContainer')
  },
  loading: Loading,
})

export const history = createBrowserHistory()

const S = {}
S.Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

function Routes() {
  return (
    <Router history={history}>
      <S.Container>
        <Header />
        <Switch>
          <Route path="/ecs" component={ComingSoon} />
          <Route path="/learnmore" component={ComingSoon} />
          <Route path="/about" component={About} />
          <Route path="/editor" component={EditorContainer} />
          <Route path="/:pathID" component={CompBuilder} />
          <Route exact path="/" component={CompBuilder} />
          <Route component={Container404} />
        </Switch>
      </S.Container>
      <Footer />
    </Router>
  )
}

export default Routes
