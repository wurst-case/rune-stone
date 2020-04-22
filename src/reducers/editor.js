import ActionTypes from '../constants/actionTypes'

export const initialState = {
  path: {
    title: '',
    subtitle: '',
    color: '#614924',
    colorRgb: '97,73,36',
    bg: null,
    emblem: null,
    icon: null,
  },
  keystones: [
    {
      name: '',
      tooltip: '',
      detail: '',
      img: null,
    },
  ],
  tiers: [
    {
      title: '',
      runes: [
        {
          name: '',
          tooltip: '',
          detail: '',
          img: null,
        },
      ],
    },
    {
      title: '',
      runes: [
        {
          name: '',
          tooltip: '',
          detail: '',
        },
      ],
    },
    {
      title: '',
      runes: [
        {
          name: '',
          tooltip: '',
          detail: '',
        },
      ],
    },
  ],
  colorPickerOpen: false,
  pathList: [],
  chosenPath: '',
}

export function editor(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_PATHS:
      return { ...state, pathList: action.payload }
    case ActionTypes.SET_CHOSEN_PATH:
      return { ...state, chosenPath: action.payload }
    case ActionTypes.SET_COLOR:
      return { ...state, path: { ...state.path, color: action.payload.hex, colorRgb: action.payload.rgb } }
    case ActionTypes.TOGGLE_COLOR_PICKER:
      return { ...state, colorPickerOpen: !state.colorPickerOpen }
    case ActionTypes.SET_PATH_TITLE:
      return { ...state, path: { ...state.path, title: action.payload.value } }
    case ActionTypes.SET_PATH_SUBTITLE:
      return { ...state, path: { ...state.path, subtitle: action.payload.value } }
    case ActionTypes.SET_KEYSTONE_NAME:
      return {
        ...state,
        keystones: state.keystones.map((keystone, id) =>
          id === action.payload.id ? { ...keystone, name: action.payload.value } : keystone,
        ),
      }
    case ActionTypes.SET_KEYSTONE_TOOLTIP:
      return {
        ...state,
        keystones: state.keystones.map((keystone, id) =>
          id === action.payload.id ? { ...keystone, tooltip: action.payload.value } : keystone,
        ),
      }
    case ActionTypes.SET_KEYSTONE_DETAILS:
      return {
        ...state,
        keystones: state.keystones.map((keystone, id) =>
          id === action.payload.id ? { ...keystone, detail: action.payload.value } : keystone,
        ),
      }
    case ActionTypes.SET_KEYSTONE_IMAGE:
      console.log(action.payload.value)

      return {
        ...state,
        keystones: state.keystones.map((keystone, id) =>
          id === action.payload.id ? { ...keystone, img: action.payload.value } : keystone,
        ),
      }
    case ActionTypes.SET_TIER_TITLE:
      return {
        ...state,
        tiers: state.tiers.map((item, tier) =>
          tier === action.payload.tier ? { ...item, title: action.payload.value } : item,
        ),
      }
    case ActionTypes.SET_RUNE_NAME:
      return {
        ...state,
        tiers: state.tiers.map((item, tier) =>
          tier === action.payload.tier
            ? {
                ...item,
                runes: item.runes.map((rune, id) =>
                  id === action.payload.id ? { ...rune, name: action.payload.value } : rune,
                ),
              }
            : item,
        ),
      }
    case ActionTypes.SET_RUNE_TOOLTIP:
      return {
        ...state,
        tiers: state.tiers.map((item, tier) =>
          tier === action.payload.tier
            ? {
                ...item,
                runes: item.runes.map((rune, id) =>
                  id === action.payload.id ? { ...rune, tooltip: action.payload.value } : rune,
                ),
              }
            : item,
        ),
      }
    case ActionTypes.SET_RUNE_IMAGE:
      return {
        ...state,
        tiers: state.tiers.map((item, tier) =>
          tier === action.payload.tier
            ? {
                ...item,
                runes: item.runes.map((rune, id) =>
                  id === action.payload.id ? { ...rune, img: action.payload.value } : rune,
                ),
              }
            : item,
        ),
      }
    case ActionTypes.SET_RUNE_DETAILS:
      return {
        ...state,
        tiers: state.tiers.map((item, tier) =>
          tier === action.payload.tier
            ? {
                ...item,
                runes: item.runes.map((rune, id) =>
                  id === action.payload.id ? { ...rune, detail: action.payload.value } : rune,
                ),
              }
            : item,
        ),
      }
    case ActionTypes.ADD_RUNE:
      let runes = state.tiers[action.payload.tier].runes
      if (runes.length < 5)
        runes.push({
          name: '',
          tooltip: '',
          detail: '',
        })
      return {
        ...state,
        tiers: state.tiers.map((tier, tierId) =>
          tierId === action.payload.tier
            ? {
                ...tier,
                runes: runes,
              }
            : tier,
        ),
      }
    case ActionTypes.ADD_KEYSTONE:
      var k = []
      state.keystones.forEach((keystone) => k.push(keystone))
      if (k.length < 5)
        k.push({
          name: '',
          tooltip: '',
          detail: '',
        })
      return {
        ...state,
        keystones: k,
      }
    case ActionTypes.SAVE_NEW_PATH:
      return state
    case ActionTypes.NEW_PATH_ERROR:
      console.log('New Path Error', action.err)
      return state
    case ActionTypes.SELECT_IMAGE:
      switch (action.payload.tier) {
        case 0:
          return {
            ...state,
            keystones: state.keystones.map((keystone, id) =>
              id === action.payload.id ? { ...keystone, img: action.payload.img } : keystone,
            ),
          }
        case 1:
        case 2:
        case 3:
          return {
            ...state,
            tiers: state.tiers.map((item, tier) =>
              tier === action.payload.tier - 1
                ? {
                    ...item,
                    runes: item.runes.map((rune, id) =>
                      id === action.payload.id ? { ...rune, img: action.payload.img } : rune,
                    ),
                  }
                : item,
            ),
          }
        case 4:
          return { ...state, path: { ...state.path, bg: action.payload.img } }
        case 5:
          return { ...state, path: { ...state.path, emblem: action.payload.img } }
        case 6:
          return { ...state, path: { ...state.path, icon: action.payload.img } }
        default:
          return state
      }
    default:
      return state
  }
}
