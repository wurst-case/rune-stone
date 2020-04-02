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
  PRIMARY_FLAVOR: 1,
  KEYSTONE: null,
  PRIMARY_T1: null,
  PRIMARY_T2: null,
  PRIMARY_T3: null,
  SECONDARY_FLAVOR: 0,
  SECONDARY_T1_ROW: null,
  SECONDARY_T1_ID: null,
  SECONDARY_T2_ROW: null,
  SECONDARY_T2_ID: null,
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
      state.SECONDARY_FLAVOR =
        state.SECONDARY_FLAVOR === 0 ? 0 : action.payload === state.SECONDARY_FLAVOR ? 0 : state.SECONDARY_FLAVOR
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
      return {
        ...state,
        SECONDARY_FLAVOR: action.payload,
        SECONDARY_T1_ROW: null,
        SECONDARY_T1_ID: null,
        SECONDARY_T2_ROW: null,
        SECONDARY_T2_ID: null,
      }

    case ActionTypes.SELECT_SECONDARY_RUNES:
      // Is the first slot active?
      if (state['OPEN']['SECONDARY']['T1'] === true) {
        // No picking from the last row
        if (action.payload.ROW !== 2) {
          //Close menu and deactivate rune
          state['OPEN']['SECONDARY']['T1'] = false
          // If the active slot is sent the middle row rune and the nonacitve already has it then
          if (state.SECONDARY_T2_ROW === 1 && action.payload.ROW === 1)
            // OPTION 1: Erase non-active slot and give rune to active slot
            // return {
            //   ...state,
            //   SECONDARY_T1_ROW: action.payload.ROW,
            //   SECONDARY_T1_ID: action.payload.ID,
            //   SECONDARY_T2_ROW: null,
            //   SECONDARY_T2_ID: null,
            // }
            // OPTION 2: Give rune to non-active slot
            return {
              ...state,
              SECONDARY_T2_ROW: action.payload.ROW,
              SECONDARY_T2_ID: action.payload.ID,
            }
          else
            return {
              ...state,
              SECONDARY_T1_ROW: action.payload.ROW,
              SECONDARY_T1_ID: action.payload.ID,
            }
        } else return { ...state }
      }
      // Is the second slot active?
      else {
        // No picking from the first row
        if (action.payload.ROW !== 0) {
          //Close menu and deactivate rune
          state['OPEN']['SECONDARY']['T2'] = false
          // If the active slot is sent the middle row rune and the nonacitve already has it then
          if (state.SECONDARY_T1_ROW === 1 && action.payload.ROW === 1)
            // OPTION 1: Erase non-active slot and give rune to active slot
            // return {
            //   ...state,
            //   SECONDARY_T2_ROW: action.payload.ROW,
            //   SECONDARY_T2_ID: action.payload.ID,
            //   SECONDARY_T1_ROW: null,
            //   SECONDARY_T1_ID: null,
            // }
            // OPTION 2: Give rune to non-active slot
            return {
              ...state,
              SECONDARY_T1_ROW: action.payload.ROW,
              SECONDARY_T1_ID: action.payload.ID,
            }
          else
            return {
              ...state,
              SECONDARY_T2_ROW: action.payload.ROW,
              SECONDARY_T2_ID: action.payload.ID,
            }
        } else return { ...state }
      }

    case ActionTypes.TOGGLE_MENU:
      if (action.payload.tree === 'SECONDARY') {
        //Logic for default flavor in second menu
        if (state.SECONDARY_FLAVOR === 0) state['OPEN']['SECONDARY'][action.payload.tier] = false
        else {
          //Logic for secondary tree opening and closing together
          state['OPEN']['SECONDARY'][action.payload.tier] = action.payload.value
          state['OPEN']['SECONDARY'][action.payload.tier === 'T1' ? 'T2' : 'T1'] = false
        }
      } else state['OPEN']['PRIMARY'][action.payload.tier] = action.payload.value
      return { ...state }
    default:
      return state
  }
}
