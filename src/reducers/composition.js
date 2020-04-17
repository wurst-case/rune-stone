import ActionTypes from '../constants/actionTypes'

export const initialState = {
  PRIMARY_FLAVOR: 1,
  KEYSTONE: null,
  PRIMARY_T1: null,
  PRIMARY_T2: null,
  PRIMARY_T3: null,
  SECONDARY_FLAVOR: null,
  SECONDARY_T1_ROW: null,
  SECONDARY_T1_ID: null,
  SECONDARY_T2_ROW: null,
  SECONDARY_T2_ID: null,
  OPEN: {
    PRIMARY: {
      FLAVOR: true,
      KEYSTONE: null,
      T1: null,
      T2: null,
      T3: null,
    },
    SECONDARY: {
      FLAVOR: null,
      RUNES: null,
    },
  },
  RUNE_INFO: null,
  paths: null,
  slotMachine: null,
}

export function composition(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState
    case ActionTypes.SELECT_PRIMARY_FLAVOR:
      // Close menu, open next menu
      state.OPEN.PRIMARY.FLAVOR = false
      if (state.KEYSTONE === null) state.OPEN.PRIMARY.KEYSTONE = true
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
      // Close menu, open next menu
      state.OPEN.PRIMARY.KEYSTONE = false
      if (state.PRIMARY_T1 === null) state.OPEN.PRIMARY.T1 = true
      return { ...state, KEYSTONE: action.payload }
    case ActionTypes.SELECT_PRIMARY_T1:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T1 = false
      if (state.PRIMARY_T2 === null) state.OPEN.PRIMARY.T2 = true
      return { ...state, PRIMARY_T1: action.payload }
    case ActionTypes.SELECT_PRIMARY_T2:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T2 = false
      if (state.PRIMARY_T3 === null) state.OPEN.PRIMARY.T3 = true
      return { ...state, PRIMARY_T2: action.payload }
    case ActionTypes.SELECT_PRIMARY_T3:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T3 = false
      if (state.SECONDARY_FLAVOR === 0) state.OPEN.SECONDARY.FLAVOR = true
      // Bandle SLot machine
      if (action.payload === 2 && state.PRIMARY_FLAVOR === 1) {
        var possible = [1, 2, 3, 4, 5, 6].filter(
          (val) => val !== state.SECONDARY_FLAVOR && val !== state.PRIMARY_FLAVOR,
        )
        return {
          ...state,
          PRIMARY_T3: action.payload,
          slotMachine: {
            flavor: possible[Math.floor(Math.random() * 4)],
            tier: Math.floor(Math.random() * 3 + 1),
            id: Math.floor(Math.random() * 3),
          },
        }
      }
      return { ...state, PRIMARY_T3: action.payload, slotMachine: null }
    case ActionTypes.SELECT_SECONDARY_FLAVOR:
      // Close menu, open next menu
      state.OPEN.SECONDARY.FLAVOR = false
      if (state.SECONDARY_T1_ROW === null) state.OPEN.SECONDARY.RUNES = true
      return {
        ...state,
        SECONDARY_FLAVOR: action.payload,
        SECONDARY_T1_ROW: null,
        SECONDARY_T1_ID: null,
        SECONDARY_T2_ROW: null,
        SECONDARY_T2_ID: null,
      }

    case ActionTypes.SELECT_SECONDARY_RUNES:
      if (state.SECONDARY_T1_ROW === null && state.SECONDARY_T1_ROW === null) {
        // If both slots are empty give the selection to the first slot no matter what
        return { ...state, SECONDARY_T1_ROW: action.payload.ROW, SECONDARY_T1_ID: action.payload.ID }
      } else if (action.payload.ROW > state.SECONDARY_T1_ROW) {
        // If the second selection's row is greater than the first selection's row, give it to the second slot and close menu
        state.OPEN.SECONDARY.RUNES = false
        return { ...state, SECONDARY_T2_ROW: action.payload.ROW, SECONDARY_T2_ID: action.payload.ID }
      } else if (action.payload.ROW < state.SECONDARY_T1_ROW) {
        // If the second selection's row is less than the first selection's row, give it to the first slot
        // and shuffle the first slot's previous selection to the second slot and close menu
        state.OPEN.SECONDARY.RUNES = false
        return {
          ...state,
          SECONDARY_T1_ROW: action.payload.ROW,
          SECONDARY_T1_ID: action.payload.ID,
          SECONDARY_T2_ROW: state.SECONDARY_T1_ROW,
          SECONDARY_T2_ID: state.SECONDARY_T1_ID,
        }
      } else if (action.payload.ROW === state.SECONDARY_T1_ROW) {
        // If the selection's row is equal to the first slot's row, give it to the first slot
        return { ...state, SECONDARY_T1_ROW: action.payload.ROW, SECONDARY_T1_ID: action.payload.ID }
      } else if (action.payload.ROW === state.SECONDARY_T2_ROW) {
        // If the selection's row is equal to the second slot's row, give it to the second slot
        return { ...state, SECONDARY_T2_ROW: action.payload.ROW, SECONDARY_T2_ID: action.payload.ID }
      } else return { ...state }

    case ActionTypes.TOGGLE_MENU:
      if (action.payload.tree === 'SECONDARY') {
        // Normal toggle for flavor
        if (action.payload.tier === 'FLAVOR') state.OPEN.SECONDARY.FLAVOR = action.payload.value
        //Logic for default flavor in second menu
        else if (state.SECONDARY_FLAVOR === 0) state.OPEN.SECONDARY.RUNES = false
        else if (state.SECONDARY_T1_ROW === null || state.SECONDARY_T2_ROW === null) {
          // If either secondary runes are null forbid closing the menu otherwise open and close on command
          state.OPEN.SECONDARY.RUNES = true
        } else {
          // otherwise open and clear rune selection, menu only closes when both have been selected
          state.OPEN.SECONDARY.RUNES = true
          return {
            ...state,
            SECONDARY_T1_ROW: null,
            SECONDARY_T1_ID: null,
            SECONDARY_T2_ROW: null,
            SECONDARY_T2_ID: null,
          }
        }
      } else state['OPEN']['PRIMARY'][action.payload.tier] = action.payload.value
      return { ...state }

    case ActionTypes.TOGGLE_INFO_DISPLAY:
      // Either will be a rune object if open or null if closed
      return { ...state, RUNE_INFO: action.payload }
    case ActionTypes.LOAD_ALL_PATHS:
      return { ...state, paths: action.payload }
    default:
      return state
  }
}
