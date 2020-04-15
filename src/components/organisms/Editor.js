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
  addRune,
} from '../../actions/editor'
import TierEditor from '../molecules/TierEditor'
import KeystoneEditor from '../molecules/KeystoneEditor'

const S = {}
S.Editor = styled.div``

class Editor extends Component {
  render() {
    const {
      path,
      keystones,
      tier1,
      tier2,
      tier3,
      setPathTitle,
      setPathSubtitle,
      setKeystoneName,
      setKeystoneTooltip,
      setKeystoneDetails,
      setTierTitle,
      setRuneName,
      setRuneTooltip,
      setRuneDetails,
      addRune,
    } = this.props
    return (
      <S.Editor>
        <TextInputField
          color={Layout.BRONZE}
          placeholder="Path Title ex: Precision"
          onChange={(input) => setPathTitle(input)}
          label="Define Your Path"
          value={path && path.title}
          maxLength={5}
        />
        <TextInputField
          color={Layout.BRONZE}
          placeholder="Path Subtitle ex: Become a legend"
          onChange={(input) => setPathSubtitle(input)}
          value={path && path.subtitle}
          maxLength={5}
        />
        {/* KEYSTONES */}
        <KeystoneEditor
          color={Layout.BRONZE}
          setName={setKeystoneName}
          setTooltip={setKeystoneTooltip}
          setDetails={setKeystoneDetails}
          keystones={keystones}
          onAdd={() => console.log('keystone add')}
        />
        {/* Tiers */}
        <TierEditor
          color={Layout.BRONZE}
          setTitle={setTierTitle}
          setName={setRuneName}
          setTooltip={setRuneTooltip}
          setDetails={setRuneDetails}
          tier={tier1}
          tierId={0}
          onAdd={() => addRune(0)}
        />
        <TierEditor
          color={Layout.BRONZE}
          setTierTitle={setTierTitle}
          setRuneName={setRuneName}
          setRuneTooltip={setRuneTooltip}
          setRuneDetails={setRuneDetails}
          tier={tier2}
          tierId={1}
          onAdd={() => addRune(1)}
        />
        <TierEditor
          color={Layout.BRONZE}
          setTierTitle={setTierTitle}
          setRuneName={setRuneName}
          setRuneTooltip={setRuneTooltip}
          setRuneDetails={setRuneDetails}
          tier={tier3}
          tierId={2}
          onAdd={() => addRune(2)}
        />
      </S.Editor>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    path: state.editor.path,
    keystones: state.editor.keystones,
    tier1: state.editor.tiers[0],
    tier2: state.editor.tiers[1],
    tier3: state.editor.tiers[2],
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
    addRune: (tier) => dispatch(addRune(tier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
