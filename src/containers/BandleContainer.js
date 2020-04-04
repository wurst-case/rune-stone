import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import CompBuilder from '../components/organisms/CompBuilder'
import flavors from '../constants/assetsMap'

const S = {}
S.Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Layout.GREY};
  padding: 20px;
  padding-top: ${Layout.HEADER_HEIGHT * 2}px;
  color: #fff;
  text-align: center;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: start;
`

const mapStateToProps = (state) => ({
  bgImage: flavors[state.composition.PRIMARY_FLAVOR].bg,
})

export class BandleContainer extends Component {
  render() {
    const { bgImage } = this.props
    return (
      <S.Container bg={bgImage ? bgImage : null}>
        <CompBuilder />
      </S.Container>
    )
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
