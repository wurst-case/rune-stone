import ActionTypes from '../constants/actionTypes'

export const resetEditor = (value) => ({
  type: ActionTypes.RESET_EDITOR,
})

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

export const setKeystoneImage = (id, value) => ({
  type: ActionTypes.SET_KEYSTONE_IMAGE,
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

export const setRuneImage = (tier, id, value) => ({
  type: ActionTypes.SET_RUNE_IMAGE,
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

export const setChosenPath = (path) => {
  console.log(path)

  return (dispatch) => {
    dispatch(loadPathFromFirestore(path))
    dispatch({
      type: ActionTypes.SET_CHOSEN_PATH,
      payload: path,
    })
  }
}

//FIRESTORE

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

export const loadPathNamesFromFirestore = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .get({ collection: 'paths' })
      .then((col) => {
        let pathList = col.docs.map((d) => ({ id: d.id, name: d.data().name })).filter((p) => p.id !== 'empty')
        // console.log(pathList)
        dispatch({
          type: ActionTypes.LOAD_ALL_PATHS,
          payload: pathList,
        })
      })
      .catch({ type: ActionTypes.LOAD_PATH_ERROR })
  }
}

export const loadPathFromFirestore = (pathId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .get({ collection: 'paths', doc: pathId })
      .then((doc) => {
        let d = doc.data()
        dispatch(resetEditor())
        dispatch(setColor(d.colorHex, d.colorRGB))
        dispatch(setPathTitle(d.name))
        dispatch(setPathSubtitle(d.subtitle))
        d.keystones.forEach((keystone, id) => {
          if (id !== 0) dispatch(addKeystone())
          dispatch(setKeystoneName(id, keystone.name))
          dispatch(setKeystoneDetails(id, keystone.detail))
          dispatch(setKeystoneTooltip(id, keystone.tooltip))
          dispatch(setKeystoneImage(id, keystone.img))
        })
        d.tierNames.forEach((name, tier) => {
          dispatch(setTierTitle(tier, name))
          d['tier' + (tier + 1)].forEach((rune, id) => {
            if (id !== 0) dispatch(addRune(tier))
            dispatch(setRuneName(tier, id, rune.name))
            dispatch(setRuneDetails(tier, id, rune.detail))
            dispatch(setRuneTooltip(tier, id, rune.tooltip))
            dispatch(setRuneImage(tier, id, rune.img))
          })
        })
      })
      .catch({ type: ActionTypes.LOAD_PATH_ERROR })
  }
}

export const saveEditedPath = (path) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState().editor
    const firestore = getFirestore()
    console.log(path)
    // uploadIcon(path.icon, state.chosenPath)
    firestore
      .collection('paths')
      .doc(state.chosenPath)
      .update({
        colorHex: path.path.color,
        colorRGB: path.path.colorRgb,
        name: path.path.title,
        subtitle: path.path.subtitle,
        keystones: path.keystones.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          tooltip: rune.tooltip,
          img: rune.img,
        })),
        tier1: path.tiers[0].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          tooltip: rune.tooltip,
          img: rune.img,
        })),
        tier2: path.tiers[1].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          tooltip: rune.tooltip,
          img: rune.img,
        })),
        tier3: path.tiers[2].runes.map((rune, i) => ({
          name: rune.name,
          detail: rune.detail,
          tooltip: rune.tooltip,
          img: rune.img,
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

export const selectImage = (img, tier, id) => {
  return {
    type: ActionTypes.SELECT_IMAGE,
    payload: {
      tier: tier,
      id: id,
      img: img,
    },
  }
}

export const uploadIcon = (img, path) => {
  console.log('actioning upload')

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get access to firebase services
    // const firestore = getFirestore()
    const firebase = getFirebase()
    // Upload image and get path to storage location
    // Create a root reference
    var storageRef = firebase.storage().ref()
    console.log('aquired storage ref', storageRef)

    // File or Blob named mountains.jpg
    var file = img

    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg',
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata)
    console.log('uplaod task: ', uploadTask)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      function(error) {
        console.log(error)

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
          default:
            break
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL)
          // firestore
          //   .collection('paths')
          //   .doc(path)
          //   .update({
          //     icon: downloadURL,
          //   })
          //   .then((res) => {
          //     console.log(res)
          //     dispatch({ type: ActionTypes.UPLOAD_IMAGE })
          //   })
          //   .catch({ type: ActionTypes.SAVE_PATH_ERROR })
        })
      },
    )
  }
}

export const uploadImage = (img, path, tier, rune) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Get access to firebase services
    const firestore = getFirestore()
    const firebase = getFirebase()
    // Upload image and get path to storage location
    var imgStorePath

    /************************ From FB Docs*/

    // Create a root reference
    var storageRef = firebase.storage().ref()

    // File or Blob named mountains.jpg
    var file = img

    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg',
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
          default:
            break
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
          default:
            break
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL)
          imgStorePath = downloadURL
        })
      },
    )

    /************************ From FB Docs*/

    // Get a copy of the current path data
    var pathCopy
    firestore
      .get({ collection: 'paths', doc: path })
      .then((doc) => {
        pathCopy = doc.data()
      })
      .catch({ type: ActionTypes.LOAD_PATH_ERROR })
    // Modify copy to update image location
    var imgPathToUpdate = {}
    switch (tier) {
      case 0: //Keystone
        pathCopy.keystones[rune] = imgStorePath
        imgPathToUpdate = {
          keystones: pathCopy.keystones,
        }
        break
      case 1: //Tier1
        pathCopy.tier1[rune] = imgStorePath
        imgPathToUpdate = {
          tier1: pathCopy.tier1,
        }
        break
      case 2: //Tier2
        pathCopy.tier2[rune] = imgStorePath
        imgPathToUpdate = {
          tier2: pathCopy.tier2,
        }
        break
      case 3: //Tier3
        pathCopy.tier3[rune] = imgStorePath
        imgPathToUpdate = {
          tier3: pathCopy.tier3,
        }
        break
      case 4: //Path Icon
        imgPathToUpdate = {
          src: imgStorePath,
        }
        break
      case 5: //Path Background
        imgPathToUpdate = {
          bg: imgStorePath,
        }
        break
      case 6: //Path Emblem
        imgPathToUpdate = {
          emblem: imgStorePath,
        }
        break
      default:
        break
    }
    // Update the proper path data to include the new image location and dispatch
    firestore
      .collection('paths')
      .doc(path)
      .update(imgPathToUpdate)
      .then((res) => {
        console.log(res)
        dispatch({ type: ActionTypes.UPLOAD_IMAGE })
      })
      .catch({ type: ActionTypes.SAVE_PATH_ERROR })
  }
}
