import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

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
  addKeystone,
  setColor,
  toggleColorPicker,
} from '../../actions/editor'
import TierEditor from '../molecules/TierEditor'
import KeystoneEditor from '../molecules/KeystoneEditor'
import PathEditor from '../molecules/PathEditor'
import FilledButton from '../atoms/FilledButton'

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
      addKeystone,
      setColor,
      color,
      toggleColorPicker,
      colorPickerOpen,
    } = this.props

    return (
      <S.Editor>
        <h1>Build Your Own Custom Path</h1>
        <PathEditor
          color={color}
          setTitle={setPathTitle}
          setSubtitle={setPathSubtitle}
          path={path}
          setColor={setColor}
          toggleColorPicker={toggleColorPicker}
          colorPickerOpen={colorPickerOpen}
        />
        {/* KEYSTONES */}
        <KeystoneEditor
          color={color}
          setName={setKeystoneName}
          setTooltip={setKeystoneTooltip}
          setDetails={setKeystoneDetails}
          keystones={keystones}
          onAdd={() => addKeystone()}
        />
        {/* Tiers */}
        <TierEditor
          color={color}
          setTitle={setTierTitle}
          setName={setRuneName}
          setTooltip={setRuneTooltip}
          setDetails={setRuneDetails}
          tier={tier1}
          tierId={0}
          onAdd={() => addRune(0)}
        />
        <TierEditor
          color={color}
          setTierTitle={setTierTitle}
          setRuneName={setRuneName}
          setRuneTooltip={setRuneTooltip}
          setRuneDetails={setRuneDetails}
          tier={tier2}
          tierId={1}
          onAdd={() => addRune(1)}
        />
        <TierEditor
          color={color}
          setTierTitle={setTierTitle}
          setRuneName={setRuneName}
          setRuneTooltip={setRuneTooltip}
          setRuneDetails={setRuneDetails}
          tier={tier3}
          tierId={2}
          onAdd={() => addRune(2)}
        />
        <FilledButton bg={color} color={'#fff'} label="Save" onClick={() => console.log('save')} />
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
    color: state.editor.path.color,
    colorPickerOpen: state.editor.colorPickerOpen,
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
    addKeystone: () => dispatch(addKeystone()),
    setColor: (color) => dispatch(setColor(color)),
    toggleColorPicker: () => dispatch(toggleColorPicker()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
