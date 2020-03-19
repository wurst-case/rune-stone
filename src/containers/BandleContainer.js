import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import PrimaryTree from '../components/molecules/PrimaryTree'
import SecondaryTree from '../components/molecules/SecondaryTree'
import PrimaryMenu from '../components/molecules/PrimaryMenu'

const S = {}
S.Container = styled.div`
  background-color: #000;
  padding: 20px;
  padding-top: ${Layout.HEADER_HEIGHT + 20}px;
  color: #fff;
  text-align: center;
  height: 100vh;
  box-sizing: border-box;
  /* Dev purposes only */
  display: flex;
  justify-content: center;
  align-items: start;
`

export class BandleContainer extends Component {
  render() {
    let color = Layout.BANDLE_RGB
    return (
      <S.Container>
        <PrimaryTree color={color} />
        <PrimaryMenu color={color} />
        <SecondaryTree color={color} />
      </S.Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
