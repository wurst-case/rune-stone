import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import styled from '@emotion/styled'

import Loading from '../containers/Loading'
import Header from '../components/molecules/Header'
import Footer from '../components/molecules/Footer'
import ResumeEditorContainer from '../containers/ResumeEditorContainer'

const EditorContainer = lazy(() => import('../containers/EditorContainer'))
const ComingSoon = lazy(() => import('../containers/ComingSoon'))
const Container404 = lazy(() => import('../containers/Container404'))
const About = lazy(() => import('../containers/About'))
const LoginPage = lazy(() => import('../containers/LoginPage'))
const CompBuilder = lazy(() => {
  return document.documentElement.clientWidth >= 1100
    ? import('../containers/BandleContainer')
    : import('../containers/MobilePathContainer')
})
const Resume = lazy(() => {
  return document.documentElement.clientWidth >= 1100
    ? import('../containers/ResumeContainer')
    : import('../containers/ResumeMobileContainer')
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

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebaseReducer.auth)
  if (!isLoaded(auth)) return <Loading />
  else return children
}

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.firebaseReducer.auth)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

function Routes() {
  return (
    <Router history={history}>
      <S.Container>
        <Suspense fallback={<Loading />}>
          <Header />
          <AuthIsLoaded>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/ecs" component={ComingSoon} />
              <Route exact path="/bandle" component={ComingSoon} />
              <Route exact path="/about" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/resumeeditor" component={ResumeEditorContainer} />
              <Route path="/comp/:pathID" component={CompBuilder} />
              <Route exact path="/" component={CompBuilder} />
              <PrivateRoute>
                <Route exact path="/editor" component={EditorContainer} />
              </PrivateRoute>
              <PrivateRoute>
                <Route exact path="/edit" component={EditorContainer} />
              </PrivateRoute>
              <Route component={Container404} />
            </Switch>
          </AuthIsLoaded>
        </Suspense>
      </S.Container>
      <Footer />
    </Router>
  )
}

export default Routes
