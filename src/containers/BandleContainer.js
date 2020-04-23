import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
// import { useFirebase } from 'react-redux-firebase'
import Layout from '../constants/layoutConstants'
import CompBuilder from '../components/organisms/CompBuilder'
import MobilePathBuilder from '../components/organisms/MobilePathBuilder'
import { loadImgFromStorage } from '../actions/composition'

const S = {}
S.Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Layout.DARK};
  padding: 20px;

  color: #fff;
  text-align: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1100px) {
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

export class BandleContainer extends Component {
  componentDidMount() {
    // this.props.loadImgFromStorage(this.props.bgImage)
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

const mapStateToProps = (state) => {
  let paths = state.composition.paths
  return {
    bgImage: paths && paths[state.composition.PRIMARY_FLAVOR].bg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadImgFromStorage: (imgPath) => dispatch(loadImgFromStorage(imgPath)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandleContainer)
