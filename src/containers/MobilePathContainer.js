import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import MobilePathBuilder from '../components/organisms/MobilePathBuilder'

const S = {}
S.Container = styled.div`
  text-align: center;
  background: ${Layout.DARK};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

export class MobilePathContainer extends Component {
  render() {
    return (
      <S.Container>
        <MobilePathBuilder pathID={this.props.match.params.pathID} />
      </S.Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MobilePathContainer)
