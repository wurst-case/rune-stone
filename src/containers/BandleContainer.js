import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'

const Container = styled.div`
  background-color: #444;
  padding: 20px;
  padding-top: ${Layout.HEADER_HEIGHT + 20}px;
  color: #fff;
  text-align: center;
  height: 100vh;
`

export class BandleContainer extends Component {
  render() {
    return <Container>Hello World</Container>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
