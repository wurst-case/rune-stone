import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'

const S = {}
S.Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Layout.DARK};
  color: rgba(${Layout.GOLD}, 1);
`

export class ComingSoon extends Component {
  render() {
    return (
      <S.Container>
        <h1>COMING SOON!</h1>
      </S.Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)
