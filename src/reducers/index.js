import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { composition, initialState as compositionInitial } from './composition'
import { editor, initialState as editorInitial } from './editor'

export const initialState = {
  composition: compositionInitial,
  editor: editorInitial,
}

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  composition: composition,
  editor: editor,
})

export default rootReducer
