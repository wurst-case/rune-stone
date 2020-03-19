import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import Rune from '../components/atoms/Rune'

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
  align-items: center;
`

export class BandleContainer extends Component {
  render() {
    return (
      <S.Container>
        <Rune color={Layout.BANDLE_RGB} type="keystone" />
        <Rune color={Layout.BANDLE_RGB} type="tree" />
        <Rune color={Layout.BANDLE_RGB} type="menu" />
      </S.Container>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
