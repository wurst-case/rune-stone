import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import Layout from '../constants/layoutConstants'
import CompBuilder from '../components/organisms/CompBuilder'
import { loadImgFromStorage } from '../actions/composition'

const S = {}
S.Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${Layout.DARK};

  text-align: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`

export class BandleContainer extends Component {
  render() {
    const { bgImage } = this.props
    return (
      <S.Container bg={bgImage ? bgImage : null}>
        <CompBuilder pathID={this.props.match.params.pathID} />
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
