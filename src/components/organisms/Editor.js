import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
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
  saveNewPath,
  saveEditedPath,
  loadPathFromFirestore,
  restoreFromBackup,
} from '../../actions/editor'
import TierEditor from '../molecules/TierEditor'
import KeystoneEditor from '../molecules/KeystoneEditor'
import PathEditor from '../molecules/PathEditor'
import FilledButton from '../atoms/FilledButton'
// import assetMap from '../../constants/assetsMap'

const S = {}
S.Editor = styled.div``

class Editor extends Component {
  componentDidMount() {
    // this.props.restoreFromBackup(assetMap[6], 'inspiration')
    this.props.loadPathFromFirestore(0)
  }

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
      saveNewPath,
      saveEditedPath,
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
        <FilledButton
          bg={color}
          color={'white'}
          label="Save"
          onClick={() => {
            return false // this.props.new check
              ? saveNewPath(this.props.editor)
              : saveEditedPath(this.props.editor)
          }}
        />
      </S.Editor>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)

  return {
    fsData: state.firestore.ordered.paths,
    editor: state.editor,
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
    setColor: (colorHex, colorRgb) => dispatch(setColor(colorHex, colorRgb)),
    toggleColorPicker: () => dispatch(toggleColorPicker()),
    saveNewPath: (path) => dispatch(saveNewPath(path)),
    saveEditedPath: (path) => dispatch(saveEditedPath(path)),
    loadPathFromFirestore: (pathId) => dispatch(loadPathFromFirestore(pathId)),
    restoreFromBackup: (paths, name) => dispatch(restoreFromBackup(paths, name)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'paths' }]),
)(Editor)
