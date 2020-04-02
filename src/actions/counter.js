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
    payload: { ...menu, value: composition['OPEN'][menu.tree][menu.tier] === true ? false : true },
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
