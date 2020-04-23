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
  restoreFromBackup,
  setChosenPath,
  loadPathNamesFromFirestore,
  selectImage,
  uploadIcon,
} from '../../actions/editor'
import TierEditor from '../molecules/TierEditor'
import KeystoneEditor from '../molecules/KeystoneEditor'
import PathEditor from '../molecules/PathEditor'
import FilledButton from '../atoms/FilledButton'
// import assetMap from '../../constants/assetsMap'

const S = {}
S.Editor = styled.div`
  .center {
    align-self: center;
  }
`

class Editor extends Component {
  componentDidMount() {
    // this.props.restoreFromBackup(assetMap[6], 'inspiration')
    this.props.loadPathNamesFromFirestore()
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
      pathList,
      chosenPath,
      setChosenPath,
      selectImage,
    } = this.props

    function createPathList() {
      var optionArray = []
      if (pathList.length > 0)
        pathList.forEach((path) =>
          optionArray.push(
            <option value={path.id} key={path.id + 'option'}>
              {path.name}
            </option>,
          ),
        )
      return optionArray
    }

    return (
      <S.Editor>
        {false ? ( //If new path, false indicates editing existing path
          <h1>Build Your Own Custom Path</h1>
        ) : (
          <div className="center">
            <h1>Edit your custom paths</h1>
            <label>Choose The Path To Edit: </label>
            <select id="paths" value={chosenPath} onChange={(e) => setChosenPath(e.target.value)}>
              <option value="default">Choose a path</option>
              {createPathList()}
            </select>
          </div>
        )}
        <PathEditor
          color={color}
          setTitle={setPathTitle}
          setSubtitle={setPathSubtitle}
          path={path}
          setColor={setColor}
          toggleColorPicker={toggleColorPicker}
          colorPickerOpen={colorPickerOpen}
          selectImage={(img, tier) => selectImage(img, tier, 0)}
        />
        {/* KEYSTONES */}
        <KeystoneEditor
          color={color}
          setName={setKeystoneName}
          setTooltip={setKeystoneTooltip}
          setDetails={setKeystoneDetails}
          keystones={keystones}
          onAdd={() => addKeystone()}
          selectImage={(img, id) => selectImage(img, 0, id)}
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
          selectImage={(img, id) => selectImage(img, 1, id)}
        />
        <TierEditor
          color={color}
          setTierTitle={setTierTitle}
          setName={setRuneName}
          setTooltip={setRuneTooltip}
          setDetails={setRuneDetails}
          tier={tier2}
          tierId={1}
          onAdd={() => addRune(1)}
          selectImage={(img, id) => selectImage(img, 2, id)}
        />
        <TierEditor
          color={color}
          setTierTitle={setTierTitle}
          setName={setRuneName}
          setTooltip={setRuneTooltip}
          setDetails={setRuneDetails}
          tier={tier3}
          tierId={2}
          onAdd={() => addRune(2)}
          selectImage={(img, id) => selectImage(img, 3, id)}
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
    chosenPath: state.editor.chosenPath,
    pathList: state.editor.pathList,
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
    restoreFromBackup: (paths, name) => dispatch(restoreFromBackup(paths, name)),
    setChosenPath: (path) => dispatch(setChosenPath(path)),
    loadPathNamesFromFirestore: () => dispatch(loadPathNamesFromFirestore()),
    selectImage: (img, tier, id) => dispatch(selectImage(img, tier, id)),
    uploadIcon: (img, path) => dispatch(uploadIcon(img, path)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'paths' }]),
)(Editor)
