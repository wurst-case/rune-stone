import ActionTypes from '../constants/actionTypes'

// Resume Display Actions

// LOAD_RESUME
export function loadResume() {
  return (dispatch, getState, getFirebase) => {
    const db = getFirebase().firestore()
    db.collection('resume')
      .doc('brian')
      .get()
      .then((doc) => dispatch({ type: ActionTypes.LOAD_RESUME, payload: doc.data() }))
      .catch((e) => console.log(e))
  }
}

// SELECT_RESUME_KEYSTONE
export const selectResumeKeystone = (id) => {
  return (dispatch) => {
    dispatch(toggleResumeMenu({ tier: 'KEYSTONE' }))
    dispatch({ type: ActionTypes.SELECT_RESUME_KEYSTONE, payload: id })
  }
}

// SELECT_RESUME_TIER1
export const selectResumeTier1 = (id) => {
  return (dispatch) => {
    dispatch(toggleResumeMenu({ tier: 'T1' }))
    dispatch({ type: ActionTypes.SELECT_RESUME_TIER1, payload: id })
  }
}

// SELECT_RESUME_TIER2
export const selectResumeTier2 = (id) => {
  return (dispatch) => {
    dispatch(toggleResumeMenu({ tier: 'T2' }))
    dispatch({
      type: ActionTypes.SELECT_RESUME_TIER2,
      payload: id,
    })
  }
}

// SELECT_RESUME_TIER3
export const selectResumeTier3 = (id) => {
  return (dispatch) => {
    dispatch(toggleResumeMenu({ tier: 'T3' }))
    dispatch({ type: ActionTypes.SELECT_RESUME_TIER3, payload: id })
  }
}

// TOGGLE_RESUME_MENU
export const toggleResumeMenu = (tier) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.TOGGLE_RESUME_MENU, payload: tier })
  }
}

// TOGGLE_RESUME_INFO
export const toggleResumeInfo = (rune) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.TOGGLE_RESUME_INFO, payload: rune || null })
  }
}

// Resume Editor Actions

// LOAD_RESUME_EDITOR
export const loadResumeEditor = () => {
  return {
    type: ActionTypes.LOAD_RESUME_EDITOR,
    payload: null,
  }
}

// SAVE_RESUME_EDITOR
export const saveResumeEditor = () => {
  return {
    type: ActionTypes.SAVE_RESUME_EDITOR,
    payload: null,
  }
}
