import React from 'react'
import BandleContainer from '../containers/BandleContainer'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={BandleContainer} />
      </Switch>
    </Router>
  )
}

export default Routes
