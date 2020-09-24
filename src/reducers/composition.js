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
      FLAVOR: null,
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
  fresh: true,
  pathID: null,
  perks: null,
}

export function composition(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET:
      return {
        ...initialState,
        PRIMARY_FLAVOR: state.PRIMARY_FLAVOR,
        paths: state.paths,
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
            RUNES: null,
          },
        },
      }
    case ActionTypes.SELECT_PRIMARY_FLAVOR:
      // If on mobile, close all menus and open keystone
      if (action.payload.mobile) {
        state.OPEN.PRIMARY.T1 = false
        state.OPEN.PRIMARY.T2 = false
        state.OPEN.PRIMARY.T3 = false
      }
      // Close menu, open next menu
      state.OPEN.PRIMARY.FLAVOR = false
      state.OPEN.PRIMARY.KEYSTONE = true
      state.SECONDARY_FLAVOR =
        state.SECONDARY_FLAVOR === 0 // IS the second flavor in the empty state?
          ? 0 // Yes? keep it there.
          : action.payload.id === state.SECONDARY_FLAVOR //No? Is it the same as the path we picked for primary?
          ? 0 // Yes? Switch secondary to empty state.
          : state.SECONDARY_FLAVOR // No? Keep it as it is.
      return {
        ...state,
        PRIMARY_FLAVOR: action.payload.id,
        KEYSTONE: null,
        PRIMARY_T1: null,
        PRIMARY_T2: null,
        PRIMARY_T3: null,
        slotMachine: null,
      }
    case ActionTypes.SELECT_KEYSTONE:
      // Close menu, open next menu
      state.OPEN.PRIMARY.KEYSTONE = false
      if (state.PRIMARY_T1 === null) state.OPEN.PRIMARY.T1 = true
      return {
        ...state,
        KEYSTONE: action.payload,
        slotMachine: state.KEYSTONE === action.payload ? state.slotMachine : null,
      }
    case ActionTypes.SELECT_PRIMARY_T1:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T1 = false
      if (state.PRIMARY_T2 === null) state.OPEN.PRIMARY.T2 = true
      return {
        ...state,
        PRIMARY_T1: action.payload,
        slotMachine: state.PRIMARY_T1 === action.payload ? state.slotMachine : null,
      }
    case ActionTypes.SELECT_PRIMARY_T2:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T2 = false
      if (state.PRIMARY_T3 === null) state.OPEN.PRIMARY.T3 = true
      return {
        ...state,
        PRIMARY_T2: action.payload,
        slotMachine: state.PRIMARY_T2 === action.payload ? state.slotMachine : null,
      }
    case ActionTypes.SELECT_PRIMARY_T3:
      // Close menu, open next menu
      state.OPEN.PRIMARY.T3 = false
      if (state.SECONDARY_FLAVOR === 0) state.OPEN.SECONDARY.FLAVOR = true
      return {
        ...state,
        PRIMARY_T3: action.payload,
        slotMachine: state.PRIMARY_T3 === action.payload ? state.slotMachine : null,
      }
    case ActionTypes.RESET_SLOT_MACHINE:
      return { ...state, slotMachine: null }
    case ActionTypes.TRIGGER_SLOT:
      if (state.paths) {
        var possibleRunes = state.paths.map((rune, i) => ({
          id: i,
          tiers: [
            { id: 0, runes: Array.from(Array(rune.tier1.length).keys()) },
            { id: 1, runes: Array.from(Array(rune.tier2.length).keys()) },
            { id: 2, runes: Array.from(Array(rune.tier3.length).keys()) },
          ],
        }))
        //  none from the rows of picked runes of secondary tree, make sure to splice the second one first
        possibleRunes[state.SECONDARY_FLAVOR].tiers.splice(state.SECONDARY_T2_ROW, 1)
        possibleRunes[state.SECONDARY_FLAVOR].tiers.splice(state.SECONDARY_T1_ROW, 1)
        //  none from the rows of primary tree
        possibleRunes.splice(state.PRIMARY_FLAVOR, 1)
        // remove empty path
        possibleRunes.splice(0, 1)
        // Random number 1 - 5
        var rand1 = Math.floor(Math.random() * possibleRunes.length)
        // Random number 1 - 3 except for the path that is in the secondary tree, tree selected is equal to rand 1
        var rand2 = Math.floor(Math.random() * possibleRunes[rand1].tiers.length)
        // Random numner 1-3 or 1-4 depending on how many runes on the tier equal to rand2 and tree equal to rand 1
        var rand3 = Math.floor(Math.random() * possibleRunes[rand1].tiers[rand2].runes.length)
        // None from 1 aka bandle, none from other
        return {
          ...state,
          slotMachine: {
            flavor: possibleRunes[rand1].id,
            tier: possibleRunes[rand1].tiers[rand2].id,
            id: possibleRunes[rand1].tiers[rand2].runes[rand3],
          },
        }
      } else return state
    case ActionTypes.SELECT_SECONDARY_FLAVOR:
      if (state.SECONDARY_FLAVOR !== null) state.fresh = false
      // Close menu, open next menu
      state.OPEN.SECONDARY.FLAVOR = false
      state.OPEN.SECONDARY.RUNES = true
      return {
        ...state,
        SECONDARY_FLAVOR: action.payload,
        SECONDARY_T1_ROW: null,
        SECONDARY_T1_ID: null,
        SECONDARY_T2_ROW: null,
        SECONDARY_T2_ID: null,
        slotMachine: null,
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
      if (action.payload.tier === 'T3') {
        if (state.PRIMARY_FLAVOR === 1 && state.PRIMARY_T3 === 2) state.slotMachine = null
      }
      if (action.payload.tree === 'SECONDARY') {
        // Normal toggle for flavor
        if (action.payload.tier === 'FLAVOR') state.OPEN.SECONDARY.FLAVOR = action.payload.value
        //Logic for default flavor in second menu
        else if (state.SECONDARY_FLAVOR === 0 || state.SECONDARY_FLAVOR === null) {
          state.OPEN.SECONDARY.FLAVOR = true
          state.OPEN.SECONDARY.RUNES = false
        } else if (state.SECONDARY_T1_ROW === null || state.SECONDARY_T2_ROW === null) {
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
            pathID: null,
            fresh: false,
            slotMachine: null,
          }
        }
      } else state['OPEN']['PRIMARY'][action.payload.tier] = action.payload.value
      return { ...state }

    case ActionTypes.TOGGLE_INFO_DISPLAY:
      // Either will be a rune object if open or null if closed
      return { ...state, RUNE_INFO: action.payload }
    case ActionTypes.LOAD_ALL_PATHS:
      const riotAssetUrl = 'https://ddragon.leagueoflegends.com/cdn/img/'
      let paths = action.payload.map((path) => {
        if (path.slots) {
          var slots = path.slots.map((slot) => {
            return slot.runes.map((rune) => {
              let img = riotAssetUrl + rune.icon
              let detail = rune.longDesc
                .replace(/(<\/?scale\w*>)/gm, '')
                .replace(/(<\/?stat\w*>)/gm, '')
                .replace(/(<\/?hr>)/gm, '')
                .replace(/(<\/?rules>)/gm, '')
                .replace(/(<p>\s?<\/p>)/gm, '')
              // Remove Riot's custom html tags
              let tooltip = rune.shortDesc
                .replace(/(<lol-uikit[^>]*>)/gm, '<strong style="color:white;">')
                .replace(/(<\/lol-uikit[^>]*>)/gm, '</strong>')
              // Replaces Riot's custom html tags with standard tags and styling
              return { ...rune, img, detail, tooltip }
            })
          })
          return {
            ...path,
            keystones: slots[0],
            tier1: slots[1],
            tier2: slots[2],
            tier3: slots[3],
          }
        } else {
          let mutatedKeystones = path.keystones.map((rune) => {
            return { ...rune, detail: rune.detail.replace(/(<p>\s?<\/p>)/gm, '').replace(/(\n\n)/gm, '\n') }
          })
          let mutatedTier1 = path.tier1.map((rune) => {
            return { ...rune, detail: rune.detail.replace(/(<p>\s?<\/p>)/gm, '').replace(/(\n\n)/gm, '\n') }
          })
          let mutatedTier2 = path.tier2.map((rune) => {
            return { ...rune, detail: rune.detail.replace(/(<p>\s?<\/p>)/gm, '').replace(/(\n\n)/gm, '\n') }
          })
          let mutatedTier3 = path.tier3.map((rune) => {
            return { ...rune, detail: rune.detail.replace(/(<p>\s?<\/p>)/gm, '').replace(/(\n\n)/gm, '\n') }
          })
          return {
            ...path,
            keystones: mutatedKeystones,
            tier1: mutatedTier1,
            tier2: mutatedTier2,
            tier3: mutatedTier3,
          }
        } // If this is a custom path without the riot api slots, return it with p tag bug mutation
      })
      // Retrun the state with the mapped paths
      return {
        ...state,
        paths: paths,
      }
    case ActionTypes.MAKE_PERMALINK:
      return { ...state, pathID: action.payload }
    case ActionTypes.LOAD_FROM_PERMALINK:
      return { ...state, pathID: action.payload }
    default:
      return state
  }
}
