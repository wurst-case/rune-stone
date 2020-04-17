import ActionTypes from '../constants/actionTypes'
import store from '../store'

export function incrementIfOdd() {
  const { counter } = store.getState()
  if (counter % 2 === 0) return
  store.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
}

//Comp Utilities
export const resetFlavor = () => ({
  type: ActionTypes.RESET,
})
export const toggleMenu = (menu) => {
  const { composition } = store.getState()
  return {
    type: ActionTypes.TOGGLE_MENU,
    payload: { ...menu, value: !composition['OPEN'][menu.tree][menu.tier] },
  }
}

//Primary Comp
export const selectPrimaryFlavor = (id) => {
  return {
    type: ActionTypes.SELECT_PRIMARY_FLAVOR,
    payload: id,
  }
}
export const selectKeystone = (id) => ({
  type: ActionTypes.SELECT_KEYSTONE,
  payload: id,
})
export const selectPrimaryT1 = (id) => ({
  type: ActionTypes.SELECT_PRIMARY_T1,
  payload: id,
})
export const selectPrimaryT2 = (id) => ({
  type: ActionTypes.SELECT_PRIMARY_T2,
  payload: id,
})
export const selectPrimaryT3 = (id) => ({
  type: ActionTypes.SELECT_PRIMARY_T3,
  payload: id,
})

//Secondary Comp
export const selectSecondaryFlavor = (id) => ({
  type: ActionTypes.SELECT_SECONDARY_FLAVOR,
  payload: id,
})
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
