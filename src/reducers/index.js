import { combineReducers } from 'redux'
import composition from './composition'
import editor from './editor'

const rootReducer = combineReducers({
  composition,
  editor,
})

export default rootReducer
