import ActionTypes from '../constants/actionTypes'
import store from '../store'

//Comp Utilities
export const reset = () => {
  return {
    type: ActionTypes.RESET,
  }
}
export const toggleMenu = (menu) => {
  const { composition } = store.getState()
  return {
    type: ActionTypes.TOGGLE_MENU,
    payload: { ...menu, value: menu.value ? null : !composition['OPEN'][menu.tree][menu.tier] },
  }
}
export const resetSlotMachine = () => {
  return {
    type: ActionTypes.RESET_SLOT_MACHINE,
  }
}
export const triggerSlot = () => {
  return {
    type: ActionTypes.TRIGGER_SLOT,
  }
}

//Primary Comp
export const selectPrimaryFlavor = (id, mobile) => {
  return {
    type: ActionTypes.SELECT_PRIMARY_FLAVOR,
    payload: { id: id, mobile: mobile ? true : false },
  }
}
export const selectKeystone = (id) => {
  return {
    type: ActionTypes.SELECT_KEYSTONE,
    payload: id,
  }
}
export const selectPrimaryT1 = (id) => {
  return {
    type: ActionTypes.SELECT_PRIMARY_T1,
    payload: id,
  }
}
export const selectPrimaryT2 = (id) => {
  return {
    type: ActionTypes.SELECT_PRIMARY_T2,
    payload: id,
  }
}
export const selectPrimaryT3 = (id) => {
  return {
    type: ActionTypes.SELECT_PRIMARY_T3,
    payload: id,
  }
}

//Secondary Comp
export const selectSecondaryFlavor = (id) => {
  return {
    type: ActionTypes.SELECT_SECONDARY_FLAVOR,
    payload: id,
  }
}
export const selectSecondaryRunes = (row, id) => {
  return {
    type: ActionTypes.SELECT_SECONDARY_RUNES,
    payload: { ROW: row, ID: id },
  }
}

//Layout
export const toggleInfoDisplay = (rune) => {
  return {
    type: ActionTypes.TOGGLE_INFO_DISPLAY,
    payload: rune || null,
  }
}

//Firestore
export const loadPathsFromFirestore = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .get({ collection: 'paths' })
      .then((col) => {
        let paths = []
        col.docs.forEach((doc) => {
          const d = doc.data()
          switch (d.name) {
            case 'Secondary Path':
              paths[0] = d
              break
            case 'Bandle':
              paths[1] = d
              break
            case 'Precision':
              paths[2] = d
              break
            case 'Domination':
              paths[3] = d
              break
            case 'Sorcery':
              paths[4] = d
              break
            case 'Resolve':
              paths[5] = d
              break
            case 'Inspiration':
              paths[6] = d
              break
            default:
              paths[paths.length] = d
              break
          }
        })
        dispatch({ type: ActionTypes.LOAD_ALL_PATHS, payload: paths })
      })
      .catch({ type: ActionTypes.LOAD_PATH_ERROR })
  }
}

export const loadFromPermalink = (pathID) => {
  //Split the string up into digits
  const IDArray = pathID.split('_')
  //Check to see if it breaks things
  if (IDArray[0] !== IDArray[5] && IDArray[0] <= 6 && IDArray[0] >= 1) {
    return (dispatch) => {
      dispatch(selectPrimaryFlavor(Number(IDArray[0])))
      if (IDArray[1] <= 4) dispatch(selectKeystone(Number(IDArray[1])))
      if (IDArray[2] <= 4) dispatch(selectPrimaryT1(Number(IDArray[2])))
      if (IDArray[3] <= 4) dispatch(selectPrimaryT2(Number(IDArray[3])))
      if (IDArray[4] <= 4) dispatch(selectPrimaryT3(Number(IDArray[4])))
      if (IDArray[5] <= 6 && IDArray[5] >= 1) {
        dispatch(selectSecondaryFlavor(Number(IDArray[5])))
        if (IDArray[6] >= 0 && IDArray[6] <= 2) dispatch(selectSecondaryRunes(Number(IDArray[6]), Number(IDArray[7])))
        if (IDArray[8] >= 0 && IDArray[8] <= 2) dispatch(selectSecondaryRunes(Number(IDArray[8]), Number(IDArray[9])))
      }
      return {
        type: ActionTypes.LOAD_FROM_PERMALINK,
      }
    }
  } else
    return {
      type: ActionTypes.LOAD_FROM_PERMALINK_ERROR,
    }
}

export const makePermalink = () => {
  const {
    PRIMARY_FLAVOR,
    KEYSTONE,
    PRIMARY_T1,
    PRIMARY_T2,
    PRIMARY_T3,
    SECONDARY_FLAVOR,
    SECONDARY_T1_ROW,
    SECONDARY_T1_ID,
    SECONDARY_T2_ROW,
    SECONDARY_T2_ID,
  } = store.getState().composition

  const pathID =
    (PRIMARY_FLAVOR === null ? 'n' : PRIMARY_FLAVOR) +
    '_' +
    (KEYSTONE === null ? 'n' : KEYSTONE) +
    '_' +
    (PRIMARY_T1 === null ? 'n' : PRIMARY_T1) +
    '_' +
    (PRIMARY_T2 === null ? 'n' : PRIMARY_T2) +
    '_' +
    (PRIMARY_T3 === null ? 'n' : PRIMARY_T3) +
    '_' +
    (SECONDARY_FLAVOR === null ? 'n' : SECONDARY_FLAVOR) +
    '_' +
    (SECONDARY_T1_ROW === null ? 'n' : SECONDARY_T1_ROW) +
    '_' +
    (SECONDARY_T1_ID === null ? 'n' : SECONDARY_T1_ID) +
    '_' +
    (SECONDARY_T2_ROW === null ? 'n' : SECONDARY_T2_ROW) +
    '_' +
    (SECONDARY_T2_ID === null ? 'n' : SECONDARY_T2_ID)
  return {
    type: ActionTypes.MAKE_PERMALINK,
    payload: pathID,
  }
}

export const loadImgFromStorage = (imgPath, pathID) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const storageRef = firebase.storage().ref()
    storageRef
      .child(imgPath)
      .getDownloadURL()
      .then(function(url) {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        // var xhr = new XMLHttpRequest()
        // xhr.responseType = 'blob'
        // xhr.onload = function(event) {
        //   var blob = xhr.response
        // }
        // xhr.open('GET', url)
        // xhr.send()

        // // Or inserted into an <img> element:
        // var img = document.getElementById('myimg')
        // img.src = url
        console.log(url)

        return {
          type: ActionTypes.LOAD_IMAGE,
        }
      })
      .catch(function(error) {
        // Handle any errors
        console.log(error)
      })
  }
}
