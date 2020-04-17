import ActionTypes from '../constants/actionTypes'
import assetMap from '../constants/assetsMap'

export const setPathTitle = (value) => ({
  type: ActionTypes.SET_PATH_TITLE,
  payload: { value: value },
})

export const setPathSubtitle = (value) => ({
  type: ActionTypes.SET_PATH_SUBTITLE,
  payload: { value: value },
})

export const setKeystoneName = (id, value) => {
  return {
    type: ActionTypes.SET_KEYSTONE_NAME,
    payload: { id: id, value: value },
  }
}

export const setKeystoneTooltip = (id, value) => ({
  type: ActionTypes.SET_KEYSTONE_TOOLTIP,
  payload: { id: id, value: value },
})

export const setKeystoneDetails = (id, value) => ({
  type: ActionTypes.SET_KEYSTONE_DETAILS,
  payload: { id: id, value: value },
})

export const setTierTitle = (tier, value) => ({
  type: ActionTypes.SET_TIER_TITLE,
  payload: { tier: tier, value: value },
})

export const setRuneName = (tier, id, value) => ({
  type: ActionTypes.SET_RUNE_NAME,
  payload: { tier: tier, id: id, value: value },
})

export const setRuneTooltip = (tier, id, value) => ({
  type: ActionTypes.SET_RUNE_TOOLTIP,
  payload: { tier: tier, id: id, value: value },
})

export const setRuneDetails = (tier, id, value) => ({
  type: ActionTypes.SET_RUNE_DETAILS,
  payload: { tier: tier, id: id, value: value },
})

export const addRune = (tier) => {
  return {
    type: ActionTypes.ADD_RUNE,
    payload: { tier: tier },
  }
}
export const addKeystone = () => {
  return {
    type: ActionTypes.ADD_KEYSTONE,
  }
}

export const setColor = (hex, rgb) => ({
  type: ActionTypes.SET_COLOR,
  payload: { hex: hex, rgb: rgb },
})

export const toggleColorPicker = () => ({
  type: ActionTypes.TOGGLE_COLOR_PICKER,
})

export const saveNewPath = (path) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('paths')
      .add({
        ...path,
        authorFirstName: 'Dylan',
        authorLastName: 'Modell',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ActionTypes.SAVE_NEW_PATH, path })
      })
      .catch({ type: ActionTypes.NEW_PATH_ERROR })
  }
}

export const loadPathFromFirestore = (pathId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .get({ collection: 'paths', doc: 'bandle' })
      .then((doc) => {
        let d = doc.data()
        console.log(d)
        dispatch(setColor(d.colorHex, d.colorRGB))
        dispatch(setPathTitle(d.name))
        dispatch(setPathSubtitle(d.subtitle))
        d.keystones.forEach((keystone, id) => {
          if (id !== 0) dispatch(addKeystone())
          dispatch(setKeystoneName(id, keystone.name))
          dispatch(setKeystoneDetails(id, keystone.detail))
          dispatch(setKeystoneTooltip(id, keystone.detail))
        })
        d.tierNames.forEach((name, tier) => {
          dispatch(setTierTitle(tier, name))
          d['tier' + (tier + 1)].forEach((rune, id) => {
            if (id !== 0) dispatch(addRune(tier))
            dispatch(setRuneName(tier, id, rune.name))
            dispatch(setRuneDetails(tier, id, rune.detail))
            dispatch(setRuneTooltip(tier, id, rune.detail))
          })
        })
      })
      .catch({ type: ActionTypes.LOAD_PATH_ERROR })
  }
}

export const saveEditedPath = (path) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    console.log(path)

    firestore
      .collection('paths')
      .doc('bandle')
      .update({
        colorHex: path.path.color,
        colorRGB: path.path.colorRgb,
        name: path.path.title,
        subtitle: path.path.subtitle,
        keystones: path.keystones.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          src: assetMap[1].keystones[i].src,
        })),
        tier1: path.tiers[0].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          src: assetMap[1].tier1[i].src,
        })),
        tier2: path.tiers[1].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          src: assetMap[1].tier2[i].src,
        })),
        tier3: path.tiers[2].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          src: assetMap[1].tier3[i].src,
        })),
        tierNames: [path.tiers[0].title, path.tiers[1].title, path.tiers[2].title],
      })
      .then((res) => {
        console.log(res)
        dispatch({ type: 'ActionTypes.SAVE_EDITED_PATH', path })
      })
      .catch({ type: ActionTypes.SAVE_PATH_ERROR })
  }
}

export const restoreFromBackup = (assetMap, name) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('paths')
      .doc(name)
      .set({
        ...assetMap,
      })
      .then((res) => {
        console.log(res)
        dispatch({ type: 'ActionTypes.SAVE_EDITED_PATH' })
      })
      .catch({ type: ActionTypes.SAVE_PATH_ERROR })
  }
}
