import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import TextInputField from '../atoms/TextInputField'
import Layout from '../../constants/layoutConstants'
import {
  setPathTitle,
  setPathSubtitle,
  setKeystoneName,
  setKeystoneTooltip,
  setKeystoneDetails,
  setTierTitle,
  setRuneName,
  setRuneTooltip,
  setRuneDetails,
} from '../../actions/editor'

const S = {}
S.Editor = styled.div``

class Editor extends Component {
  render() {
    console.log('editor render func props: ', this.props)
    const { path, keystones, tier1, tier2, tier3 } = this.props
    return (
      <S.Editor>
        <TextInputField
          color={Layout.BRONZE}
          placeholder={path && path.name}
          onChange={(input) => console.log(input)}
          label={'test'}
          // value=""
          maxLength={5}
        />
      </S.Editor>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('hello')

  return {
    path: state.editor.path,
    keystones: state.editor.keystones,
    tier1: state.editor.tier1,
    tier2: state.editor.tier2,
    tier3: state.editor.tier3,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPathTitle: (value) => dispatch(setPathTitle(value)),
    setPathSubtitle: (value) => dispatch(setPathSubtitle(value)),
    setKeystoneName: (id, value) => dispatch(setKeystoneName(id, value)),
    setKeystoneTooltip: (id, value) => dispatch(setKeystoneTooltip(id, value)),
    setKeystoneDetails: (id, value) => dispatch(setKeystoneDetails(id, value)),
    setTierTitle: (tier, value) => dispatch(setTierTitle(tier, value)),
    setRuneName: (tier, id, value) => dispatch(setRuneName(tier, id, value)),
    setRuneTooltip: (tier, id, value) => dispatch(setRuneTooltip(tier, id, value)),
    setRuneDetails: (tier, id, value) => dispatch(setRuneDetails(tier, id, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
