import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var config = {
  apiKey: 'AIzaSyCt3sfiLtu_lFg5tDlMtWwgaJr0sPMrSCk',
  authDomain: 'custom-rune-pages.firebaseapp.com',
  databaseURL: 'https://custom-rune-pages.firebaseio.com',
  projectId: 'custom-rune-pages',
  storageBucket: 'custom-rune-pages.appspot.com',
  messagingSenderId: '623360683881',
  appId: '1:623360683881:web:d033e2d9cc23de167cd7f8',
  measurementId: 'G-SQK32ZWTFF',
}

firebase.initializeApp(config)
firebase.firestore().settings({})

export default firebase
