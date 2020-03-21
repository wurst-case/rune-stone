import ActionTypes from '../constants/actionTypes'

const initCounterState = 0

export function counter(state = initCounterState, action) {
  switch (action.type) {
    //COUNTER
    case ActionTypes.INCREMENT_COUNTER:
      return state + 1
    case ActionTypes.DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}

const initialState = {
  PRIMARY_FLAVOR: 0,
  KEYSTONE: null,
  PRIMARY_T1: null,
  PRIMARY_T2: null,
  PRIMARY_T3: null,
  SECONDARY_FLAVOR: null,
  SECONDARY_T1: null,
  SECONDARY_T2: null,
}

export default function composition(state = initialState, action) {
  console.log('...activating switcher')
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState
    case ActionTypes.SELECT_PRIMARY_FLAVOR:
      console.log('...actioning ' + action.payload)
      return { ...state, PRIMARY_FLAVOR: action.payload }
    case ActionTypes.SELECT_KEYSTONE:
      return { ...state, KEYSTONE: action.payload }
    case ActionTypes.SELECT_PRIMARY_T1:
      return { ...state, PRIMARY_T1: action.payload }
    case ActionTypes.SELECT_PRIMARY_T2:
      return { ...state, PRIMARY_T2: action.payload }
    case ActionTypes.SELECT_PRIMARY_T3:
      return { ...state, PRIMARY_T3: action.payload }
    case ActionTypes.SELECT_SECONDARY_FLAVOR:
      return { ...state, SECONDARY_FLAVOR: action.payload }
    case ActionTypes.SELECT_SECONDARY_T1:
      return { ...state, SECONDARY_T1: action.payload }
    case ActionTypes.SELECT_SECONDARY_T2:
      return { ...state, SECONDARY_T2: action.payload }
    default:
      return state
  }
}
