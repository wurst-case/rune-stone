import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import ResumeEditor from '../components/organisms/ResumeEditor'
import firebase from '../constants/firebaseConfig'

const S = {}
S.Container = styled.div`
  background-color: ${Layout.DARK};
  color: #fff;

  min-height: 100vh;
  height: 100%;
  max-width: 100vw;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1100px) {
  }
`

export class ResumeEditorContainer extends Component {
  componentDidMount() {
    if (firebase.auth() && firebase.auth().currentUser && true)
      firebase
        .auth()
        .currentUser.getIdTokenResult()
        .then((idTokenResult) => {
          if (!idTokenResult.claims.admin) this.props.history.push('/')
        })
  }
  render() {
    return (
      <S.Container>
        <ResumeEditor />
      </S.Container>
    )
  }
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ResumeEditorContainer)
