import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions' // <- needed if using httpsCallable
// import 'firebase/database'

const config = {
  apiKey: 'AIzaSyCt3sfiLtu_lFg5tDlMtWwgaJr0sPMrSCk',
  authDomain: 'custom-rune-pages.firebaseapp.com',
  databaseURL: 'https://custom-rune-pages.firebaseio.com',
  projectId: 'custom-rune-pages',
  storageBucket: 'custom-rune-pages.appspot.com',
  messagingSenderId: '623360683881',
  appId: '1:623360683881:web:d033e2d9cc23de167cd7f8',
  measurementId: 'G-SQK32ZWTFF',
}

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

firebase.initializeApp(config)
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
firebase.functions() // <- needed if using httpsCallable

export default firebase
