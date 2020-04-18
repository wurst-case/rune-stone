import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import CompBuilder from '../components/organisms/CompBuilder'
import flavors from '../constants/assetsMap'
import MobilePathBuilder from '../components/organisms/MobilePathBuilder'

const S = {}
S.Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Layout.DARK};
  padding: 20px;
  /* padding-top: ${Layout.HEADER_HEIGHT * 2}px; */
  color: #fff;
  text-align: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 600px) {
    background: ${Layout.DARK};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
    height: 100%;
    width: 100vw;
    padding: 0;
  margin: 0;
  }
`

const mapStateToProps = (state) => ({
  bgImage: flavors[state.composition.PRIMARY_FLAVOR].bg,
})

export class BandleContainer extends Component {
  componentDidMount() {
    console.log()
  }
  render() {
    const { bgImage } = this.props
    return (
      <S.Container bg={bgImage ? bgImage : null}>
        <CompBuilder pathID={this.props.match.params.pathID} />
        <MobilePathBuilder />
      </S.Container>
    )
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
