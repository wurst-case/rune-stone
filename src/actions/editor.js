import ActionTypes from '../constants/actionTypes'

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
  console.log(tier)
  return {
    type: ActionTypes.ADD_RUNE,
    payload: { tier: tier },
  }
}
