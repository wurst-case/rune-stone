import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
import { getFirebase } from 'react-redux-firebase'

const middlewares = [ReduxThunk.withExtraArgument(getFirebase)]

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}
