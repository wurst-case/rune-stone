import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import firebaseConfig from '../constants/firebaseConfig'
import { initialState, rootReducer } from '../reducers/index'

const middlewares = [ReduxThunk.withExtraArgument({ getFirebase, getFirestore })]

const enhancers = [
  applyMiddleware(...middlewares),
  reduxFirestore(firebaseConfig),
  // reactReduxFirebase(firebaseConfig) <--------- Breaks in v3 and up
]

const reduxDevToolsExtension = window.devToolsExtension
if (process.env.NODE_ENV === 'development' && typeof reduxDevToolsExtension === 'function') {
  enhancers.push(reduxDevToolsExtension())
}

const composedEnhancers = compose(...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store

// const { default: store } = process.env.NODE_ENV === 'production'
//   ? require('./storeProd')
//   : require('./storeDev')

// // Exporting the store, then use it anywhere like store.getState() or store.dispatch()
// module.exports = store()
