import React, { Component } from 'react'
import firebase from '../constants/firebaseConfig'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'

const S = {}
S.LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .logo {
    width: 100px;
  }
`

class LoginPage extends Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  state = {
    isSignedIn: undefined,
  }

  unregisterAuthObserver

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  async redirect(msDelay) {
    await new Promise((resolve) => setTimeout(resolve, msDelay))
    this.props.history.push('/editor')
  }

  render() {
    this.state.isSignedIn && this.redirect(2000)
    return (
      <S.LoginPageContainer>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn && (
          <>
            <h1>Sign in</h1>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
          </>
        )}
        {this.state.isSignedIn && (
          <>
            <h1>Hello {firebase.auth().currentUser?.displayName}. You are now signed In!</h1>
            <p>
              {'You should be redirceted in 3 seconds... if not '}
              <a href=" " onClick={() => this.props.history.push('/')}>
                click here
              </a>
            </p>
            <br />
            <a href=" " onClick={() => firebase.auth().signOut()}>
              Sign-out
            </a>
          </>
        )}
      </S.LoginPageContainer>
    )
  }
}

export default withRouter(LoginPage)
