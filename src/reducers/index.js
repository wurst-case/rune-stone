import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { composition, initialState as compositionInitial } from './composition'
import { editor, initialState as editorInitial } from './editor'
import { resume, initialState as resumeInitial } from './resumeReducer'

export const initialState = {
  composition: compositionInitial,
  editor: editorInitial,
  resume: resumeInitial,
}

export const rootReducer = combineReducers({
  firebaseReducer: firebaseReducer,
  firestore: firestoreReducer,
  composition: composition,
  editor: editor,
  resume: resume,
})

export default rootReducer
