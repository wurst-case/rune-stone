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
  SECONDARY_FLAVOR: 0,
  SECONDARY_T1: null,
  SECONDARY_T2: null,
  OPEN: {
    PRIMARY: {
      FLAVOR: null,
      KEYSTONE: null,
      T1: null,
      T2: null,
      T3: null,
    },
    SECONDARY: {
      FLAVOR: null,
      T1: null,
      T2: null,
    },
  },
}

export default function composition(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState
    case ActionTypes.SELECT_PRIMARY_FLAVOR:
      state['OPEN']['PRIMARY']['FLAVOR'] = false
      return {
        ...state,
        PRIMARY_FLAVOR: action.payload,
        KEYSTONE: null,
        PRIMARY_T1: null,
        PRIMARY_T2: null,
        PRIMARY_T3: null,
      }
    case ActionTypes.SELECT_KEYSTONE:
      state['OPEN']['PRIMARY']['KEYSTONE'] = false
      return { ...state, KEYSTONE: action.payload }
    case ActionTypes.SELECT_PRIMARY_T1:
      state['OPEN']['PRIMARY']['T1'] = false
      return { ...state, PRIMARY_T1: action.payload }
    case ActionTypes.SELECT_PRIMARY_T2:
      state['OPEN']['PRIMARY']['T2'] = false
      return { ...state, PRIMARY_T2: action.payload }
    case ActionTypes.SELECT_PRIMARY_T3:
      state['OPEN']['PRIMARY']['T3'] = false
      return { ...state, PRIMARY_T3: action.payload }
    case ActionTypes.SELECT_SECONDARY_FLAVOR:
      state['OPEN']['SECONDARY']['FLAVOR'] = false
      return { ...state, SECONDARY_FLAVOR: action.payload, SECONDARY_T1: null, SECONDARY_T2: null }
    case ActionTypes.SELECT_SECONDARY_T1:
      state['OPEN']['SECONDARY']['T1'] = false
      return { ...state, SECONDARY_T1: action.payload }
    case ActionTypes.SELECT_SECONDARY_T2:
      state['OPEN']['SECONDARY']['T2'] = false
      return { ...state, SECONDARY_T2: action.payload }
    case ActionTypes.TOGGLE_MENU:
      // state['OPEN'][action.payload.tree][action.payload.tier] = state['OPEN'][action.payload.tree][action.payload.tier]
      //   ? false
      //   : true
      state['OPEN'][action.payload.tree][action.payload.tier] = action.payload.value
      return { ...state }
    default:
      return state
  }
}
