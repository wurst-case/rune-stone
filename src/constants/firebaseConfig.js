import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'custom-rune-pages.firebaseapp.com',
  databaseURL: 'https://custom-rune-pages.firebaseio.com',
  projectId: 'custom-rune-pages',
  storageBucket: 'custom-rune-pages.appspot.com',
  messagingSenderId: 'YOUR_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID',
}

firebase.initializeApp(config)
firebase.firestore().settings({})

export default firebase
